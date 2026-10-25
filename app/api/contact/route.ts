import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get("origin")
    const allowedOrigin = new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.foundrgroup.co.za"
    ).origin

    if (origin !== allowedOrigin) {
      return NextResponse.json(
        { error: "Invalid request origin." },
        { status: 403 }
      )
    }

    const body = await request.json()
    const { name, email, phone, message, website } = body

    if (website) {
      return NextResponse.json({ success: true })
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      name.trim().length < 2 ||
      name.length > 150 ||
      message.trim().length < 10 ||
      message.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      (phone !== undefined && typeof phone !== "string")
    ) {
      return NextResponse.json(
        { error: "Please check your enquiry details." },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing")
      return NextResponse.json(
        { error: "Email service unavailable." },
        { status: 503 }
      )
    }

    const clean = (value: string) =>
      value.replace(/[&<>"']/g, (character) => {
        const entities: Record<string, string> = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }
        return entities[character]
      })

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Foundr Website <enquiries@foundrgroup.co.za>",
        to: ["foundrdevelopments@outlook.com"],
        reply_to: email.trim(),
        subject: `New Foundr enquiry - ${name.trim().slice(0, 80)}`,
        html: `
          <h2>New website enquiry</h2>
          <p><strong>Name:</strong> ${clean(name.trim())}</p>
          <p><strong>Email:</strong> ${clean(email.trim())}</p>
          <p><strong>Phone:</strong> ${
            typeof phone === "string" ? clean(phone.trim()) : "Not provided"
          }</p>
          <p><strong>Message:</strong></p>
          <p>${clean(message.trim()).replace(/\n/g, "<br>")}</p>
        `,
      }),
    })

    if (!response.ok) {
      console.error("Resend delivery request failed:", response.status)
      return NextResponse.json(
        { error: "Unable to submit your enquiry right now." },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Unable to process your enquiry." },
      { status: 500 }
    )
  }
}

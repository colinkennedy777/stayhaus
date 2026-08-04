import { NextRequest, NextResponse } from "next/server";

// Stub endpoint: validates and accepts the message. Wire this up to a
// shared inbox or ticketing system once one is chosen.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body.name !== "string" || typeof body.email !== "string" || typeof body.message !== "string") {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  if (!body.name.trim() || !body.email.includes("@") || !body.message.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  console.log("New StayHaus contact message:", { name: body.name, email: body.email, stay: body.stay ?? null });

  return NextResponse.json({ ok: true });
}

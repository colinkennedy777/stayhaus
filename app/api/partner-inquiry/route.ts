import { NextRequest, NextResponse } from "next/server";

// Stub endpoint: validates the inquiry and returns success. Wire this up to
// a CRM, inbox, or notification service once one is chosen — the form
// client already posts the full payload here.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body.name !== "string" || typeof body.email !== "string") {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  if (!body.name.trim() || !body.email.includes("@")) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  console.log("New StayHaus partner inquiry:", {
    name: body.name,
    email: body.email,
    city: body.city,
    propertyType: body.propertyType,
  });

  return NextResponse.json({ ok: true });
}

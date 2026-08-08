import { NextRequest, NextResponse } from "next/server";

// This route runs on the server only, so CRM_API_ENDPOINT / CRM_API_KEY
// (note: no NEXT_PUBLIC_ prefix) never reach the browser bundle.
const CRM_API_ENDPOINT = process.env.CRM_API_ENDPOINT ?? "";
const CRM_API_KEY = process.env.CRM_API_KEY ?? "";

type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  message: string;
  projectName?: string;
  sourceUrl?: string;
};

export async function POST(req: NextRequest) {
  if (!CRM_API_ENDPOINT || !CRM_API_KEY) {
    console.warn("CRM_API_ENDPOINT / CRM_API_KEY are not set, skipping CRM submission.");
    return NextResponse.json({ ok: false, skipped: true }, { status: 200 });
  }

  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, phone, email, message, projectName, sourceUrl } = body;

  if (!name || !phone || !email) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  // Map our form fields onto Trevion CRM's expected "Leads API" payload shape.
  const crmPayload = {
    name,
    phoneNo: phone,
    email,
    description: projectName ? `Interested in ${projectName}. ${message ?? ""}`.trim() : message,
    sourceUrl: sourceUrl || undefined,
  };

  try {
    const crmRes = await fetch(CRM_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apiKey: CRM_API_KEY,
      },
      body: JSON.stringify(crmPayload),
    });

    const text = await crmRes.text();
    let data: unknown = text;
    try {
      data = JSON.parse(text);
    } catch {
      // response wasn't JSON; keep as raw text
    }

    if (!crmRes.ok) {
      console.error("CRM lead submission failed:", crmRes.status, data);
      return NextResponse.json({ ok: false, error: "CRM rejected the lead", status: crmRes.status, data }, { status: 502 });
    }

    return NextResponse.json({ ok: true, data });
  } catch (err) {
    console.error("CRM lead submission error:", err);
    return NextResponse.json({ ok: false, error: "Failed to reach CRM" }, { status: 502 });
  }
}

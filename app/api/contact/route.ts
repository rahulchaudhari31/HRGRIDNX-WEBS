import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid work email."),
  company: z.string().trim().min(2, "Please enter your company."),
  teamSize: z.enum(["1-25", "26-100", "101-250", "251-500", "500+"] as const),
  interests: z.array(z.string()).min(1, "Choose at least one area you want to explore."),
  message: z.string().trim().min(10, "Tell us a little more about what you need.").max(2000, "Please keep your message under 2,000 characters."),
});

export async function POST(request: Request) {
  try {
    const parsed = contactSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "Please check the highlighted fields.", fields: parsed.error.flatten().fieldErrors }, { status: 400 });
    console.info("[HRGRIDNX contact submission]", { ...parsed.data, submittedAt: new Date().toISOString() });
    // TODO: Connect this validated submission to email delivery or a CRM.
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We could not receive that just now. Please try again." }, { status: 500 });
  }
}

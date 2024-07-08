import { createClient } from "@/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createClient();
  const user = await supabase.auth.getUser();

  if (!user) return NextResponse.json("", { status: 401 });

  return NextResponse.json(user);
}

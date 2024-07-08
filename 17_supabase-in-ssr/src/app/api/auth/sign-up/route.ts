import { createClient } from "@/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const email = data.email as string;
  const password = data.password as string;

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.signUp({ email, password });

  return NextResponse.json(user);
}

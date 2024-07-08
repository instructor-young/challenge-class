import { AuthProvider } from "@/contexts/auth.context/auth.context";
import { createClient } from "@/supabase/server";
import React from "react";

async function ProvidersLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isInitialized = true;
  const me = user || null;

  return (
    <AuthProvider initialIsInitialized={isInitialized} initialMe={me}>
      {children}
    </AuthProvider>
  );
}

export default ProvidersLayout;

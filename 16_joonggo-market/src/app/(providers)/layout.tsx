import { AuthProvider } from "@/contexts/auth.context";
import React from "react";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ProvidersLayout;

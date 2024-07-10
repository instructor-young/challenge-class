import CustomQueryClientProvider from "@/tanstack-query";
import React from "react";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return <CustomQueryClientProvider>{children}</CustomQueryClientProvider>;
}

export default ProvidersLayout;

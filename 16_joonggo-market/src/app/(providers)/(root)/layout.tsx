import { PropsWithChildren } from "react";
import Header from "./_components/Header";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div id="root">
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;

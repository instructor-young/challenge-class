import { PropsWithChildren } from "react";

interface PageProps {
  title: string;
  isTitleHidden?: boolean;
}

function Page({ title, isTitleHidden = false, children }: PropsWithChildren<PageProps>) {
  return (
    <main className="container mx-auto max-w-[1024px] px-5 py-20">
      <h1 className={"text-3xl font-bold mb-12" + (isTitleHidden ? " hidden" : "")}>{title}</h1>
      {children}
    </main>
  );
}

export default Page;

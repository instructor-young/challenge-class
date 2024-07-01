import { cva } from "class-variance-authority";
import { PropsWithChildren } from "react";

interface PageProps {
  title: string;
  isTitleHidden?: boolean;
  width?: "sm" | "md" | "full";
}

const pageVariant = cva("container mx-auto  px-5 py-20", {
  variants: {
    width: {
      sm: "max-w-[620px]",
      md: "max-w-[1024px]",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    width: "md",
  },
});

function Page({ title, isTitleHidden = false, width, children }: PropsWithChildren<PageProps>) {
  return (
    <main className={pageVariant({ width })}>
      <h1 className={"text-3xl font-bold mb-12" + (isTitleHidden ? " hidden" : "")}>{title}</h1>
      {children}
    </main>
  );
}

export default Page;

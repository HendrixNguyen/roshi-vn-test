import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement>;

const Section: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <section className={cn("container py-5 lg:py-[60px]", className)} {...props}>
      {children}
    </section>
  );
};

export default Section;

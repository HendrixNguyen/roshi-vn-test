import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import React from "react";

type Options = {
  key?: string;
  label?: React.ReactNode;
  value: string;
  children?: React.ReactNode;
};

type Props = {
  options?: Options[];
  className?: string;
  showPrefixMark?: boolean;
};

const CustomCollapse: React.FC<Props> = ({ options, className, showPrefixMark }) => {
  return (
    <Accordion collapsible className={className} defaultValue={options?.[0]?.value ?? ""} type="single">
      {options?.map((item) => (
        <AccordionItem
          key={(item.key ?? item.value) || crypto.randomUUID()}
          className="rounded border-transparent shadow-3 [&:not(:last-child)]:mb-4"
          value={(item.value ?? item.key) || crypto.randomUUID()}
        >
          <AccordionTrigger className="relative overflow-hidden rounded-md p-2 shadow-3 hover:no-underline">
            {item.label}

            {showPrefixMark && <span className="absolute left-0 top-0 h-full w-[3px] bg-secondary" />}
          </AccordionTrigger>

          <AccordionContent className="p-3">{item.children}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomCollapse;

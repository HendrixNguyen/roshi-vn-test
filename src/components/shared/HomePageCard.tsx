import { cn } from "@/lib/utils";
import React from "react";
import { Text, Title } from "../ui/typography";

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  title?: string;
  content?: string;
  icon?: React.ReactNode;
};

const HomePageCard: React.FC<Props> = ({ title, content, icon, className, style, ...props }) => {
  return (
    <div
      style={style}
      className={cn(
        "relative w-full rounded-2xl bg-gradient-purple-vertical shadow-3 lg:h-[278px] lg:w-[400px]",
        className,
      )}
      {...props}
    >
      <div className="flex h-full flex-col gap-1 p-4 pt-10">
        <Title className="flex-none text-secondary" level={4}>
          {title}
        </Title>

        <Text body={3} className="flex-1 lg:line-clamp-[8]">
          {content}
        </Text>
      </div>

      <div className="absolute left-0 top-0 -translate-y-1/2 overflow-hidden rounded-full bg-secondary-purple-lighter">
        <span className="flex min-h-[72px] min-w-[72px] items-center justify-center">{icon}</span>
      </div>
    </div>
  );
};

export default HomePageCard;

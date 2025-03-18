import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import React from "react";

type Options = {
  key?: string;
  label?: string;
  value: string;
  children?: React.ReactNode;
};

type Props = {
  options?: Options[];
  defaultValue?: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

const CustomTabs: React.FC<Props> = ({ options, defaultValue, orientation = "vertical", className }) => {
  return (
    <Tabs defaultValue={defaultValue ?? options?.[0]?.value} orientation={orientation}>
      <div
        className={cn(
          "flex",
          {
            "gap-10": orientation === "vertical",
            "flex-col": orientation === "horizontal",
          },
          className,
        )}
      >
        <div className="flex items-center">
          <TabsList
            className={cn("h-fit bg-transparent p-0", {
              "min-w-64 flex-col gap-4": orientation === "vertical",
              "w-full gap-2.5": orientation === "horizontal",
            })}
          >
            {options?.map((option) => (
              <TabsTrigger
                key={option.key ?? option.value}
                value={option.value}
                className={cn(
                  "bg-neutral-grey-lighter px-2 py-[20.5px] text-base font-normal data-[state=active]:font-bold",
                  {
                    "group relative w-full rounded-lg data-[state=active]:bg-secondary data-[state=active]:text-white":
                      orientation === "vertical",
                    "flex-1 rounded-none rounded-t shadow-tab-top data-[state=active]:text-secondary data-[state=active]:shadow-tab-top":
                      orientation === "horizontal",
                  },
                )}
              >
                <span>{option.label ?? option.value}</span>
                <span
                  className="invisible absolute right-0 top-1/2 -z-10 h-[26px] w-[15px] -translate-y-1/2 translate-x-[calc(100%-5px)] bg-secondary group-data-[state=active]:visible"
                  style={{
                    clipPath:
                      "path('M13.2992 11.036C14.2754 12.1634 14.2754 13.8366 13.2992 14.964L5.26778 24.2378C3.44938 26.3375 0 25.0515 0 22.2738L0 3.72617C0 0.948517 3.44938 -0.337504 5.26778 1.76221L13.2992 11.036Z')",
                  }}
                />
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="flex-1">
          {options?.map((option) => (
            <TabsContent
              key={option.key ?? option.value}
              value={option.value}
              className={cn({
                "mt-0 rounded-3xl border border-secondary-purple-light bg-secondary-purple-lighter p-10":
                  orientation === "vertical",
                "rounded-b-xl p-5 shadow-2.2": orientation === "horizontal",
              })}
            >
              {option.children}
            </TabsContent>
          ))}
        </div>
      </div>
    </Tabs>
  );
};

export default CustomTabs;

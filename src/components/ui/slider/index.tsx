"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";

type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  classNames?: {
    root?: string;
    track?: string;
    range?: string;
    thumb?: string;
  };
  thumbSize?: number;
  trackHeight?: number;
};

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  ({ className, classNames: cls, style, thumbSize, trackHeight, ...props }, ref) => (
    <SliderPrimitive.Root
      ref={ref}
      className={cn("relative flex w-full touch-none select-none items-center", className, cls?.root)}
      style={{
        paddingBlock: ((thumbSize ?? 24) - (trackHeight ?? 6)) / 2,
        ...style,
      }}
      {...props}
    >
      <SliderPrimitive.Track
        className={cn("relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary-200", cls?.track)}
        style={{ height: trackHeight }}
      >
        <SliderPrimitive.Range className={cn("absolute h-full bg-gradient-secondary", cls?.range)} />
      </SliderPrimitive.Track>

      <SliderPrimitive.Thumb
        style={{ width: thumbSize, height: thumbSize }}
        className={cn(
          "block h-6 w-6 rounded-full border border-transparent bg-gradient-secondary shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-transparent disabled:pointer-events-none disabled:opacity-50",
          cls?.thumb,
        )}
      />
    </SliderPrimitive.Root>
  ),
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider, type SliderProps };

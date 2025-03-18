"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Slider, SliderProps } from "../ui/slider";
import { Text } from "../ui/typography";

type Props = Omit<SliderProps, "classNames"> & {
  label?: string;
  valueDecorator?: (value: number) => string;
  classNames?: SliderProps["classNames"] & {
    wrapper?: string;
    label?: string;
    value?: string;
  };
};

const SliderWithValue: React.FC<Props> = ({ label, valueDecorator, className, ...props }) => {
  const { min, max, onValueChange, classNames } = props;
  const [value, setValue] = useState(() => props.defaultValue ?? [min]);

  const valueChangeHandler: SliderProps["onValueChange"] = (value) => {
    setValue(value);
    onValueChange?.(value);
  };

  return (
    <div className={cn(className, classNames?.wrapper)}>
      <div className="mb-2 flex items-center justify-between">
        <Text body={3} className={cn("font-bold", classNames?.label)}>
          {label}
        </Text>

        <Text
          className={cn(
            "rounded bg-white px-4 py-1.5 font-semibold text-secondary shadow-purple-around",
            classNames?.value,
          )}
        >
          {valueDecorator && value?.[0] ? valueDecorator(value?.[0]) : value}
        </Text>
      </div>

      <Slider onValueChange={valueChangeHandler} {...props} />

      <div className="mt-1.5 flex items-center justify-between">
        <Text className="text-neutral-body-3">{valueDecorator && min ? valueDecorator(min) : min}</Text>
        <Text className="text-neutral-body-3">{valueDecorator && max ? valueDecorator(max) : max}</Text>
      </div>
    </div>
  );
};

export default SliderWithValue;

import React from "react";
import { Slider } from "../ui/slider";

const TestSlider: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1>Slider</h1>

      <Slider />
    </div>
  );
};

export default TestSlider;

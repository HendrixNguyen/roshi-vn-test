"use client";

import classNames from "classnames/bind";
import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import TestButton from "./TestButton";
import TestSlider from "./TestSlider";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

const TestComponent: React.FC = () => {
  return (
    <div className={cx("wrapper")}>
      <div className="m-auto flex flex-col gap-3">
        <TestButton />
        <TestSlider />

        <Input placeholder="Search" prefix={<Search size={16} />} />
      </div>
    </div>
  );
};

export default TestComponent;

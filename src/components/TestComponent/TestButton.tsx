import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const TestButton: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1>Button</h1>

      <div className="flex gap-3">
        <Button className="font-bold" size="lg">
          Primary
        </Button>
        <Button className="font-bold" size="lg" variant="outline">
          Outline
        </Button>
        <Button className="font-bold" size="lg" variant="ghost">
          Ghost
        </Button>
        <Button className="font-bold" size="lg" variant="link">
          Link
        </Button>
        <Button disabled className="font-bold" size="lg">
          Disabled
        </Button>
      </div>

      <div className="flex gap-3">
        <Button className="font-bold" size="lg" variant="solid">
          Primary
        </Button>
        <Button className="font-bold" color="secondary" size="lg" variant="solid">
          Secondary
        </Button>
        <Button className="font-bold" color="warning" size="lg" variant="solid">
          Warning
        </Button>
        <Button className="font-bold" color="destructive" size="lg" variant="solid">
          Destructive
        </Button>

        <Button disabled className="font-bold" size="lg">
          Disabled
        </Button>
      </div>

      <div className="flex gap-3">
        <Button className="font-bold" size="lg" variant="outline">
          Default
        </Button>
        <Button className="font-bold" color="primary" size="lg" variant="outline">
          Primary
        </Button>
        <Button className="font-bold" color="secondary" size="lg" variant="outline">
          Secondary
        </Button>
        <Button className="font-bold" color="warning" size="lg" variant="outline">
          Warning
        </Button>
        <Button className="font-bold" color="destructive" size="lg" variant="outline">
          Destructive
        </Button>

        <Button disabled className="font-bold" size="lg" variant="outline">
          Disabled
        </Button>
      </div>

      <div className="flex gap-3">
        <Button className="font-bold" size="lg" variant="ghost">
          Default
        </Button>
        <Button className="font-bold" color="primary" size="lg" variant="ghost">
          Primary
        </Button>
        <Button className="font-bold" color="secondary" size="lg" variant="ghost">
          Secondary
        </Button>
        <Button className="font-bold" color="warning" size="lg" variant="ghost">
          Warning
        </Button>
        <Button className="font-bold" color="destructive" size="lg" variant="ghost">
          Destructive
        </Button>
        <Button disabled className="font-bold" size="lg" variant="ghost">
          Disabled
        </Button>
      </div>

      <div className="flex gap-3">
        <Button className="font-bold" size="lg" variant="link">
          Default
        </Button>
        <Button className="font-bold" color="primary" size="lg" variant="link">
          Primary
        </Button>
        <Button className="font-bold" color="secondary" size="lg" variant="link">
          Secondary
        </Button>
        <Button className="font-bold" color="warning" size="lg" variant="link">
          Warning
        </Button>
        <Button className="font-bold" color="destructive" size="lg" variant="link">
          Destructive
        </Button>
        <Button disabled className="font-bold" size="lg" variant="link">
          Disabled
        </Button>
      </div>

      <div className="flex gap-3">
        <Button className="font-bold" size="icon">
          <ArrowRightIcon />
        </Button>

        <Button className="font-bold" icon={<ArrowRightIcon size={20} />} size="lg">
          Default
        </Button>

        <Button className="font-bold" icon={<ArrowRightIcon size={20} />} iconPosition="right" size="lg">
          Default
        </Button>

        <Button
          className="font-bold"
          color="secondary"
          icon={<ArrowRightIcon size={20} />}
          iconPosition="right"
          size="lg"
          variant="outline"
        >
          Default
        </Button>
      </div>

      <div className="flex gap-3">
        <Button loading className="font-bold" icon={<ArrowRightIcon size={20} />} iconPosition="right" size="lg">
          Default
        </Button>

        <Button
          loading
          className="font-bold"
          color="secondary"
          icon={<ArrowRightIcon size={20} />}
          iconPosition="right"
          size="lg"
          variant="outline"
        >
          Default
        </Button>

        <Button loading className="font-bold" size="lg" variant="outline">
          <ArrowRightIcon />
        </Button>

        <Button asChild className="font-bold" icon={<ArrowRightIcon />} size="lg">
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default TestButton;

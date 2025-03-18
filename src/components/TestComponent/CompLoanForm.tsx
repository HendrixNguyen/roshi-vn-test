"use client";

import { useMemo, useState } from "react";
import Section from "../shared/Section";
import SliderWithValue from "../shared/SliderWithValue";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Text, Title } from "../ui/typography";

export const CompLoanForm: React.FC = () => {
  const [amount, setAmount] = useState<number>(5000000);
  const [monthlyInterestRate, setMonthlyInterestRate] = useState<number>(0);
  const [loanTenureMonths, setloanTenureMonths] = useState<number>(3);

  function calculateEMI(loanAmount: number, monthlyInterestRate: number, loanTenureMonths: number): number {
    if (monthlyInterestRate === 0) {
      return loanAmount / loanTenureMonths;
    }
    return (
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenureMonths)) /
      (Math.pow(1 + monthlyInterestRate, loanTenureMonths) - 1)
    );
  }

  const { emi, total, totalInterest } = useMemo(() => {
    const emi = calculateEMI(amount, monthlyInterestRate, loanTenureMonths);
    const total = emi * loanTenureMonths;
    const totalInterest = emi * loanTenureMonths - amount;
    return { emi, total, totalInterest };
  }, [amount, monthlyInterestRate, loanTenureMonths]);

  // useEffect(() => {
  //   const _emi = calculateEMI(amount, monthlyInterestRate, loanTenureMonths);
  //   setEmi(_emi);
  // }, [amount, monthlyInterestRate, loanTenureMonths]);

  return (
    <Card
      style={{
        backgroundColor: "#ffff",
        display: "flex",
        flexDirection: "column",
        width: "608px",
        height: "fit-content",
        justifyContent: "center",
        marginLeft: "30px",
        padding: "5px",
        gap: 10,
      }}
    >
      <SliderWithValue
        min={5000000}
        max={200000000}
        label="Số tiền cần vay"
        defaultValue={[amount]}
        valueDecorator={(value) => value.toLocaleString("vi")}
        onValueChange={([value]) => {
          setAmount(value);
        }}
      />
      <SliderWithValue
        defaultValue={[loanTenureMonths]}
        onValueChange={([value]) => setloanTenureMonths(value)}
        min={3}
        max={72}
        label={"Kỳ hạn vay"}
        valueDecorator={(value) => `${value} tháng`}
      />
      <Title className="text-base font-bold">{"Lãi hàng tháng"}</Title>
      <Input
        suffix={"%"}
        placeholder="Ví dụ: 2.85"
        onChange={(e) => setMonthlyInterestRate(Number(e.target.value))}
      ></Input>
      <div style={{ border: "1px solid #f4f4f4", width: "90%", marginTop: "20px" }}></div>
      <Section
        style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: "fit-context" }}
        className="lg:py-[0px]"
      >
        <Section className={"flex flex-col lg:py-[0px]"}>
          <Text>{"Tổng tiền thanh toán"}</Text>
          <Text strong>
            {Number(total).toLocaleString("vi")}
            <Text underline>{"đ"}</Text>
          </Text>
        </Section>
        <Section className={"flex flex-col lg:py-[0px]"}>
          <Text>{"Tổng tiền lãi"}</Text>
          <Text strong>
            {Number(totalInterest).toLocaleString("vi")}
            <Text underline>{"đ"}</Text>
          </Text>
        </Section>
      </Section>
      <Section className={"flex flex-col lg:py-[0px]"}>
        <Text>{"Tổng Thanh toán hàng tháng "}</Text>
        <Text strong color="purple">
          {Number(emi).toLocaleString("vi")}
          <Text underline>{"đ"}</Text>
        </Text>
      </Section>
      <Button style={{ marginTop: 20 }} onClick={() => {}}>
        <Text style={{ color: "white" }}>{"Đăng ký ngay ->"}</Text>
      </Button>
    </Card>
  );
};

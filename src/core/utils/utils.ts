export function convertParamsToString(searchParams: Record<string, string | number | boolean | undefined>) {
  return Object.entries(searchParams)
    .filter(([key, value]) => key && value !== undefined)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value as string)}`)
    .join("&");
}

export function formatCurrency(amount: number, style?: "currency" | "decimal" | "percent" | "unit") {
  return new Intl.NumberFormat("vi-VN", {
    style: style ?? "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(amount);
}

// loanCalculatorUtils.ts
export const calculateLoanDetails = (amount: number, term: number, interestRate: number) => {
  if (term === 0) {
    return {
      totalPayment: 0,
      monthlyInstallment: 0,
      totalInterest: 0,
      interestRatio: 0,
    };
  }

  const monthlyRate = interestRate / 100;
  const denominator = 1 - Math.pow(1 + monthlyRate, -term);

  // Avoid division by zero
  const monthlyInstallment = denominator !== 0 ? (amount * monthlyRate) / denominator : 0;
  const totalPayment = monthlyInstallment * term;
  const totalInterest = totalPayment - amount;
  const interestRatio = 100 - (totalInterest / totalPayment) * 100;
  return {
    totalPayment,
    monthlyInstallment,
    totalInterest,
    interestRatio,
  };
};
export const getCurrentDate = () => {
  const currentDate = new Date();
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(currentDate);
};

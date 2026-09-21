export type BillingCycle = "monthly" | "yearly";
export type Plan = {
  id: "starter" | "growth" | "enterprise";
  name: string;
  description: string;
  monthly: number | null;
  yearly: number | null;
  note: string;
  features: string[];
  highlighted?: boolean;
};

export const plans: Plan[] = [
  { id: "starter", name: "Starter", description: "The essentials for getting people operations under control.", monthly: 6, yearly: 4.8, note: "per person / month", features: ["Employee records", "Leave requests and approvals", "Attendance basics", "Employee self-service", "Standard support"] },
  { id: "growth", name: "Growth", description: "The connected toolkit for teams ready to move faster.", monthly: 12, yearly: 9.6, note: "per person / month", highlighted: true, features: ["Everything in Starter", "Payroll and payslips", "Recruitment and onboarding", "Performance and goals", "Reports and exports", "Priority support"] },
  { id: "enterprise", name: "Enterprise", description: "A tailored people operation for complex organisations.", monthly: null, yearly: null, note: "built around you", features: ["Everything in Growth", "Advanced permissions", "Custom workflows", "Dedicated success partner", "Priority implementation", "Custom integrations"] },
];

export const comparisonGroups = [
  { name: "People foundation", features: [{ name: "Employee records", starter: true, growth: true, enterprise: true }, { name: "Employee self-service", starter: true, growth: true, enterprise: true }, { name: "Custom roles and permissions", starter: false, growth: true, enterprise: true }] },
  { name: "Time and pay", features: [{ name: "Leave management", starter: true, growth: true, enterprise: true }, { name: "Attendance and shifts", starter: "Basic", growth: true, enterprise: true }, { name: "Payroll and payslips", starter: false, growth: true, enterprise: true }] },
  { name: "Growth and insight", features: [{ name: "Recruitment and onboarding", starter: false, growth: true, enterprise: true }, { name: "Performance and goals", starter: false, growth: true, enterprise: true }, { name: "Reports and analytics", starter: "Standard", growth: "Advanced", enterprise: "Custom" }] },
  { name: "Support and scale", features: [{ name: "Standard support", starter: true, growth: true, enterprise: true }, { name: "Custom workflows", starter: false, growth: false, enterprise: true }, { name: "Dedicated success partner", starter: false, growth: false, enterprise: true }] },
];

export const addOns = [
  ["Payroll support", "A helping hand for clean, confident payroll runs."],
  ["Managed onboarding", "A guided launch that gets your team comfortable quickly."],
  ["Custom integrations", "Connect the tools your organisation already relies on."],
];

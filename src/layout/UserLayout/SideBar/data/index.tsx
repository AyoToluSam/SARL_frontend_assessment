import { ArrowUpDown, LayoutDashboard, Star, User, Users } from "lucide-react";
import type { ReactNode } from "react";

interface SubLinks {
  label: string;
  href: string;
  permissions: string[];
}
export interface navSectionProps {
  label: string;
  href?: string;
  icon: ReactNode;
  permissions?: string[];
  subLinks?: SubLinks[];
}

export const navSections: navSectionProps[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard size={24} />,
    permissions: ["*"],
  },
  {
    label: "Unit Setup",
    href: "/units",
    icon: <Star size={24} />,
    permissions: ["unit-setup:all"],
  },
  {
    label: "Customer Management",
    icon: <User size={24} />,
    subLinks: [
      {
        label: "Customer Group",
        href: "/customer-group",
        permissions: ["manage-customer:all"],
      },
      {
        label: "Customer Setup",
        href: "/customer-setup",
        permissions: ["manage-customer:all"],
      },
    ],
  },
  {
    label: "User Management",
    href: "/users",
    icon: <Users size={24} />,
    permissions: ["user-management:all"],
  },
  {
    label: "Workflow",
    icon: <ArrowUpDown size={24} />,
    permissions: [],
    subLinks: [
      {
        label: "Workflow Setup",
        href: "/workflow-setup",
        permissions: ["workflow-setup:all"],
      },
      {
        label: "Workflow Approval",
        href: "/workflow-approval",
        permissions: ["workflow-approval:all"],
      },
      {
        label: "Workflow History",
        href: "/workflow-history",
        permissions: ["workflow-history:all"],
      },
    ],
  },
];

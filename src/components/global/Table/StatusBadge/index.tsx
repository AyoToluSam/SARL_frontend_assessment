import React from "react";
import type { ReactNode } from "react";
import styles from "./_styles.module.scss";
import type { Status } from "../../../../types/types";
import { Check, CircleDashed, CircleMinus, Info, X } from "lucide-react";

type StatusBadgeProps = {
  status: Status;
  children?: ReactNode;
  variant?: "default" | "alt";
};

const iconSize = 16;

const icons: Record<Status, ReactNode> = {
  success: <Check size={iconSize} />,
  failed: <X size={iconSize} />,
  completed: <Check size={iconSize} />,
  pending: <CircleDashed size={iconSize} />,
  active: <Check size={iconSize} />,
  inactive: <X size={iconSize} />,
  approved: <Check size={iconSize} />,
  rejected: <X size={iconSize} />,
  enabled: <Check size={iconSize} />,
  disabled: <X size={iconSize} />,
  info: <Info size={iconSize} />,
  cancelled: <X size={iconSize} />,
  paid: <Check size={iconSize} />,
  overdue: <X size={iconSize} />,
  resolved: <Check size={iconSize} />,
  in_progress: <CircleDashed size={iconSize} />,
  none: <CircleMinus size={iconSize} />,
};

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  children,
  variant = "default",
}) => {
  return variant === "default" ? (
    <div className={`${styles.statusBadge} ${styles[status]}`}>
      {children || status}
    </div>
  ) : (
    <div className={`${styles.altBadge} ${styles[status]}`}>
      {children || status}
      <span>{icons[status]}</span>
    </div>
  );
};

export default StatusBadge;

import { CSSProperties, ReactElement } from "react";

export default function ChevronIcon({
  rotate = false,
  isActive = false,
  styles,
}: {
  rotate?: boolean;
  isActive?: boolean;
  styles?: CSSProperties;
}): ReactElement {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ rotate: rotate ? "180deg" : "0deg", ...styles }}
    >
      <path
        d="M1 1.5L5.29289 5.79289C5.68342 6.18342 6.31658 6.18342 6.70711 5.79289L11 1.5"
        stroke={isActive ? "#0F0FBD" : "#4F607D"}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

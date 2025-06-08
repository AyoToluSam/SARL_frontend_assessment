import { ReactElement } from "react";

export default function PlansIcon({
  active = false,
}: {
  active?: boolean;
}): ReactElement {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 5L16 5"
        stroke={active ? "#FF641A" : "#6D7786"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 12L20 12"
        stroke={active ? "#FF641A" : "#6D7786"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 19L12 19"
        stroke={active ? "#FF641A" : "#6D7786"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import { ReactElement } from "react";

export default function InstanceIcon({
  active = false,
}: {
  active?: boolean;
}): ReactElement {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 1.5H17V17.4656C17 18.2959 16.0466 18.7645 15.3892 18.2574L14.0584 17.2307C13.7236 16.9725 13.2625 16.9527 12.9068 17.1813L11.0815 18.3547C10.4227 18.7783 9.5773 18.7783 8.91848 18.3547L7.0932 17.1813C6.73751 16.9527 6.27644 16.9725 5.94164 17.2307L4.6108 18.2574C3.95338 18.7645 3 18.2959 3 17.4656V1.5Z"
        stroke={active ? "#0F0FBD" : "#4F607D"}
        strokeWidth="1.5"
      />
      <path
        d="M7 7.5H10"
        stroke={active ? "#0F0FBD" : "#4F607D"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 1.5H19"
        stroke={active ? "#0F0FBD" : "#4F607D"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11.5H10"
        stroke={active ? "#0F0FBD" : "#4F607D"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 7.5H13.5"
        stroke={active ? "#0F0FBD" : "#4F607D"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 11.5H13.5"
        stroke={active ? "#0F0FBD" : "#4F607D"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

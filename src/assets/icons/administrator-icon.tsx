import { ReactElement } from "react";

export default function AdministratorIcon({
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
        d="M16.0195 10.9133C17.8405 10.9133 19.3165 9.43734 19.3165 7.61634C19.3165 5.79634 17.8405 4.31934 16.0195 4.31934"
        stroke={active ? "#FF641A" : "#4F607D"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5361 14.4966C18.0801 14.5336 18.6201 14.6116 19.1531 14.7296C19.8921 14.8766 20.7821 15.1796 21.0981 15.8426C21.3001 16.2676 21.3001 16.7626 21.0981 17.1876C20.7831 17.8506 19.8921 18.1536 19.1531 18.3056"
        stroke={active ? "#FF641A" : "#6D7786"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.591 15.2065C13.281 15.2065 16.433 15.7655 16.433 17.9985C16.433 20.2325 13.301 20.8105 9.591 20.8105C5.901 20.8105 2.75 20.2525 2.75 18.0185C2.75 15.7845 5.881 15.2065 9.591 15.2065Z"
        stroke={active ? "#FF641A" : "#4F607D"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.59103 12.019C7.15703 12.019 5.20703 10.068 5.20703 7.634C5.20703 5.201 7.15703 3.25 9.59103 3.25C12.025 3.25 13.976 5.201 13.976 7.634C13.976 10.068 12.025 12.019 9.59103 12.019Z"
        stroke={active ? "#FF641A" : "#4F607D"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

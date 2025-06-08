import { ReactElement } from "react";

export default function ProfileIcon({
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
        d="M9.591 12.019C7.157 12.019 5.207 10.068 5.207 7.634C5.207 5.201 7.157 3.25 9.591 3.25C12.025 3.25 13.976 5.201 13.976 7.634C13.976 10.068 12.025 12.019 9.591 12.019Z"
        stroke={active ? "#FF641A" : "#4F607D"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

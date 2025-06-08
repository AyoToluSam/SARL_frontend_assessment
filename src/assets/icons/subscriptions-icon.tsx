import { ReactElement } from "react";

export default function SubscriptionsIcon({
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
      <rect
        x="1.66666"
        y="1.66675"
        width="8.33333"
        height="16.6667"
        rx="3"
        stroke={active ? "#0F0FBD" : "#4F607D"}
        strokeWidth="1.5"
      />
      <path
        d="M10.1184 4.16675L10.4971 3.78807C11.6687 2.61649 13.5682 2.6165 14.7397 3.78807L16.3897 5.43798C17.5612 6.60956 17.5612 8.50905 16.3897 9.68062L10.1184 15.9519"
        stroke={active ? "#0F0FBD" : "#4F607D"}
        strokeWidth="1.5"
      />
      <path
        d="M15.8333 10V10C17.214 10 18.3333 11.1193 18.3333 12.5L18.3333 15.3333C18.3333 16.9902 16.9902 18.3333 15.3333 18.3333L5.83332 18.3333"
        stroke={active ? "#0F0FBD" : "#4F607D"}
        strokeWidth="1.5"
      />
      <circle cx="5.83333" cy="15.0001" r="0.833333" fill="#4F607D" />
    </svg>
  );
}

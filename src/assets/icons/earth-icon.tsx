import React from "react";

const EarthIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
        stroke="#FF641A"
        strokeWidth="1.5"
      />
      <path
        d="M19 4.69899C18.0653 4.76636 16.8681 5.12824 16.0379 6.20277C14.5385 8.14361 13.039 8.30556 12.0394 7.65861C10.5399 6.6882 11.8 5.11636 10.0401 4.26215C8.89313 3.70542 8.73321 2.19045 9.37158 1"
        stroke="#FF641A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M1 10C1.7625 10.6621 2.83046 11.2682 4.08874 11.2682C6.68843 11.2682 7.20837 11.7649 7.20837 13.7518C7.20837 15.7387 7.20837 15.7387 7.72831 17.2288C8.06651 18.1981 8.18472 19.1674 7.5106 20"
        stroke="#FF641A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M21 12.4523C20.1129 11.9411 19 11.7308 17.8734 12.5405C15.7177 14.0898 14.2314 12.806 13.5619 14.0889C12.5765 15.9775 16.0957 16.5711 13 21"
        stroke="#FF641A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EarthIcon;

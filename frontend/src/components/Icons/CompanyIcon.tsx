import { type SVGAttributes } from 'react';

export const CompanyIcon = (props: SVGAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 20H4M16 20H20M16 20V7M4 20V4H16V7M4 20H3M20 20V7H16M20 20H21M8 8H12M8 12H12M8 16H12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

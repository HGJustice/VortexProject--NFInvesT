import { SVGAttributes } from 'react';

export const SaveIcon = (props: SVGAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 20H4V4H15L20 9V20H15M9 20H15M9 20V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

import * as React from 'react';
interface IconProps extends React.SVGProps<SVGSVGElement> {}

const RightArrowIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M6.99815 21.015C7.48815 21.505 8.27815 21.505 8.76815 21.015L17.0782 12.705C17.4682 12.315 17.4682 11.685 17.0782 11.295L8.76815 2.98499C8.27815 2.49499 7.48815 2.49499 6.99815 2.98499C6.50815 3.47499 6.50815 4.26499 6.99815 4.75499L14.2382 12.005L6.98815 19.255C6.50815 19.735 6.50815 20.535 6.99815 21.015Z"
      fill="white"
    />
  </svg>
);
export default RightArrowIcon;

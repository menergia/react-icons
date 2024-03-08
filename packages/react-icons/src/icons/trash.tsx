import * as React from 'react';

export const Trash = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Trash(props, ref) {
  return (
    <svg
      ref={ref}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2_1103)">
        <path
          d="M6 19C6.00158 19.5299 6.2128 20.0377 6.58753 20.4125C6.96227 20.7872 7.47005 20.9984 8 21H16C16.5299 20.9984 17.0377 20.7872 17.4125 20.4125C17.7872 20.0377 17.9984 19.5299 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_1103">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

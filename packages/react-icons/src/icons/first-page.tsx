import * as React from 'react';

export const FirstPage = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function FirstPage(props, ref) {
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
      <path
        d="M17.175 17.925L11.325 12.075L17.175 6.225L18.25 7.3L13.475 12.075L18.25 16.85L17.175 17.925ZM6 18V6H7.5V18H6Z"
        fill="currentColor"
      />
    </svg>
  );
});

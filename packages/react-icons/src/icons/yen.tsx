import * as React from 'react';

export const Yen = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Yen(props, ref) {
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
        d="M14.273 11H18.353V13H13.353V15H18.353V17H13.353V21H11.353V17H6.35303V15H11.353V13H6.35303V11H10.433L5.35303 3H7.72303L12.353 10.29L16.983 3H19.353L14.273 11Z"
        fill="currentColor"
      />
    </svg>
  );
});

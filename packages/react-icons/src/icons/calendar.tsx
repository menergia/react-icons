import * as React from 'react';

export const Calendar = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Calendar(props, ref) {
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
      <circle cx="19.2061" cy="18.5" r="3.5" fill="white" />
      <path
        d="M18.7061 4H17.7061V2H15.7061V4H7.70605V2H5.70605V4H4.70605C3.59605 4 2.71605 4.9 2.71605 6L2.70605 20C2.70605 21.1 3.59605 22 4.70605 22H18.7061C19.8061 22 20.7061 21.1 20.7061 20V6C20.7061 4.9 19.8061 4 18.7061 4ZM18.7061 20H4.70605V10H18.7061V20ZM18.7061 8H4.70605V6H18.7061V8ZM11.7061 13H16.7061V18H11.7061V13Z"
        fill="currentColor"
      />
    </svg>
  );
});

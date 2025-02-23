import * as React from 'react';

export const Flag = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Flag(props, ref) {
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
        d="M5 21V4H13.575L14.05 6.15H20V15.4H13.6L13.125 13.275H6.5V21H5ZM14.875 13.9H18.5V7.65H12.775L12.3 5.5H6.5V11.775H14.4L14.875 13.9Z"
        fill="currentColor"
      />
    </svg>
  );
});

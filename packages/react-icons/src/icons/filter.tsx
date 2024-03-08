import * as React from 'react';

export const Filter = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Filter(props, ref) {
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
        d="M10 18V16.5H14V18H10ZM6 12.75V11.25H18V12.75H6ZM3 7.5V6H21V7.5H3Z"
        fill="currentColor"
      />
    </svg>
  );
});

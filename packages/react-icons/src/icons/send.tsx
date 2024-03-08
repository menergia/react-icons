import * as React from 'react';

export const Send = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Send(props, ref) {
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
        d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
        fill="currentColor"
      />
    </svg>
  );
});

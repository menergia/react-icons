import * as React from 'react';

export const ArrowUp = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function ArrowUp(props, ref) {
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
        d="M5.52495 14.4498L11.55 8.4248L17.575 14.4498L16.5 15.5248L11.55 10.5748L6.59995 15.5248L5.52495 14.4498Z"
        fill="currentColor"
      />
    </svg>
  );
});

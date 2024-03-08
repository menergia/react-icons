import * as React from 'react';

export const Down = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Down(props, ref) {
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
        d="M12.353 19L6.29085 8.5L18.4152 8.5L12.353 19Z"
        fill="currentColor"
      />
    </svg>
  );
});

import * as React from 'react';

export const ArrowTop = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function ArrowTop(props, ref) {
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
      <path d="M7 14.0001L12 8.9751L17 14.0001H7Z" fill="currentColor" />
    </svg>
  );
});

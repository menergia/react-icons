import * as React from 'react';

export const ArrowBottom = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function ArrowBottom(props, ref) {
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
      <path d="M12 14.9999L7 10.0249H17L12 14.9999Z" fill="currentColor" />
    </svg>
  );
});

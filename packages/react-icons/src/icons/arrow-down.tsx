import * as React from 'react';

export const ArrowDown = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function ArrowDown(props, ref) {
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
        d="M5.825 9.4998L6.9 8.4248L11.85 13.3748L16.8 8.4248L17.875 9.4998L11.85 15.5248L5.825 9.4998Z"
        fill="currentColor"
      />
    </svg>
  );
});

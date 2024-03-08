import * as React from 'react';

export const Text = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Text(props, ref) {
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
        d="M2.70605 2V6H10.0394V22H14.0394V6H21.3727V2H2.70605Z"
        fill="currentColor"
      />
    </svg>
  );
});

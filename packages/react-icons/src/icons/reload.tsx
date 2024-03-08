import * as React from 'react';

export const Reload = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Reload(props, ref) {
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
        d="M20.7061 10V3L18.0661 5.64C16.4461 4.01 14.1961 3 11.7061 3C6.73605 3 2.70605 7.03 2.70605 12C2.70605 16.97 6.73605 21 11.7061 21C16.6761 21 20.7061 16.97 20.7061 12H18.7061C18.7061 15.86 15.5661 19 11.7061 19C7.84605 19 4.70605 15.86 4.70605 12C4.70605 8.14 7.84605 5 11.7061 5C13.6361 5 15.3861 5.79 16.6561 7.05L13.7061 10H20.7061Z"
        fill="currentColor"
      />
    </svg>
  );
});

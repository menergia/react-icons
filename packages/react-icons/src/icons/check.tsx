import * as React from 'react';

export const Check = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Check(props, ref) {
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
        d="M8.88172 19.4393L2 12.5576L3.32104 11.2366L8.88172 16.7972L20.679 5L22 6.32104L8.88172 19.4393Z"
        fill="currentColor"
      />
    </svg>
  );
});

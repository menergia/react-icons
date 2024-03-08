import * as React from 'react';

export const LastPage = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function LastPage(props, ref) {
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
        d="M6.8001 17.875L5.7251 16.8L10.5251 12L5.7251 7.2L6.8001 6.125L12.6751 12L6.8001 17.875ZM16.5001 18V6H18.0001V18H16.5001Z"
        fill="currentColor"
      />
    </svg>
  );
});

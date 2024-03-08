import * as React from 'react';

export const Close = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Close(props, ref) {
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
        d="M19.353 6.41L17.943 5L12.353 10.59L6.76303 5L5.35303 6.41L10.943 12L5.35303 17.59L6.76303 19L12.353 13.41L17.943 19L19.353 17.59L13.763 12L19.353 6.41Z"
        fill="currentColor"
      />
    </svg>
  );
});

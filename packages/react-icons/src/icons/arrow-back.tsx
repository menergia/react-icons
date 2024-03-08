import * as React from 'react';

export const ArrowBack = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function ArrowBack(props, ref) {
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
        d="M14.025 18.0002L8 11.9752L14.025 5.9502L15.1 7.0252L10.15 11.9752L15.1 16.9252L14.025 18.0002Z"
        fill="currentColor"
      />
    </svg>
  );
});

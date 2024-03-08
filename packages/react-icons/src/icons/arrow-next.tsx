import * as React from 'react';

export const ArrowNext = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function ArrowNext(props, ref) {
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
        d="M9.37505 18.0002L8.30005 16.9252L13.25 11.9752L8.30005 7.0252L9.37505 5.9502L15.4 11.9752L9.37505 18.0002Z"
        fill="currentColor"
      />
    </svg>
  );
});

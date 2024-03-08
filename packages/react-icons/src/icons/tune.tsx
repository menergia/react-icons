import * as React from 'react';

export const Tune = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Tune(props, ref) {
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
        d="M3.35303 17V19H9.35303V17H3.35303ZM3.35303 5V7H13.353V5H3.35303ZM13.353 21V19H21.353V17H13.353V15H11.353V21H13.353ZM7.35303 9V11H3.35303V13H7.35303V15H9.35303V9H7.35303ZM21.353 13V11H11.353V13H21.353ZM15.353 9H17.353V7H21.353V5H17.353V3H15.353V9Z"
        fill="currentColor"
      />
    </svg>
  );
});

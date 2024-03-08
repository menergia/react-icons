import * as React from 'react';

export const Pulldown = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function pulldown(props, ref) {
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
      <rect x="4" y="4" width="16" height="16" fill="white" />
      <path
        d="M16.1505 9.77778H7.26161L11.7061 15.3333L16.1505 9.77778ZM21.7061 19.7778V4.22222C21.7061 3 20.7061 2 19.4838 2L3.92828 2C2.70605 2 1.70605 3 1.70605 4.22222V19.7778C1.70605 21 2.70605 22 3.92828 22H19.4838C20.7061 22 21.7061 21 21.7061 19.7778ZM3.92828 19.7778V4.22222L19.4838 4.22222V19.7778H3.92828Z"
        fill="currentColor"
      />
    </svg>
  );
});

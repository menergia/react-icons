import * as React from 'react';

export const Checkbox = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Checkbox(props, ref) {
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
        d="M19.4838 2H3.92828C2.70605 2 1.70605 3 1.70605 4.22222V19.7778C1.70605 21 2.70605 22 3.92828 22H19.4838C20.7061 22 21.7061 21 21.7061 19.7778V4.22222C21.7061 3 20.7061 2 19.4838 2ZM19.4838 19.7778H3.92828V4.22222H19.4838V19.7778ZM18.3616 8.66667L16.7949 7.08889L9.47272 14.4111L6.60605 11.5556L5.02828 13.1222L9.47272 17.5556L18.3616 8.66667Z"
        fill="currentColor"
      />
    </svg>
  );
});

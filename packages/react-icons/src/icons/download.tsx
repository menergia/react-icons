import * as React from 'react';

export const Download = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Download(props, ref) {
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
        d="M17.7061 15V18H5.70605V15H3.70605V18C3.70605 19.1 4.60605 20 5.70605 20H17.7061C18.8061 20 19.7061 19.1 19.7061 18V15H17.7061ZM16.7061 11L15.2961 9.59L12.7061 12.17V4H10.7061V12.17L8.11605 9.59L6.70605 11L11.7061 16L16.7061 11Z"
        fill="currentColor"
      />
    </svg>
  );
});

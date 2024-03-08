import * as React from 'react';

export const Description = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Description(props, ref) {
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
        d="M7.70605 16H15.7061V18H7.70605V16ZM7.70605 12H15.7061V14H7.70605V12ZM13.7061 2H5.70605C4.60605 2 3.70605 2.9 3.70605 4V20C3.70605 21.1 4.59605 22 5.69605 22H17.7061C18.8061 22 19.7061 21.1 19.7061 20V8L13.7061 2ZM17.7061 20H5.70605V4H12.7061V9H17.7061V20Z"
        fill="currentColor"
      />
    </svg>
  );
});

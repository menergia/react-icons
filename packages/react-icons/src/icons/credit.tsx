import * as React from 'react';

export const Credit = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Credit(props, ref) {
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
        d="M22.853 4.6875V19.3125C22.853 19.7625 22.6843 20.1562 22.3468 20.4937C22.0093 20.8312 21.6155 21 21.1655 21H2.04053C1.59053 21 1.19678 20.8312 0.859277 20.4937C0.521777 20.1562 0.353027 19.7625 0.353027 19.3125V4.6875C0.353027 4.2375 0.521777 3.84375 0.859277 3.50625C1.19678 3.16875 1.59053 3 2.04053 3H21.1655C21.6155 3 22.0093 3.16875 22.3468 3.50625C22.6843 3.84375 22.853 4.2375 22.853 4.6875ZM2.04053 7.75313H21.1655V4.6875H2.04053V7.75313ZM2.04053 11.3812V19.3125H21.1655V11.3812H2.04053ZM2.04053 19.3125V4.6875V19.3125Z"
        fill="currentColor"
      />
    </svg>
  );
});

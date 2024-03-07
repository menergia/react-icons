import * as React from 'react';

export const AddCircle = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function AddCircle(props, ref) {
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
        d="M11.0311 17H12.5311V12.85H16.7061V11.35H12.5311V7H11.0311V11.35H6.70605V12.85H11.0311V17ZM11.7061 22C10.2894 22 8.97272 21.7458 7.75605 21.2375C6.53939 20.7292 5.48105 20.025 4.58105 19.125C3.68105 18.225 2.97689 17.1667 2.46855 15.95C1.96022 14.7333 1.70605 13.4167 1.70605 12C1.70605 10.6 1.96022 9.29167 2.46855 8.075C2.97689 6.85833 3.68105 5.8 4.58105 4.9C5.48105 4 6.53939 3.29167 7.75605 2.775C8.97272 2.25833 10.2894 2 11.7061 2C13.1061 2 14.4144 2.25833 15.6311 2.775C16.8477 3.29167 17.9061 4 18.8061 4.9C19.7061 5.8 20.4144 6.85833 20.9311 8.075C21.4477 9.29167 21.7061 10.6 21.7061 12C21.7061 13.4167 21.4477 14.7333 20.9311 15.95C20.4144 17.1667 19.7061 18.225 18.8061 19.125C17.9061 20.025 16.8477 20.7292 15.6311 21.2375C14.4144 21.7458 13.1061 22 11.7061 22ZM11.7061 20.5C14.0394 20.5 16.0394 19.6667 17.7061 18C19.3727 16.3333 20.2061 14.3333 20.2061 12C20.2061 9.66667 19.3727 7.66667 17.7061 6C16.0394 4.33333 14.0394 3.5 11.7061 3.5C9.37272 3.5 7.37272 4.33333 5.70605 6C4.03939 7.66667 3.20605 9.66667 3.20605 12C3.20605 14.3333 4.03939 16.3333 5.70605 18C7.37272 19.6667 9.37272 20.5 11.7061 20.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

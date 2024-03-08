import * as React from 'react';

export const CheckCircle = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function CheckCircle(props, ref) {
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
        d="M10.878 16.55L17.953 9.475L16.803 8.35L10.878 14.275L7.87803 11.275L6.75303 12.4L10.878 16.55ZM12.353 22C10.9364 22 9.61969 21.7458 8.40303 21.2375C7.18636 20.7292 6.12803 20.025 5.22803 19.125C4.32803 18.225 3.62386 17.1667 3.11553 15.95C2.60719 14.7333 2.35303 13.4167 2.35303 12C2.35303 10.6 2.60719 9.29167 3.11553 8.075C3.62386 6.85833 4.32803 5.8 5.22803 4.9C6.12803 4 7.18636 3.29167 8.40303 2.775C9.61969 2.25833 10.9364 2 12.353 2C13.753 2 15.0614 2.25833 16.278 2.775C17.4947 3.29167 18.553 4 19.453 4.9C20.353 5.8 21.0614 6.85833 21.578 8.075C22.0947 9.29167 22.353 10.6 22.353 12C22.353 13.4167 22.0947 14.7333 21.578 15.95C21.0614 17.1667 20.353 18.225 19.453 19.125C18.553 20.025 17.4947 20.7292 16.278 21.2375C15.0614 21.7458 13.753 22 12.353 22ZM12.353 20.5C14.7697 20.5 16.7905 19.6875 18.4155 18.0625C20.0405 16.4375 20.853 14.4167 20.853 12C20.853 9.58333 20.0405 7.5625 18.4155 5.9375C16.7905 4.3125 14.7697 3.5 12.353 3.5C9.93636 3.5 7.91553 4.3125 6.29053 5.9375C4.66553 7.5625 3.85303 9.58333 3.85303 12C3.85303 14.4167 4.66553 16.4375 6.29053 18.0625C7.91553 19.6875 9.93636 20.5 12.353 20.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

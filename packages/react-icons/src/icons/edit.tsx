import * as React from 'react';

export const Edit = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Edit(props, ref) {
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
      <g clip-path="url(#clip0_2_1077)">
        <path
          d="M13.7661 9.02L14.6861 9.94L5.62605 19H4.70605V18.08L13.7661 9.02ZM17.3661 3C17.1161 3 16.8561 3.1 16.6661 3.29L14.8361 5.12L18.5861 8.87L20.4161 7.04C20.8061 6.65 20.8061 6.02 20.4161 5.63L18.0761 3.29C17.8761 3.09 17.6261 3 17.3661 3ZM13.7661 6.19L2.70605 17.25V21H6.45605L17.5161 9.94L13.7661 6.19Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_1077">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

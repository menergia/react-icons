import * as React from 'react';

export const Menu = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Menu(props, ref) {
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
      <g clip-path="url(#clip0_1108_50461)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 5.26923C1 4.56825 1.56825 4 2.26923 4H21.7308C22.4317 4 23 4.56825 23 5.26923C23 5.97021 22.4317 6.53846 21.7308 6.53846H2.26923C1.56825 6.53846 1 5.97021 1 5.26923Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 12.0388C1 11.3378 1.56825 10.7695 2.26923 10.7695H21.7308C22.4317 10.7695 23 11.3378 23 12.0388C23 12.7397 22.4317 13.308 21.7308 13.308H2.26923C1.56825 13.308 1 12.7397 1 12.0388Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 18.8083C1 18.1073 1.56825 17.5391 2.26923 17.5391H21.7308C22.4317 17.5391 23 18.1073 23 18.8083C23 19.5093 22.4317 20.0775 21.7308 20.0775H2.26923C1.56825 20.0775 1 19.5093 1 18.8083Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1108_50461">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});

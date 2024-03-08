import * as React from 'react';

export const Menu = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Menu(props, ref) {
  return (
    <svg
      ref={ref}
      width="22"
      height="17"
      viewBox="0 0 22 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 1.26923C0 0.568254 0.568254 0 1.26923 0H20.7308C21.4317 0 22 0.568254 22 1.26923C22 1.97021 21.4317 2.53846 20.7308 2.53846H1.26923C0.568254 2.53846 0 1.97021 0 1.26923Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 8.03876C0 7.33779 0.568254 6.76953 1.26923 6.76953H20.7308C21.4317 6.76953 22 7.33779 22 8.03876C22 8.73974 21.4317 9.30799 20.7308 9.30799H1.26923C0.568254 9.30799 0 8.73974 0 8.03876Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 14.8083C0 14.1073 0.568254 13.5391 1.26923 13.5391H20.7308C21.4317 13.5391 22 14.1073 22 14.8083C22 15.5093 21.4317 16.0775 20.7308 16.0775H1.26923C0.568254 16.0775 0 15.5093 0 14.8083Z"
        fill="currentColor"
      />
    </svg>
  );
});

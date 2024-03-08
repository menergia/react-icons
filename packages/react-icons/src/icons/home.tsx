import * as React from 'react';

export const Home = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Home(props, ref) {
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
        d="M12 5.16471L18 10.4588V19.6471H15.6V12.5882H8.4V19.6471H6V10.4588L12 5.16471ZM12 2L0 12.5882H3.6V22H10.8V14.9412H13.2V22H20.4V12.5882H24L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
});

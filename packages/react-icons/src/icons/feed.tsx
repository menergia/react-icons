import * as React from 'react';

export const Feed = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Feed(props, ref) {
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
        d="M16.353 3H5.35303C4.25303 3 3.35303 3.9 3.35303 5V19C3.35303 20.1 4.25303 21 5.35303 21H19.353C20.453 21 21.353 20.1 21.353 19V8L16.353 3ZM19.353 19H5.35303V5H15.353V9H19.353V19ZM7.35303 17H17.353V15H7.35303V17ZM12.353 7H7.35303V9H12.353V7ZM7.35303 13H17.353V11H7.35303V13Z"
        fill="currentColor"
      />
    </svg>
  );
});

import * as React from 'react';

export const History = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function History(props, ref) {
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
        d="M13.7061 3C8.73605 3 4.70605 7.03 4.70605 12H1.70605L5.59605 15.89L5.66605 16.03L9.70605 12H6.70605C6.70605 8.13 9.83605 5 13.7061 5C17.5761 5 20.7061 8.13 20.7061 12C20.7061 15.87 17.5761 19 13.7061 19C11.7761 19 10.0261 18.21 8.76606 16.94L7.34605 18.36C8.97605 19.99 11.2161 21 13.7061 21C18.6761 21 22.7061 16.97 22.7061 12C22.7061 7.03 18.6761 3 13.7061 3ZM12.7061 8V13L16.9561 15.52L17.7261 14.24L14.2061 12.15V8H12.7061Z"
        fill="currentColor"
      />
    </svg>
  );
});

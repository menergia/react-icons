import * as React from 'react';

export const Preview = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Preview(props, ref) {
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
        d="M18.7061 3H4.70605C3.59605 3 2.70605 3.9 2.70605 5V19C2.70605 20.1 3.59605 21 4.70605 21H18.7061C19.8061 21 20.7061 20.1 20.7061 19V5C20.7061 3.9 19.8161 3 18.7061 3ZM18.7061 19H4.70605V7H18.7061V19ZM11.7061 10.5C13.5461 10.5 15.1861 11.46 16.0461 13C15.1861 14.54 13.5461 15.5 11.7061 15.5C9.86605 15.5 8.22605 14.54 7.36605 13C8.22605 11.46 9.86605 10.5 11.7061 10.5ZM11.7061 9C8.97605 9 6.64605 10.66 5.70605 13C6.64605 15.34 8.97605 17 11.7061 17C14.4361 17 16.7661 15.34 17.7061 13C16.7661 10.66 14.4361 9 11.7061 9ZM11.7061 14.5C10.8761 14.5 10.2061 13.83 10.2061 13C10.2061 12.17 10.8761 11.5 11.7061 11.5C12.5361 11.5 13.2061 12.17 13.2061 13C13.2061 13.83 12.5361 14.5 11.7061 14.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

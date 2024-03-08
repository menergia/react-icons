import * as React from 'react';

export const Visibility = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function visibility(props, ref) {
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
        d="M12 19.5001C9.59578 19.5059 7.24784 18.7728 5.274 17.4001C3.34563 16.0635 1.85799 14.1839 1 12.0001C1.86806 9.78994 3.38179 7.89251 5.34389 6.55513C7.30599 5.21775 9.62546 4.50244 12 4.50244C14.3745 4.50244 16.694 5.21775 18.6561 6.55513C20.6182 7.89251 22.1319 9.78994 23 12.0001C22.1423 14.1838 20.655 16.0634 18.727 17.4001C16.7529 18.773 14.4046 19.5061 12 19.5001ZM12 7.00013C11.0111 7.00013 10.0444 7.29337 9.22215 7.84278C8.3999 8.39218 7.75904 9.17308 7.3806 10.0867C7.00216 11.0003 6.90315 12.0057 7.09607 12.9756C7.289 13.9455 7.7652 14.8364 8.46447 15.5357C9.16373 16.2349 10.0546 16.7111 11.0245 16.9041C11.9945 17.097 12.9998 16.998 13.9134 16.6195C14.827 16.2411 15.6079 15.6002 16.1573 14.778C16.7068 13.9557 17 12.989 17 12.0001C16.9987 10.6744 16.4715 9.40345 15.5341 8.46605C14.5967 7.52866 13.3257 7.00145 12 7.00013ZM12 15.0001C11.4067 15.0001 10.8266 14.8242 10.3333 14.4945C9.83994 14.1649 9.45542 13.6964 9.22836 13.1482C9.0013 12.6 8.94189 11.9968 9.05764 11.4149C9.1734 10.8329 9.45912 10.2984 9.87868 9.87881C10.2982 9.45925 10.8328 9.17353 11.4147 9.05777C11.9967 8.94202 12.5999 9.00143 13.1481 9.22849C13.6962 9.45555 14.1648 9.84007 14.4944 10.3334C14.8241 10.8268 15 11.4068 15 12.0001C15 12.7958 14.6839 13.5588 14.1213 14.1214C13.5587 14.6841 12.7956 15.0001 12 15.0001Z"
        fill="currentColor"
      />
    </svg>
  );
});
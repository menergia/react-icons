import * as React from 'react';

export const PersonCheck = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function PersonCheck(props, ref) {
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
        d="M17.4951 11.7115L14.4113 8.62774L15.4435 7.61964L17.4951 9.67117L21.5981 5.56811L22.6155 6.60034L17.4951 11.7115ZM9.24067 11.7579C8.31147 11.7579 7.51601 11.4271 6.85429 10.7654C6.19257 10.1036 5.86171 9.30818 5.86171 8.37897C5.86171 7.44975 6.19257 6.65428 6.85429 5.99258C7.51601 5.33086 8.31147 5 9.24067 5C10.1699 5 10.9653 5.33086 11.6271 5.99258C12.2888 6.65428 12.6196 7.44975 12.6196 8.37897C12.6196 9.30818 12.2888 10.1036 11.6271 10.7654C10.9653 11.4271 10.1699 11.7579 9.24067 11.7579ZM2.00002 19.11V16.9638C2.00002 16.491 2.12843 16.0532 2.38523 15.6503C2.64206 15.2474 2.98523 14.9377 3.41471 14.7211C4.369 14.2532 5.33165 13.9023 6.30264 13.6684C7.27363 13.4345 8.25298 13.3175 9.24067 13.3175C10.2284 13.3175 11.2077 13.4345 12.1787 13.6684C13.1497 13.9023 14.1123 14.2532 15.0666 14.7211C15.4961 14.9377 15.8393 15.2474 16.0961 15.6503C16.3529 16.0532 16.4814 16.491 16.4814 16.9638V19.11H2.00002ZM3.44812 17.6619H15.0332V16.9638C15.0332 16.7682 14.9766 16.5872 14.8633 16.4208C14.7501 16.2543 14.5963 16.1184 14.402 16.0132C13.5702 15.6035 12.7221 15.2932 11.8577 15.0821C10.9932 14.8711 10.1209 14.7656 9.24067 14.7656C8.3605 14.7656 7.48817 14.8711 6.62369 15.0821C5.75922 15.2932 4.91111 15.6035 4.07936 16.0132C3.88504 16.1184 3.73125 16.2543 3.61801 16.4208C3.50475 16.5872 3.44812 16.7682 3.44812 16.9638V17.6619ZM9.24067 10.3098C9.77166 10.3098 10.2262 10.1208 10.6043 9.74263C10.9825 9.36451 11.1715 8.90995 11.1715 8.37897C11.1715 7.84798 10.9825 7.39343 10.6043 7.0153C10.2262 6.63718 9.77166 6.44812 9.24067 6.44812C8.70969 6.44812 8.25514 6.63718 7.87701 7.0153C7.49888 7.39343 7.30982 7.84798 7.30982 8.37897C7.30982 8.90995 7.49888 9.36451 7.87701 9.74263C8.25514 10.1208 8.70969 10.3098 9.24067 10.3098Z"
        fill="currentColor"
      />
    </svg>
  );
});

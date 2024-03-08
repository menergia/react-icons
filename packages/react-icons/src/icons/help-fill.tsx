import * as React from 'react';

export const HelpFill = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function HelpFill(props, ref) {
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
        d="M12.453 17.825C12.7197 17.825 12.9447 17.7333 13.128 17.55C13.3114 17.3667 13.403 17.1417 13.403 16.875C13.403 16.6083 13.3114 16.3833 13.128 16.2C12.9447 16.0167 12.7197 15.925 12.453 15.925C12.1864 15.925 11.9614 16.0167 11.778 16.2C11.5947 16.3833 11.503 16.6083 11.503 16.875C11.503 17.1417 11.5947 17.3667 11.778 17.55C11.9614 17.7333 12.1864 17.825 12.453 17.825ZM11.578 14.175H13.053C13.053 13.7417 13.1072 13.3458 13.2155 12.9875C13.3239 12.6292 13.6614 12.2167 14.228 11.75C14.7447 11.3167 15.1114 10.8917 15.328 10.475C15.5447 10.0583 15.653 9.6 15.653 9.1C15.653 8.21667 15.3655 7.50833 14.7905 6.975C14.2155 6.44167 13.453 6.175 12.503 6.175C11.6864 6.175 10.9655 6.37917 10.3405 6.7875C9.71553 7.19583 9.26136 7.75833 8.97803 8.475L10.303 8.975C10.4864 8.50833 10.7614 8.14583 11.128 7.8875C11.4947 7.62917 11.928 7.5 12.428 7.5C12.9947 7.5 13.453 7.65417 13.803 7.9625C14.153 8.27083 14.328 8.66667 14.328 9.15C14.328 9.51667 14.2197 9.8625 14.003 10.1875C13.7864 10.5125 13.4697 10.85 13.053 11.2C12.553 11.6333 12.1822 12.0625 11.9405 12.4875C11.6989 12.9125 11.578 13.475 11.578 14.175ZM12.353 22C10.9864 22 9.69469 21.7375 8.47803 21.2125C7.26136 20.6875 6.19886 19.9708 5.29053 19.0625C4.38219 18.1542 3.66553 17.0917 3.14053 15.875C2.61553 14.6583 2.35303 13.3667 2.35303 12C2.35303 10.6167 2.61553 9.31667 3.14053 8.1C3.66553 6.88333 4.38219 5.825 5.29053 4.925C6.19886 4.025 7.26136 3.3125 8.47803 2.7875C9.69469 2.2625 10.9864 2 12.353 2C13.7364 2 15.0364 2.2625 16.253 2.7875C17.4697 3.3125 18.528 4.025 19.428 4.925C20.328 5.825 21.0405 6.88333 21.5655 8.1C22.0905 9.31667 22.353 10.6167 22.353 12C22.353 13.3667 22.0905 14.6583 21.5655 15.875C21.0405 17.0917 20.328 18.1542 19.428 19.0625C18.528 19.9708 17.4697 20.6875 16.253 21.2125C15.0364 21.7375 13.7364 22 12.353 22Z"
        fill="currentColor"
      />
    </svg>
  );
});
import * as React from 'react';

export const PersonGroup = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function PersonGroup(props, ref) {
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
      <g clipPath="url(#clip0_2_1191)">
        <path
          d="M17.5723 19.007C17.5387 18.969 17.5278 18.938 17.5525 18.894C17.5896 18.8515 17.6227 18.8057 17.6513 18.757C17.6741 18.6698 17.6864 18.5801 17.6878 18.49C17.699 18.3481 17.6967 18.2054 17.6809 18.064C17.5295 16.8571 17.1291 15.6959 16.5057 14.6559C15.8824 13.6158 15.0501 12.7201 14.0627 12.027C14.0241 12.0082 13.9943 11.9748 13.9798 11.934C13.9748 11.9168 13.9763 11.8985 13.984 11.8824C13.9916 11.8663 14.0049 11.8537 14.0213 11.847C14.0534 11.8361 14.0864 11.8284 14.12 11.824C14.7073 11.703 15.3051 11.6424 15.9044 11.643C20.1092 11.643 23.5693 14.543 23.994 18.262C24.0067 18.3575 23.9992 18.4547 23.9721 18.5471C23.9449 18.6395 23.8986 18.725 23.8363 18.7979C23.774 18.8708 23.6972 18.9295 23.6108 18.97C23.5244 19.0105 23.4305 19.032 23.3353 19.033H17.7668H17.6918C17.6503 19.0356 17.609 19.0266 17.5723 19.007ZM0.669357 19.032C0.57384 19.0314 0.479541 19.0102 0.392718 18.9699C0.305896 18.9296 0.228537 18.871 0.165777 18.7981C0.103017 18.7252 0.0562914 18.6396 0.028703 18.547C0.00111457 18.4544 -0.00670585 18.3569 0.00576089 18.261C0.436308 14.543 3.8955 11.643 8.10321 11.643C12.3109 11.643 15.7681 14.543 16.1937 18.262C16.2062 18.3575 16.1985 18.4545 16.1712 18.5468C16.1439 18.639 16.0976 18.7244 16.0354 18.7972C15.9731 18.8701 15.8964 18.9287 15.8102 18.9694C15.7239 19.01 15.6302 19.0317 15.5351 19.033L0.669357 19.032ZM15.8768 10.432C15.0357 10.4283 14.2304 10.0868 13.6376 9.48262C13.0449 8.8784 12.713 8.06072 12.7148 7.209C12.7166 6.35728 13.052 5.54107 13.6474 4.93947C14.2428 4.33787 15.0495 4 15.8906 4C16.7317 4 17.5384 4.33787 18.1338 4.93947C18.7291 5.54107 19.0645 6.35728 19.0664 7.209C19.0682 8.06072 18.7363 8.8784 18.1435 9.48262C17.5507 10.0868 16.7455 10.4283 15.9044 10.432H15.8768ZM8.07556 10.432C7.23471 10.4284 6.42961 10.0872 5.83691 9.48318C5.24422 8.87918 4.91234 8.06175 4.9141 7.21025C4.91587 6.35875 5.25113 5.54273 5.84633 4.94126C6.44153 4.33979 7.24804 4.002 8.08889 4.002C8.92974 4.002 9.73625 4.33979 10.3314 4.94126C10.9266 5.54273 11.2619 6.35875 11.2637 7.21025C11.2654 8.06175 10.9336 8.87918 10.3409 9.48318C9.74817 10.0872 8.94307 10.4284 8.10222 10.432H8.07556Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_1191">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
});
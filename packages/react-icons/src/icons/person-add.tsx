import * as React from 'react';

export const PersonAdd = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function PersonAdd(props, ref) {
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
        d="M17.6818 13.6022V10.6477H14.7273V9.28402H17.6818V6.32948H19.0455V9.28402H22V10.6477H19.0455V13.6022H17.6818ZM9.27273 11.7613C8.27273 11.7613 7.45455 11.4431 6.81818 10.8068C6.18182 10.1704 5.86364 9.35221 5.86364 8.35221C5.86364 7.35221 6.18182 6.53402 6.81818 5.89766C7.45455 5.2613 8.27273 4.94312 9.27273 4.94312C10.2727 4.94312 11.0909 5.2613 11.7273 5.89766C12.3636 6.53402 12.6818 7.35221 12.6818 8.35221C12.6818 9.35221 12.3636 10.1704 11.7273 10.8068C11.0909 11.4431 10.2727 11.7613 9.27273 11.7613ZM2 19.0568V16.9204C2 16.3901 2.13636 15.909 2.40909 15.4772C2.68182 15.0454 3.06061 14.7234 3.54545 14.5113C4.68182 14.0113 5.69318 13.659 6.57955 13.4545C7.46591 13.2499 8.36364 13.1477 9.27273 13.1477C10.1818 13.1477 11.0795 13.2499 11.9659 13.4545C12.8523 13.659 13.8561 14.0113 14.9773 14.5113C15.4621 14.7386 15.8447 15.0643 16.125 15.4886C16.4053 15.9128 16.5455 16.3901 16.5455 16.9204V19.0568H2ZM3.36364 17.6931H15.1818V16.9204C15.1818 16.678 15.1212 16.4469 15 16.2272C14.8788 16.0075 14.6894 15.8446 14.4318 15.7386C13.3712 15.2234 12.4659 14.8901 11.7159 14.7386C10.9659 14.5871 10.1515 14.5113 9.27273 14.5113C8.39394 14.5113 7.57955 14.5908 6.82955 14.7499C6.07955 14.909 5.16667 15.2386 4.09091 15.7386C3.86364 15.8446 3.68561 16.0075 3.55682 16.2272C3.42803 16.4469 3.36364 16.678 3.36364 16.9204V17.6931ZM9.27273 10.3977C9.86364 10.3977 10.3523 10.2045 10.7386 9.81812C11.125 9.43175 11.3182 8.94312 11.3182 8.35221C11.3182 7.7613 11.125 7.27266 10.7386 6.8863C10.3523 6.49993 9.86364 6.30675 9.27273 6.30675C8.68182 6.30675 8.19318 6.49993 7.80682 6.8863C7.42045 7.27266 7.22727 7.7613 7.22727 8.35221C7.22727 8.94312 7.42045 9.43175 7.80682 9.81812C8.19318 10.2045 8.68182 10.3977 9.27273 10.3977Z"
        fill="currentColor"
      />
    </svg>
  );
});
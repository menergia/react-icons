import * as React from 'react';

export const EventBusy = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function EventBusy(props, ref) {
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
        d="M9.87803 18.55L8.80303 17.475L11.303 15L8.80303 12.525L9.87803 11.45L12.353 13.95L14.828 11.45L15.903 12.525L13.403 15L15.903 17.475L14.828 18.55L12.353 16.05L9.87803 18.55ZM4.85303 22C4.45303 22 4.10303 21.85 3.80303 21.55C3.50303 21.25 3.35303 20.9 3.35303 20.5V5C3.35303 4.6 3.50303 4.25 3.80303 3.95C4.10303 3.65 4.45303 3.5 4.85303 3.5H6.47803V2H8.10303V3.5H16.603V2H18.228V3.5H19.853C20.253 3.5 20.603 3.65 20.903 3.95C21.203 4.25 21.353 4.6 21.353 5V20.5C21.353 20.9 21.203 21.25 20.903 21.55C20.603 21.85 20.253 22 19.853 22H4.85303ZM4.85303 20.5H19.853V9.75H4.85303V20.5ZM4.85303 8.25H19.853V5H4.85303V8.25ZM4.85303 8.25V5V8.25Z"
        fill="currentColor"
      />
    </svg>
  );
});

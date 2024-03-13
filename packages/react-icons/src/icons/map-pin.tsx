import React from 'react';

export const MapPin = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function MapPin(props, ref) {
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
        d="M12.5882 11.75C13.07 11.75 13.4818 11.5784 13.8234 11.2353C14.1651 10.8921 14.3359 10.4796 14.3359 9.99778C14.3359 9.51593 14.1644 9.10417 13.8212 8.7625C13.4781 8.42083 13.0656 8.25 12.5837 8.25C12.1019 8.25 11.6901 8.42158 11.3484 8.76472C11.0068 9.10786 10.8359 9.52036 10.8359 10.0022C10.8359 10.4841 11.0075 10.8958 11.3507 11.2375C11.6938 11.5792 12.1063 11.75 12.5882 11.75ZM12.5859 20.025C14.8026 18.0083 16.4401 16.1792 17.4984 14.5375C18.5568 12.8958 19.0859 11.45 19.0859 10.2C19.0859 8.23683 18.4585 6.62937 17.2036 5.37762C15.9488 4.12587 14.4096 3.5 12.5859 3.5C10.7623 3.5 9.22309 4.12587 7.96824 5.37762C6.71337 6.62937 6.08594 8.23683 6.08594 10.2C6.08594 11.45 6.6276 12.8958 7.71094 14.5375C8.79427 16.1792 10.4193 18.0083 12.5859 20.025ZM12.5859 22C9.9026 19.7167 7.89844 17.5958 6.57344 15.6375C5.24844 13.6792 4.58594 11.8667 4.58594 10.2C4.58594 7.7 5.3901 5.70833 6.99844 4.225C8.60677 2.74167 10.4693 2 12.5859 2C14.7026 2 16.5651 2.74167 18.1734 4.225C19.7818 5.70833 20.5859 7.7 20.5859 10.2C20.5859 11.8667 19.9234 13.6792 18.5984 15.6375C17.2734 17.5958 15.2693 19.7167 12.5859 22Z"
        fill="currentColor"
      />
    </svg>
  );
});
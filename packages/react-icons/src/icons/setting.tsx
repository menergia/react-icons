import * as React from 'react';

export const Setting = React.forwardRef<
  SVGSVGElement,
  React.HTMLAttributes<SVGElement>
>(function Setting(props, ref) {
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
        d="M19.4301 12.5378C19.4701 12.2534 19.5001 11.9689 19.5001 11.6667C19.5001 11.3645 19.4701 11.0801 19.4301 10.7956L21.5401 9.32894C21.7301 9.19561 21.7801 8.95561 21.6601 8.76005L19.6601 5.6845C19.5701 5.54228 19.4001 5.46228 19.2201 5.46228C19.1601 5.46228 19.1001 5.47116 19.0501 5.48894L16.5601 6.37783C16.0401 6.02228 15.4801 5.72894 14.8701 5.50672L14.4901 3.15117C14.4601 2.93783 14.2501 2.77783 14.0001 2.77783H10.0001C9.75008 2.77783 9.54008 2.93783 9.51008 3.15117L9.13008 5.50672C8.52008 5.72894 7.96008 6.03116 7.44008 6.37783L4.95008 5.48894C4.89008 5.47116 4.83008 5.46228 4.77008 5.46228C4.60008 5.46228 4.43008 5.54228 4.34008 5.6845L2.34008 8.76005C2.21008 8.95561 2.27008 9.19561 2.46008 9.32894L4.57008 10.7956C4.53008 11.0801 4.50008 11.3734 4.50008 11.6667C4.50008 11.9601 4.53008 12.2534 4.57008 12.5378L2.46008 14.0045C2.27008 14.1378 2.22008 14.3778 2.34008 14.5734L4.34008 17.6489C4.43008 17.7912 4.60008 17.8712 4.78008 17.8712C4.84008 17.8712 4.90008 17.8623 4.95008 17.8445L7.44008 16.9556C7.96008 17.3112 8.52008 17.6045 9.13008 17.8267L9.51008 20.1823C9.54008 20.3956 9.75008 20.5556 10.0001 20.5556H14.0001C14.2501 20.5556 14.4601 20.3956 14.4901 20.1823L14.8701 17.8267C15.4801 17.6045 16.0401 17.3023 16.5601 16.9556L19.0501 17.8445C19.1101 17.8623 19.1701 17.8712 19.2301 17.8712C19.4001 17.8712 19.5701 17.7912 19.6601 17.6489L21.6601 14.5734C21.7801 14.3778 21.7301 14.1378 21.5401 14.0045L19.4301 12.5378ZM17.4501 11.0178C17.4901 11.2934 17.5001 11.4801 17.5001 11.6667C17.5001 11.8534 17.4801 12.0489 17.4501 12.3156L17.3101 13.3201L18.2001 13.9423L19.2801 14.6889L18.5801 15.7645L17.3101 15.3112L16.2701 14.9378L15.3701 15.5423C14.9401 15.8267 14.5301 16.0401 14.1201 16.1912L13.0601 16.5734L12.9001 17.5778L12.7001 18.7778H11.3001L11.1101 17.5778L10.9501 16.5734L9.89008 16.1912C9.46008 16.0312 9.06008 15.8267 8.66008 15.5601L7.75008 14.9378L6.69008 15.3201L5.42008 15.7734L4.72008 14.6978L5.80008 13.9512L6.69008 13.3289L6.55008 12.3245C6.52008 12.0489 6.50008 11.8445 6.50008 11.6667C6.50008 11.4889 6.52008 11.2845 6.55008 11.0178L6.69008 10.0134L5.80008 9.39116L4.72008 8.6445L5.42008 7.56894L6.69008 8.02228L7.73008 8.39561L8.63008 7.79116C9.06008 7.50672 9.47008 7.29339 9.88008 7.14228L10.9401 6.76005L11.1001 5.75561L11.3001 4.55561H12.6901L12.8801 5.75561L13.0401 6.76005L14.1001 7.14228C14.5301 7.30228 14.9301 7.50672 15.3301 7.77339L16.2401 8.39561L17.3001 8.01339L18.5701 7.56005L19.2701 8.63561L18.2001 9.39116L17.3101 10.0134L17.4501 11.0178ZM12.0001 8.11116C9.79008 8.11116 8.00008 9.70228 8.00008 11.6667C8.00008 13.6312 9.79008 15.2223 12.0001 15.2223C14.2101 15.2223 16.0001 13.6312 16.0001 11.6667C16.0001 9.70228 14.2101 8.11116 12.0001 8.11116ZM12.0001 13.4445C10.9001 13.4445 10.0001 12.6445 10.0001 11.6667C10.0001 10.6889 10.9001 9.88894 12.0001 9.88894C13.1001 9.88894 14.0001 10.6889 14.0001 11.6667C14.0001 12.6445 13.1001 13.4445 12.0001 13.4445Z"
        fill="currentColor"
      />
    </svg>
  );
});
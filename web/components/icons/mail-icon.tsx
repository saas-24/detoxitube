import * as React from "react";

function MailIcon(props: React.SVGProps<SVGSVGElement> | undefined) {
  return (
    <svg
      width="20px"
      height="20px"
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon fill-foreground"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M464 80H48C21.49 80 0 101.49 0 128v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V128c0-26.51-21.49-48-48-48zM464 384H48c-8.822 0-16-7.178-16-16V168l176 118.2c13.66 9.158 31.67 14.8 48 14.8s34.34-5.642 48-14.8L480 168v200c0 8.822-7.178 16-16 16zm-48-178.7L292.8 284.3c-9.812 6.57-21.56 10.1-32.8 10.1s-22.99-3.53-32.8-10.1L48 205.3V128c0-8.822 7.178-16 16-16h416c8.822 0 16 7.178 16 16v77.3z" />
    </svg>
  );
}

export default MailIcon;
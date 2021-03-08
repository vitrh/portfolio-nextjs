import * as React from "react";

function SvgLinkedIn(props) {
  return (
    <svg
      width={20}
      height={20}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.571 0H1.424C.638 0 0 .647 0 1.442v17.116C0 19.353.638 20 1.424 20h17.147c.786 0 1.429-.647 1.429-1.442V1.442C20 .647 19.357 0 18.571 0zM6.045 17.143H3.08V7.598h2.97v9.545h-.005zM4.563 6.295a1.72 1.72 0 010-3.438c.946 0 1.718.772 1.718 1.719 0 .95-.768 1.719-1.718 1.719zm12.593 10.848h-2.964V12.5c0-1.107-.022-2.531-1.54-2.531-1.545 0-1.781 1.205-1.781 2.45v4.724H7.905V7.598h2.844v1.304h.04c.398-.75 1.366-1.54 2.808-1.54 3 0 3.558 1.977 3.558 4.549v5.232z"
        fill="snow"
      />
    </svg>
  );
}

export default SvgLinkedIn;
import * as React from "react";

function SvgLogo(props) {
  return (
    <svg
      width={74}
      height={49}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#Logo_svg__filter0_d)">
        <path
          d="M9.819 2.076h6.225L29.758 40.1h-6.1L9.818 2.076z"
          fill="url(#Logo_svg__paint0_linear)"
        />
        <path
          d="M29.675 40.1h-5.85L37.054 2.075h6.46L29.675 40.1z"
          fill="url(#Logo_svg__paint1_linear)"
        />
        <path
          d="M47.17 2.282h6.224v37.767H47.17V2.282z"
          fill="url(#Logo_svg__paint2_linear)"
        />
        <path
          d="M33.31 39.98l2.115-6.224h32.122v6.225H33.31z"
          fill="url(#Logo_svg__paint3_linear)"
        />
        <path
          d="M1 2.282h4.15L7.225 6.95h-4.15L1 2.282z"
          fill="url(#Logo_svg__paint4_linear)"
        />
        <path
          d="M12.932 35.742h4.15l2.075 4.668h-4.15l-2.075-4.668z"
          fill="url(#Logo_svg__paint5_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="Logo_svg__paint0_linear"
          x1={12.567}
          y1={1.076}
          x2={27.12}
          y2={41.059}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#5205E1" stopOpacity={0.3} />
        </linearGradient>
        <linearGradient
          id="Logo_svg__paint1_linear"
          x1={26.138}
          y1={40.941}
          x2={40.662}
          y2={1.038}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#5205E1" stopOpacity={0.3} />
        </linearGradient>
        <linearGradient
          id="Logo_svg__paint2_linear"
          x1={50.282}
          y1={2.282}
          x2={50.282}
          y2={40.05}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#5205E1" stopOpacity={0.3} />
        </linearGradient>
        <linearGradient
          id="Logo_svg__paint3_linear"
          x1={33.309}
          y1={36.868}
          x2={67.547}
          y2={36.868}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#5205E1" stopOpacity={0.3} />
        </linearGradient>
        <linearGradient
          id="Logo_svg__paint4_linear"
          x1={4.113}
          y1={2.282}
          x2={4.113}
          y2={6.95}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#5205E1" stopOpacity={0.3} />
        </linearGradient>
        <linearGradient
          id="Logo_svg__paint5_linear"
          x1={16.044}
          y1={35.742}
          x2={16.044}
          y2={40.41}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#5205E1" stopOpacity={0.3} />
        </linearGradient>
        <filter
          id="Logo_svg__filter0_d"
          x={0.5}
          y={0}
          width={72.547}
          height={48.06}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={2.5} dy={3} />
          <feGaussianBlur stdDeviation={1.5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgLogo;

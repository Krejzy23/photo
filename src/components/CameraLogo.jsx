const CameraLogo = ({ className = "", size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="6"
      y="18"
      width="52"
      height="34"
      rx="6"
      stroke="currentColor"
      strokeWidth="2.5"
    />

    <path
      d="M22 18L26 12H38L42 18"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />

    <circle
      cx="32"
      cy="35"
      r="10"
      stroke="currentColor"
      strokeWidth="2.5"
    />

    <circle
      cx="32"
      cy="35"
      r="5"
      stroke="currentColor"
      strokeWidth="2"
    />

    <circle
      cx="48"
      cy="26"
      r="2"
      fill="currentColor"
    />
  </svg>
);

export default CameraLogo;

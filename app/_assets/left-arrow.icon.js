export default function LeftArrowIcon({ additionalClasses, ...args }) {
  return (
    <div className={`${additionalClasses}`} {...args}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="m15 18-5.93-5.93a.1.1 0 0 1 0-.14L15 6"
        />
      </svg>
    </div>
  );
}

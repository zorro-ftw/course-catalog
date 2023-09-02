export default function BookmarkIcon({ additionalClasses }) {
  return (
    <div className={`${additionalClasses}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 12 15"
      >
        <g clipPath="url(#a)">
          <path
            fill="currentColor"
            d="M1.5 0h9c.828 0 1.5.63 1.5 1.406V15l-6-3.281L0 15V1.406C0 .63.672 0 1.5 0ZM1 13.368l5-2.735 5 2.735V1.406c0-.258-.224-.468-.5-.468h-9c-.276 0-.5.21-.5.468v11.962Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M12 0H0v15h12z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

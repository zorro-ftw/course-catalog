export default function Brand({ variant }) {
  return (
    <div className="w-fit h-fit flex items-center gap-3">
      <div
        className={`${
          variant === "login" ? "w-[6px] h-10" : "w-1 h-6"
        } bg-cc-orange-100`}
      ></div>
      <h1
        className={`${
          variant === "login" ? "cc-text-32-bold" : "cc-text-20-bold"
        }`}
      >
        MANAGE COURSES
      </h1>
    </div>
  );
}

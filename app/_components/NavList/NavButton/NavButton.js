"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function NavButton({
  iconURL,
  text,
  navigatesTo,
  iconPosition = "left",
}) {
  const router = useRouter();
  const pathName = usePathname();

  const isActive = navigatesTo === pathName;

  const handleClick = () => {
    router.push(navigatesTo); // Navigate to the specified route
  };

  return (
    <div
      className={`flex gap-4 py-3 ${
        iconPosition === "left" ? "pl-10" : "pl-12"
      } w-full items-center rounded-[4px] border-none ${
        !isActive && "hover:bg-cc-orange-300"
      } cursor-pointer ${isActive ? "bg-cc-orange-200" : ""}`}
      onClick={handleClick}
    >
      {iconPosition === "left" ? (
        <>
          <Image src={iconURL} alt={text} width="17" height="17" />
          <span className="cc-text-14-bl-med ">{text}</span>{" "}
        </>
      ) : (
        <>
          <span className="cc-text-14-bl-med ">{text}</span>
          <Image src={iconURL} alt={text} width="17" height="17" />
        </>
      )}
    </div>
  );
}

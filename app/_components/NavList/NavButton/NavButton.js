import Image from "next/image";

export default function NavButton({ iconURL, text, navigatesTo }) {
  return (
    <div className="flex gap-2 items-center rounded-[4px] border-none">
      <Image src={iconURL} alt={text} width="17" height="17" />
      <span className="cc-text-14-bl-med ">{text}</span>
    </div>
  );
}

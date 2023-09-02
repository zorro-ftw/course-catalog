"use client";
import { useRouter } from "next/navigation";

export default function PrimaryButton({
  type,
  children,
  navigateTo,
  onClick,
  additionalClasses,
}) {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault(); // Prevent page refresh

    // Handle navigation if navigateTo is provided
    if (navigateTo) {
      router.push(navigateTo); // Navigate to the specified route
    }
  };

  return (
    <button
      type={type}
      className={`w-full py-3  bg-cc-orange-200 rounded-md ${additionalClasses}`}
      onClick={onClick ? onClick : handleClick}
    >
      {children}
    </button>
  );
}

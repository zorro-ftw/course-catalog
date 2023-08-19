"use client";
import { useRouter } from "next/navigation";

export default function PrimaryButton({ type, children, navigateTo, margin }) {
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
      className={`w-full py-3 text-button bg-cc-orange-200 rounded-md ${margin}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

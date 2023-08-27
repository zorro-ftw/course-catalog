"use client";
import Image from "next/image";
import Avatar from "../_components/Avatar/Avatar";
import Brand from "../_components/Brand/Brand";
import NavList from "../_components/NavList/NavList";
import { useState } from "react";

export default function SidebarLayout({ children }) {
  const [isMinified, setMinify] = useState(false);
  const [arrowDimension, setArrowDimension] = useState(18);

  function handleMinify() {
    setMinify(!isMinified);
  }

  function handleArrowHover() {
    setArrowDimension(25);
  }

  return (
    <main className="flex flex-row h-screen min-h-max w-full overflow-x-hidden">
      <section
        className={`flex flex-col w-full max-w-[270px] h-full  items-center py-5 bg-cc-pink-300 ${
          isMinified ? "-translate-x-full" : "translate-x-0"
        } transition-transform`}
      >
        <Brand variant="dashboard" />
        <div className="mt-14 mb-20 flex flex-col items-center">
          <Avatar imageURL="/assets/avatar.png" />
          <span className="cc-text-17-bold mt-5">John Doe</span>
          <span className=" font-montserrat text-sm text-cc-orange-200 font-medium mt-2.5">
            Admin
          </span>
        </div>
        <NavList isMinified={isMinified} />
      </section>
      <section className="w-full">
        <div className=" w-full h-[60px] flex justify-between pl-8 pr-12">
          <Image
            src={
              isMinified
                ? "/assets/icons/arrow-left.svg"
                : "/assets/icons/arrow-right.svg"
            }
            width="18"
            height="18"
            alt={isMinified ? "arrow-right" : "arrow-left"}
            onClick={handleMinify}
            className="cursor-pointer"
          />

          <Image
            src="/assets/icons/bell.svg"
            width={arrowDimension}
            height={arrowDimension}
            alt="bell"
          />
        </div>
        {children}
      </section>
    </main>
  );
}

"use client";
import Image from "next/image";
import Avatar from "../_components/Avatar/Avatar";
import Brand from "../_components/Brand/Brand";
import NavList from "../_components/NavList/NavList";
import { useEffect, useState } from "react";

export default function SidebarLayout({ children }) {
  const [isMinified, setMinify] = useState(false);
  const [arrowDimension, setArrowDimension] = useState(20);

  // Effect to update minification based on window width
  useEffect(() => {
    function handleResize() {
      // Update minification based on window width
      setMinify(window.innerWidth < 1024);
    }

    // Set initial minification state
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleMinify() {
    setMinify(!isMinified);
  }

  function handleArrowHover(e) {
    if (e.type === "mouseenter") {
      setArrowDimension(24);
    } else {
      setArrowDimension(20);
    }
  }
  return (
    <main className="flex flex-row py-0 h-fit min-h-screen w-full overflow-x-hidden">
      {/* Sidebar */}
      <section
        className={`flex flex-col w-full max-w-[270px] min-w-[270px] items-center py-5 bg-cc-pink-300 ${
          isMinified ? "-ml-[270px]" : "ml-0"
        } transition-all`}
      >
        <div
          className={`relative -right-40 ${
            arrowDimension === 20 ? "top-4  -mt-5" : "top-5 -mt-6"
          }`}
        >
          <Image
            src={
              isMinified
                ? "/assets/icons/arrow-right.svg"
                : "/assets/icons/arrow-left.svg"
            }
            width={arrowDimension}
            height={arrowDimension}
            alt={isMinified ? "arrow-right" : "arrow-left"}
            onClick={toggleMinify}
            onMouseEnter={handleArrowHover}
            onMouseLeave={handleArrowHover}
            className="cursor-pointer"
          />
        </div>
        <Brand variant="dashboard" />
        <div className=" mt-6 mb-10 lg:mt-14 lg:mb-20 flex flex-col items-center">
          <Avatar
            imageURL="/assets/avatar.png"
            additionalClasses="w-32  h-32 rounded-full"
          />
          <span className="cc-text-17-bold mt-5">John Doe</span>
          <span className=" font-montserrat text-sm text-cc-orange-200 font-medium mt-2.5">
            Admin
          </span>
        </div>
        <NavList />
      </section>

      {/* Main view */}
      <section className="w-full">
        <div className=" w-full h-[60px] flex justify-end pl-8 pr-12">
          <Image
            src="/assets/icons/bell.svg"
            width={17}
            height={20}
            alt="bell"
            className="cursor-pointer"
          />
        </div>
        {children}
      </section>
    </main>
  );
}

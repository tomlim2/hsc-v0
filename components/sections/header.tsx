"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import HscLogo from "../svg/hsc-logo";

export default function Header() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted

  useEffect(() => {
    setIsMounted(true); // Mark the component as mounted

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollPosition(currentScrollPos);

      if (currentScrollPos > prevScrollPos) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  if (!isMounted) {
    // Avoid rendering scroll-dependent styles until the component is mounted
    return null;
  }

  return (
    <>
      {/* Header/Navigation */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrollDirection === "down" && scrollPosition > 0
            ? "-translate-y-full"
            : "translate-y-0"
        } ${
          scrollDirection === "up" && scrollPosition > 0
            ? "bg-hsc-white text-[#003366] shadow-md"
            : "bg-transparent text-hsc-white"
        }`}
      >
		<div className="container flex items-center justify-between h-[100px] px-4 mx-auto">
		  {/* Home Button */}
		  <div className="flex items-center">
			<Link href="/" className="text-lg font-medium text-hsc-white hover:text-[#003366] transition-colors">
			  Home
			</Link>
		  </div>

		  {/* Logo */}
		  <div className="flex items-center justify-center">
			<Link href="/" className="text-xl font-bold">
			  <HscLogo
			width={200}
			height={54}
			color={scrollDirection === "up" && scrollPosition > 0 ? "#003366" : "#fffff0"}
			  />
			</Link>
		  </div>

		  {/* Get Started Button */}
		  <div className="flex items-center">
			<Link
			  href="/get-started"
			  className="px-4 py-2 text-lg font-medium text-hsc-white bg-[#003366] rounded hover:bg-[#002244] transition-colors"
			>
			  Get Started
			</Link>
		  </div>
		</div>
      </header>

      {/* Add a spacer to prevent content from being hidden under the fixed header */}
      <div className="h-0"></div>
    </>
  );
}

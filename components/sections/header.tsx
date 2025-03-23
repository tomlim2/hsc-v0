"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up")
  const [scrollPosition, setScrollPosition] = useState(0)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isMounted, setIsMounted] = useState(false) // Track if the component is mounted

  useEffect(() => {
    setIsMounted(true) // Mark the component as mounted

    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setScrollPosition(currentScrollPos)

      if (currentScrollPos > prevScrollPos) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  if (!isMounted) {
    // Avoid rendering scroll-dependent styles until the component is mounted
    return null
  }

  return (
    <>
      {/* Header/Navigation */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrollDirection === "down" && scrollPosition > 100 ? "-translate-y-full" : "translate-y-0"
        } ${
          scrollDirection === "up" && scrollPosition > 100
            ? "bg-white text-[#0a3b25] shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <div className="flex items-center justify-center w-full">
            <Link href="/" className="text-xl font-bold">
              IVY COACH
            </Link>
          </div>
        </div>
      </header>

      {/* Add a spacer to prevent content from being hidden under the fixed header */}
      <div className="h-0"></div>
    </>
  )
}


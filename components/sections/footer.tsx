"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-end justify-between md:flex-row mb-4">
          <div className="mb-4 md:mb-0">
            <div className="eb-garamond-serif-regular text-[#003366] font-bold text-8xl">
              HSC Consultant
            </div>
            {/* <Link
              href="/"
              className="eb-garamond-serif-regular text-[#003366] font-bold text-8xl"
            ></Link> */}
          </div>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-[#ffd700]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-[#ffd700]"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-[#ffd700]"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-4 text-sm font-regular">
          © {new Date().getFullYear()} HSC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

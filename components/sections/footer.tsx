"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-[#003366]">
              HSC
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-sm text-gray-600 hover:text-[#003366]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-[#003366]">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-[#003366]">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-4 text-sm text-center text-gray-600">
          © {new Date().getFullYear()} HSC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}


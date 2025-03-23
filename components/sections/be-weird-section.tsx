"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BeWeirdSection() {
  return (
    <section className="relative h-[400px]">
      <Image
        src="/placeholder.svg?height=400&width=1200"
        alt="Student on campus"
        fill
        className="object-cover brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-hsc-white">
          <h2 className="text-4xl font-bold uppercase">
            Come Be Weird
            <br />
            With Us
          </h2>
          <Button className="mt-6 bg-hsc-white text-[#003366] hover:bg-gray-100">Get Started</Button>
        </div>
      </div>
    </section>
  )
}


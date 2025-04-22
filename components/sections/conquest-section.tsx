"use client"

import { Button } from "@/components/ui/button"

export default function ConquestSection() {
  return (
    <section className="py-32 bg-[#003366] text-hsc-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-8xl mb-4  font-hsc-bold uppercase">Toward<br />The Conquest<br />Of Admission</h2>
        <p className="text-2xl mb-4 max-w-2xl mx-auto mt-4 eb-garamond-serif-regular">
          Let our team of experts guide you through the college admissions process and help you achieve your dreams.
        </p>
        <Button className="mt-6 bg-hsc-yellow font-hsc-bold text-[#003366] hover:bg-gray-100 text-3xl py-8 px-16">Contact Us</Button>
      </div>
    </section>
  )
}


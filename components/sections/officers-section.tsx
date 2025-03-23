"use client"

import Image from "next/image"

export default function OfficersSection() {
  const officers = [
    { name: "Joe Sharma", title: "Former Admissions Officer" },
    { name: "Chad Ford", title: "Former Admissions Officer" },
    { name: "Aisha Olayan", title: "Former Admissions Officer" },
    { name: "Michael Lee", title: "Former Admissions Officer" },
    { name: "Bethany Hewitt", title: "Former Admissions Officer" },
    { name: "Ben Schwartz", title: "Former Admissions Officer" },
    { name: "Jasmine Chen", title: "Former Admissions Officer" },
    { name: "Lauren Bennett", title: "Former Admissions Officer" },
    { name: "Carlos Rodriguez", title: "Former Admissions Officer" },
  ]

  return (
    <section className="py-16 bg-hsc-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#003366] uppercase">
          Ivy Coach's Former Admissions Officers
        </h2>

        <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 md:grid-cols-3">
          {officers.map((person, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-32 h-32 overflow-hidden rounded-full">
                <Image src="/placeholder.svg?height=128&width=128" alt={person.name} fill className="object-cover" />
              </div>
              <h3 className="mt-4 font-bold text-[#003366]">{person.name}</h3>
              <p className="text-sm text-gray-600">{person.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


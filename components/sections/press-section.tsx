"use client"

import Image from "next/image"

export default function PressSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h3 className="text-xl font-medium text-center text-gray-600">In The Press</h3>

        <div className="flex flex-wrap items-center justify-center gap-8 mt-6">
          <Image src="/placeholder.svg?height=30&width=120" alt="New York Times" width={120} height={30} />
          <Image src="/placeholder.svg?height=30&width=120" alt="Washington Post" width={120} height={30} />
          <Image src="/placeholder.svg?height=30&width=80" alt="CNN" width={80} height={30} />
          <Image src="/placeholder.svg?height=30&width=80" alt="CNBC" width={80} height={30} />
          <Image src="/placeholder.svg?height=30&width=80" alt="Fox" width={80} height={30} />
        </div>
      </div>
    </section>
  )
}


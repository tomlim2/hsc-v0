"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function BlogSection() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#003366] uppercase">The Ivy Coach Daily</h2>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
          <div className="overflow-hidden bg-hsc-white rounded-lg shadow">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Campus buildings" fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Navigating Early Decision Applications</h3>
              <p className="mt-2 text-sm text-gray-600">Tips for students considering the Early Decision route</p>
              <Button variant="link" className="mt-2 p-0 text-[#003366]">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden bg-hsc-white rounded-lg shadow">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Students studying"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">How to Stand Out in Your Application</h3>
              <p className="mt-2 text-sm text-gray-600">Strategies to make your application unique</p>
              <Button variant="link" className="mt-2 p-0 text-[#003366]">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden bg-hsc-white rounded-lg shadow">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="University building"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Ivy League Acceptance Rates Drop</h3>
              <p className="mt-2 text-sm text-gray-600">Analysis of this year's admissions statistics</p>
              <Button variant="link" className="mt-2 p-0 text-[#003366]">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


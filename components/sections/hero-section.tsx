import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-[800px]">
      <Image
        src="/placeholder.svg?height=400&width=1200"
        alt="University campus aerial view"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="absolute inset-0 flex items-center">
        <div className="container px-4 mx-auto">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-white">Ivy Coach Helps Students Get Accepted</h1>
            <p className="mt-4 text-xl text-white">We've helped thousands of students get into their dream schools</p>
            <Button className="mt-6 bg-white text-[#0a3b25] hover:bg-gray-100">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}


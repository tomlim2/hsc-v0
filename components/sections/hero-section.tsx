import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative"
      style={{ height: "clamp(500px, 80vw, 940px)" }}
    >
      <Image
        src="/placeholder.svg?height=400&width=1200"
        alt="University campus aerial view"
        fill
        className="object-cover brightness-75"
        priority
      />
	<div
	  className="absolute right-0 bottom-0 p-0"
	  style={{ padding: "0 60px 120px 0" }}
	>
	  <div className="container px-4 mx-auto">
		<blockquote>
		<div className="max-w-xl">
		  <h1 className="text-4xl font-bold text-white">
			Ivy Coach Helps Students Get Accepted
		  </h1>
		  <cite className="mt-4 text-xl text-white">
			We've helped thousands of students get into their dream schools
		  </cite>
		</div>
		</blockquote>
	  </div>
	</div>
    </section>
  );
}

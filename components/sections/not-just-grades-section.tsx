"use client";

import Image from "next/image";

export default function NotJustGradesSection() {
  return (
    <section className="py-40 bg-[#003366] text-hsc-white">
      <div className="container px-4 mx-auto grid md:grid-cols-2 items-center gap-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="uppercase font-hsc-bold"
            style={{
              fontSize:
                "clamp(calc((65 / var(--base-font-size)) * 1rem), 22vw, calc((130 / var(--base-font-size)) * .65rem))",
              lineHeight: "0.9",
            }}
          >
            Beyond Grades, Beyond Scores—
            <br />
            Your Future
            <br />
            Awaits.
          </h2>
          <p
            className="mt-4 eb-garamond-serif-regular"
            style={{
              marginTop: "1.5em",
              fontSize:
                "clamp(calc((16 / var(--base-font-size))* 1rem), 5vw, calc((24 / var(--base-font-size))* 1rem))",
              lineHeight: "1.3",
            }}
          >
			It's about crafting authentic and
            <br />
            compelling stories in essays and
            <br />
            activities that highlight a unique angle,
            <br />
            rather than a broad, well-rounded profile.
          </p>
        </div>
        <div className="relative overflow-hidden bg-gray-200 rounded-lg aspect-square">
          <Image
            src="/image-idea-002.jpg"
            alt={`Student`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

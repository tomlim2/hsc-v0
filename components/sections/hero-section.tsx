"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative"
      style={{ height: "clamp(500px, 80vw, 940px)" }}
    >
      <Image
        src="/image-university-003.webp"
        alt="University campus aerial view"
        fill
        className="object-cover"
        priority
      />
      <div
        className="absolute right-0 bottom-0 p-0"
        style={{ padding: "0 60px 120px 0" }}
      >
        <div className="container px-4 mx-auto">
          <blockquote
            style={{
              paddingTop: "15px",
              maxWidth: "660px",
              borderTop: "5px solid #fffff0",
            }}
          >
            <div className="max-w-xl">
              <h1
                className="text-hsc-white font-bold eb-garamond-serif-regular"
                style={{
                  marginBottom: ".5em",
                  textIndent: "-.44em",
                  fontSize:
                    "clamp(calc((30 / 16) * 1rem), 6vw, calc((60 / 16) * 1rem))",
                  lineHeight: "1",
				  color: "#fffff0",
                }}
              >
                <span className="quote-mark" style={{ marginRight: ".14em" }}>
                  "
                </span>
                HSC is Highway Robbery. But They’re Good."
              </h1>
              <cite
                className="mt-4 text-xl text-hsc-white"
                style={{
                  display: "block",
                  textIndent: "-1.1em",
                  lineHeight: "1.2",
                  fontStyle: "normal",
                }}
              >
                <span className="dash" style={{ textIndent: "-1.1em" }}>
                  —
                </span>
                We've helped thousands of students get into their dream schools
              </cite>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

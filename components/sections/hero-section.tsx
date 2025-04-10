"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
	<section
		className="relative"
		style={{
			height: "clamp(500px, 80vw, 940px)",
		}}
	>
		<video
			autoPlay
			loop
			muted
			playsInline
			className="object-cover w-full h-full"
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				filter: "opacity(0.75)",
			}}
		>
			<source src="/video/footage_01.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>
		{/* <img
			src="/image-university-003.webp"
			alt="University campus aerial view"
			className="object-cover w-full h-full"
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				filter: "opacity(0.5)",
			}}
		/> */}
		<div
			className="absolute right-16 bottom-0 p-0"
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
							className="text-hsc-white eb-garamond-serif-regular"
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
							Empowering Global Success Through Distinctive Empowering Global
							Success Through Distinctive Education"
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
							&nbsp;We've helped thousands of students get into their dream
							schools
						</cite>
					</div>
				</blockquote>
			</div>
		</div>
	</section>
  );
}

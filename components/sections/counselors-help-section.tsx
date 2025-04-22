"use client";

import { ChevronRight } from "lucide-react";

export default function CounselorsHelpSection() {
  return (
    <section className="py-32 bg-hsc-white">
      <div className="container px-4 mx-auto">
        <h2
          className="text-[calc((80/16)*.75rem)] font-hsc-bold text-center text-[#003366] uppercase"
          style={{ letterSpacing: "-.012em", lineHeight: ".85em" }}
        >
          HSC's College Counselors<br />Help Students:
        </h2>

		<div className="max-w-3xl mx-auto mt-8 space-y-4 eb-garamond-serif-regular text-[24px] pb-6">
		  <div className="flex items-start border-t-2 border-[#003366] pt-6">
			<p className="ml-2">
			  Craft compelling personal statements that stand out from the crowd
			</p>
		  </div>
		  <div className="flex items-start border-t-2 border-[#003366] pt-6">
			<p className="ml-2">
			  Develop a strategic approach to college applications
			</p>
		  </div>
		  <div className="flex items-start border-t-2 border-[#003366] pt-6">
			<p className="ml-2">
			  Select extracurricular activities that showcase their passions
			</p>
		  </div>
		  <div className="flex items-start border-t-2 border-[#003366] pt-6">
			<p className="ml-2">
			  Demonstrate interest in their target schools effectively
			</p>
		  </div>
		  <div className="flex items-start border-t-2 border-[#003366] pt-6">
			<p className="ml-2">
			  Navigate the complex world of financial aid and scholarships
			</p>
		  </div>
		  <div className="flex items-start border-t-2 border-[#003366] pt-6">
			<p className="ml-2">
			  Prepare for alumni interviews with confidence
			</p>
		  </div>
		  <div className="flex items-start border-t-2 border-b-2 border-[#003366] pt-6 pb-6">
			<p className="ml-2">
			  Make informed decisions about Early Decision vs. Regular Decision
			</p>
		  </div>
		</div>
      </div>
    </section>
  );
}

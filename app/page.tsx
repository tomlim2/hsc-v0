import Header from "@/components/sections/header"
import HeroSection from "@/components/sections/hero-section"
import TrackRecordSection from "@/components/sections/track-record-section"
import BlogSection from "@/components/sections/blog-section"
import NotJustGradesSection from "@/components/sections/not-just-grades-section"
import CounselorsHelpSection from "@/components/sections/counselors-help-section"
import BeWeirdSection from "@/components/sections/be-weird-section"
import PressSection from "@/components/sections/press-section"
import OfficersSection from "@/components/sections/officers-section"
import ConquestSection from "@/components/sections/conquest-section"
import Footer from "@/components/sections/footer"

export default function Home() {
  return (
	<div className="flex flex-col min-h-screen">
	  <Header />
	  <HeroSection />
	  {/* <TrackRecordSection /> */}
	  {/* <BlogSection /> */}
	  <NotJustGradesSection />
	  <CounselorsHelpSection />
	  {/* <BeWeirdSection /> */}
	  {/* <PressSection /> */}
	  {/* <OfficersSection /> */}
	  <ConquestSection />
	  <Footer />
	</div>
  )
}


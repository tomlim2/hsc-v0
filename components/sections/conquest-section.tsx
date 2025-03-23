import { Button } from "@/components/ui/button"

export default function ConquestSection() {
  return (
    <section className="py-16 bg-[#0a3b25] text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold uppercase">Toward The Conquest Of Admission</h2>
        <p className="max-w-2xl mx-auto mt-4">
          Let our team of experts guide you through the college admissions process and help you achieve your dreams.
        </p>
        <Button className="mt-6 bg-white text-[#0a3b25] hover:bg-gray-100">Contact Us</Button>
      </div>
    </section>
  )
}


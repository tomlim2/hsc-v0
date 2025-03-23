import Image from "next/image"

export default function NotJustGradesSection() {
  return (
    <section className="py-16 bg-[#0a3b25] text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold uppercase">It's Not Just About Grades & Scores</h2>
          <p className="mt-4">
            Our counselors help students craft compelling narratives that showcase their unique qualities and
            experiences. We focus on the whole application, not just the numbers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-12 md:grid-cols-4 lg:grid-cols-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="relative overflow-hidden bg-gray-200 rounded-lg aspect-square">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt={`Student ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


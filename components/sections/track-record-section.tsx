"use client"

export default function TrackRecordSection() {
  return (
    <section className="py-16 bg-hsc-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#003366] uppercase">Ivy Coach's College Admissions Track Record</h2>
        <p className="mt-4 text-gray-600">
          Percent of Ivy Coach students accepted into top universities over the last 5 application cycles
        </p>

        <div className="grid grid-cols-2 gap-8 mt-12 md:grid-cols-4">
          <div className="p-6 text-center">
            <div className="text-5xl font-bold text-[#003366]">
              90<span className="text-2xl">%</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">Harvard University</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-5xl font-bold text-[#003366]">
              78<span className="text-2xl">%</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">Princeton University</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-5xl font-bold text-[#003366]">
              67<span className="text-2xl">%</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">Yale University</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-5xl font-bold text-[#003366]">
              79<span className="text-2xl">%</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">Columbia University</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-5xl font-bold text-[#003366]">
              91<span className="text-2xl">%</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">Brown University</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-5xl font-bold text-[#003366]">
              79<span className="text-2xl">%</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">Dartmouth College</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-5xl font-bold text-[#003366]">
              88<span className="text-2xl">%</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">University of Pennsylvania</div>
          </div>
          <div className="p-6 text-center">
            <div className="text-5xl font-bold text-[#003366]">
              71<span className="text-2xl">%</span>
            </div>
            <div className="mt-2 text-sm text-gray-600">Cornell University</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
          <div className="p-6 border rounded-lg">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[#003366]">
                2<span className="text-xl">years</span>
              </div>
              <div className="mt-2 text-sm text-gray-600 max-w-xs">
                Average time Ivy Coach students work with us before applying to college
              </div>
            </div>
          </div>
          <div className="p-6 border rounded-lg">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[#003366]">
                2<span className="text-xl">hours</span>
              </div>
              <div className="mt-2 text-sm text-gray-600 max-w-xs">
                Average time spent on each application essay with our counselors
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2">
          <div className="p-6 border rounded-lg">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[#003366]">
                8<span className="text-xl">+</span>
              </div>
              <div className="mt-2 text-sm text-gray-600 max-w-xs">
                Average number of schools our students apply to with our guidance
              </div>
            </div>
          </div>
          <div className="p-6 border rounded-lg">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[#003366]">
                8<span className="text-xl">+</span>
              </div>
              <div className="mt-2 text-sm text-gray-600 max-w-xs">
                Average number of acceptances our students receive
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


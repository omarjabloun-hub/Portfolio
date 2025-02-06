import { GraduationCap, Book } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Software Engineering",
      school: "National Institute of Applied Science and Technology (INSAT)",
      period: "Sep. 2020 - Oct. 2025 (Expected)",
      type: "degree",
    },
  ]

  const courses = [
    "Data Structures & Algorithms",
    "OOP",
    "Design Patterns",
    "Distributed Systems",
    "AI/ML",
    "Deep Learning",
    "DevOps",
    "Web Frameworks (.NET/Angular/NestJS)",
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <div key={index} className="mb-6 flex">
              <div className="mr-4">
                <GraduationCap className="text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <p className="text-gray-600">
                  {item.school} | {item.period}
                </p>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Book className="text-blue-500 mr-2" />
              Relevant Coursework
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {courses.map((course, index) => (
                <li key={index} className="text-gray-700">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


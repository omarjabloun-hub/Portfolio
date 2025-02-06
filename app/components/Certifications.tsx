import { Award, ExternalLink } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "Neo4j Certified Professional",
      issuer: "Neo4j",
      date: "2023",
      link: "https://graphacademy.neo4j.com/c/deb96b76-681c-47ee-984a-912e694f4b6b/",
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Certifications</h2>
        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="mb-6 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <Award className="text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
              </div>
              <p className="text-gray-600 mb-2">
                Issued by {cert.issuer} • {cert.date}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 inline-flex items-center"
              >
                View Certificate
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


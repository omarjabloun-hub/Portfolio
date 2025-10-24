import Image from "next/image"
import AnimateOnScroll from "./AnimateOnScroll"

export default function Experience() {
  const experiences = [
    {
      company: "Crewmeister GmbH",
      position: "Software Engineer Intern",
      period: "May 2025 - Expected Nov 2025",
      description:
        "Engineered event-driven microservices (subscription lifecycle, shift planning, holiday management) for 17,000+ SMBs. Implemented cloud-native services on AWS using Java, Spring Boot, and Kafka. Drove developer velocity initiatives, including a Node.js CLI cutting boilerplate by 70%.",
      stack: "Java, Spring Boot, Kafka, AWS, GitLab CI/CD, Cucumber, Kubernetes",
      logo: "https://orfd6t6l8icmkl5l.public.blob.vercel-storage.com/crewmeister_logo.jpg",
    },
    {
      company: "AS Solutions",
      position: "Software Engineer - Working Student",
      period: "Jan 2024 - Nov 2024",
      description:
        "Led backend development for 5+ insurance platforms (premium calculations, payment processing), increasing client subscriptions by 60%. Engineered a custom pricing engine to cut product development time by 80%.",
      stack: "Express, Prisma, PostgreSQL, tRPC, Docker, Azure, Agile/Scrum, Azure DevOps",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS_Logo_2.jpg-fCmc540S7HsFHy1VrVzJ0KS3mkSFpa.jpeg",
    },
    {
      company: "GoMyCode",
      position: "Software Engineer - Working Student",
      period: "Nov 2022 - Nov 2023",
      description:
        "Spearheaded a Talent Acquisition platform, reducing hiring time by 30%. Integrated automated assessments, enhancing processing efficiency by 50%. Managed and optimized the Azure-based backend for high performance.",
      stack: ".NET 6, C#, Neo4j, Azure DevOps, Clean Architecture, Agile/Scrum, Jira",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_GMC.jpg-e3sNbf98LKeq8qw2UtnuljFp3aZp7l.jpeg",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimateOnScroll animation="slideUp">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Work Experience</h2>
        </AnimateOnScroll>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <AnimateOnScroll key={index} animation="slideRight" delay={index * 0.2}>
              <div className="mb-6 flex items-start bg-gray-50 rounded-lg p-6 shadow-sm">
                <Image
                  src={exp.logo || "/placeholder.svg"}
                  alt={`${exp.company} logo`}
                  width={64}
                  height={64}
                  className="mr-4 rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                  <p className="text-gray-600">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                  <p className="mt-1 text-sm text-gray-500">Stack: {exp.stack}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
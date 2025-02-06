import Image from "next/image"
import AnimateOnScroll from "./AnimateOnScroll"

export default function Experience() {
  const experiences = [
    {
      company: "Palete AI",
      position: "Software Engineer (Part-Time)",
      period: "Dec. 2024 - Present",
      description:
        "Developed microservice-based architecture for real-time customer interactions, built an agent-based system with LLMs, and implemented CI/CD pipelines.",
      stack: "Next.js, Nest.js, FastAPI, LLMs, Milvus/Zilliz, AWS, Docker, GitHub Actions",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1kzvXHFzgpyO0lIdAjNAUhIZ8QCpOK.png",
    },
    {
      company: "AS Solutions R&D",
      position: "Software Engineer (Part-Time)",
      period: "Jan. 2024 - Nov. 2024",
      description:
        "Led backend development for insurance platforms, built a pricing engine, and improved client subscriptions by 60%.",
      stack: "Express, Prisma, PostgreSQL, tRPC, Docker, Azure",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AS_Logo_2.jpg-fCmc540S7HsFHy1VrVzJ0KS3mkSFpa.jpeg",
    },
    {
      company: "GoMyCode Central Team",
      position: "Software Engineer (Part-Time)",
      period: "Nov. 2022 - Nov. 2023",
      description:
        "Spearheaded design/implementation of a Talent Acquisition platform, reducing hiring time by 30% and improving processing efficiency by 50%.",
      stack: ".NET 6, C#, Neo4j, Azure DevOps, Clean Architecture",
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


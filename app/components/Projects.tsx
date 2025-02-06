"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Social Media-Based Mental Health Disorder Detection",
    description:
      "Trained a multi-label classifier (CNN, BiLSTM) and fine-tuned BERT/RoBERTa, achieving 94% accuracy in detecting mental health disorders from Reddit data.",
    technologies: ["Python", "PyTorch", "BERT", "RoBERTa", "NLP"],
    background: "bg-gradient-to-br from-red-600 to-orange-700",
    image: "/DALLE-Project-MH.webp?height=200&width=400",
  },
  {
    title: "Distributed Big Data Processing",
    description:
      "Implemented a distributed pipeline using Apache Kafka, Airflow, Hadoop, and Spark for customer purchase analysis, enabling real-time/batch data processing with Grafana dashboards.",
    technologies: ["Apache Kafka", "Airflow", "Hadoop", "Spark", "Grafana"],
    background: "bg-gradient-to-br from-yellow-500 to-amber-700",
    image: "/DALLE-Project-BD.webp?height=200&width=400",
    link: "",
  },
  {
    title: "Neo4j OGM for .NET",
    description:
      "Developed a lightweight Object Graph Mapper for .NET to simplify interactions with Neo4j, including record mapping and CRUD operations.",
    technologies: [".NET", "Neo4j", "C#"],
    background: "bg-gradient-to-br from-cyan-500 to-blue-700",
    image: "/DALLE-Project-Neo4j.webp?height=200&width=400",
    link: "https://github.com/omarjabloun-hub/OGM_Neo4j_DOTNET",
  },
  {
    title: "Wikipedia-Based TF-IDF Search Engine",
    description:
      "Built a search engine over Wikipedia articles using FastAPI for the backend and Next.js for the frontend. Implemented TF-IDF ranking, cosine similarity, and a user-friendly UI for query processing.",
    technologies: ["FastAPI", "Next.js", "Python", "NLP"],
    background: "bg-gradient-to-br from-purple-500 to-indigo-700",
    image: "/DALLE-Project-Search.webp?height=200&width=400",
    link: "https://github.com/omarjabloun-hub/Search-Engine",
  },
  {
    title: "Loan Management Microservice Application",
    description:
      "Developed a microservice-based loan management application featuring services like Commercial Service and Client App. Utilized Kafka for inter-service communication and PostgreSQL for data persistence.",
    technologies: ["Kafka", "PostgreSQL", "Microservices", "Docker", ".NET"],
    background: "bg-gradient-to-br from-emerald-500 to-teal-700",
    image: "/DALLE-Project-MS.webp?height=200&width=400",
    link: "https://github.com/omarjabloun-hub/LoanManagement-MicroService-App",
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }, [])

  const prevProject = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextProject, 5000)
    return () => clearInterval(interval)
  }, [nextProject])

  const getProjectIndex = (offset: number) => {
    return (currentIndex + offset + projects.length) % projects.length
  }

  return (
    <section id="projects" className="min-h-screen bg-gray-900 flex flex-col justify-center py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">My Projects</h2>
        <div className="relative h-[400px] perspective">
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence initial={false}>
              {[-1, 0, 1].map((offset) => {
                const index = getProjectIndex(offset)
                return (
                  <motion.div
                    key={`${projects[index].title}-${offset}`}
                    className="absolute w-full max-w-sm"
                    initial={{
                      scale: 0.8,
                      x: `${offset * 120}%`,
                      rotateY: offset * 25,
                      opacity: 0,
                    }}
                    animate={{
                      scale: offset === 0 ? 1 : 0.8,
                      x: `${offset * 120}%`,
                      rotateY: offset * 25,
                      opacity: offset === 0 ? 1 : 0.6,
                      zIndex: offset === 0 ? 2 : 1,
                    }}
                    exit={{
                      scale: 0.8,
                      x: offset < 0 ? "120%" : "-120%",
                      rotateY: offset * 25,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  >
                    <div
                      className={`${
                        projects[index].background
                      } rounded-3xl shadow-2xl overflow-hidden transform-gpu transition-transform duration-500 h-[400px] ${
                        offset === 0 ? "hover:scale-105" : ""
                      }`}
                    >
                      <div className="relative h-48">
                        <Image
                          src={projects[index].image || "/placeholder.svg"}
                          alt={projects[index].title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="h-[calc(400px-12rem)] p-6 backdrop-blur-sm bg-black/30 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white line-clamp-1">{projects[index].title}</h3>
                          <p className="text-gray-200 mb-2 text-sm line-clamp-2">{projects[index].description}</p>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {projects[index].technologies.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-white/10 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        {projects[index].link && (
                          <a
                            href={projects[index].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-white hover:text-gray-200 transition-colors text-sm"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            View on GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prevProject}
            className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .perspective {
          perspective: 2000px;
        }
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  )
}


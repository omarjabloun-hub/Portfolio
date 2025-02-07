import { Code, Database, Cloud, Brain, Languages } from "lucide-react"
import AnimateOnScroll from "./AnimateOnScroll"

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="text-blue-500" />,
      title: "Languages & Frameworks",
      skills: [
        "C/C++",
        "Go",
        "C#",
        "Java",
        "Python",
        "JavaScript/TypeScript",
        ".NET",
        "SpringBoot",
        "Express",
        "Angular",
        "Nest.js",
        "GraphQL",
        "tRPC",
      ],
    },
    {
      icon: <Database className="text-green-500" />,
      title: "Databases",
      skills: ["PostgreSQL", "Neo4j (Certified)", "Elasticsearch", "MongoDB", "MySQL"],
    },
    {
      icon: <Brain className="text-purple-500" />,
      title: "AI/ML",
      skills: ["Deep Learning", "NLP", "BERT", "RoBERTa", "OpenAI", "LangChain"],
    },
    {
      icon: <Cloud className="text-orange-500" />,
      title: "DevOps",
      skills: ["Git", "Docker", "Kubernetes", "Azure", "AWS", "Kibana", "Grafana"],
    },
    {
      icon: <Languages className="text-red-500" />,
      title: "Languages",
      skills: ["Arabic (Native)", "English (Fluent)", "French (Fluent)"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimateOnScroll animation="slideUp">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Skills</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <AnimateOnScroll key={index} animation="scale" delay={index * 0.1}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-2 text-gray-800">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="bg-white text-gray-700 px-2 py-1 rounded-full text-sm shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}


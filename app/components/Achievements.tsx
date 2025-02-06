import Image from "next/image"
import { Award, Trophy } from "lucide-react"
import AnimateOnScroll from "./AnimateOnScroll"

export default function Achievements() {
  const achievements = [
    {
      title: "Presidential Prize",
      description: "Ranked 1st nationwide in the National Computer Science Baccalaureate exam.",
      type: "award",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pres.jpg-M58sRUlK28bjJzBG7lVODeYwSulpXR.jpeg",
    },
    {
      title: "E-Health Valley Hackathon (1st Prize)",
      description:
        "Developed a solution to optimize medicine distribution in Tunisia, potentially reducing shortages by 60%.",
      type: "competition",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hackathon-ehealth.jpg-bZ3zGVLU5nvCn4NBw0wkf2LQFsqRJ6.jpeg",
    },
    {
      title: "Upside Education Hackathon (1st Prize)",
      description: "Built a Flask app generating quizzes from course content, cutting assessment creation time by 50%.",
      type: "competition",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hackathon-gmc.jpg-MB1RCvOa77Cm7OHO3rSyyPEihjOn5I.jpeg",
    },
    {
      title: "TCPC (6th Place)",
      description:
        "Demonstrated strong problem-solving under time pressure, ranking 6th among Tunisian collegiate teams.",
      type: "competition",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TCPC.jpg-cs5xf4g3iND1M6roboDZ4q1FTFxelS.jpeg",
    },
  ]

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <AnimateOnScroll animation="slideUp">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Achievements & Awards</h2>
        </AnimateOnScroll>
        <div className="max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <AnimateOnScroll key={index} animation="slideRight" delay={index * 0.2}>
              <div className="mb-16 bg-gray-50 rounded-xl shadow-sm overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-[400px] h-[300px] relative">
                    <Image
                      src={achievement.image || "/placeholder.svg"}
                      alt={achievement.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      {achievement.type === "award" ? (
                        <Award className="text-yellow-500 mr-2 h-6 w-6" />
                      ) : (
                        <Trophy className="text-blue-500 mr-2 h-6 w-6" />
                      )}
                      <h3 className="text-2xl font-bold text-gray-800">{achievement.title}</h3>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}


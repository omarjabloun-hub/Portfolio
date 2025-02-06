import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-700 mb-4">
            I'm Omar Jabloun, a passionate Software Engineer with a strong background in full-stack development, AI/ML,
            and cloud technologies. I'm currently pursuing my Master's degree in Software Engineering at the National
            Institute of Applied Science and Technology (INSAT) in Tunis, Tunisia.
          </p>
          <p className="text-gray-700">
            With experience in developing microservice-based architectures, implementing AI-driven solutions, and
            managing cloud deployments, I strive to create efficient and scalable software solutions. I'm always eager
            to take on new challenges and contribute to innovative projects.
          </p>
        </div>
      </div>
    </section>
  )
}


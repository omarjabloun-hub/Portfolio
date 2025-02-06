import Image from "next/image"
import { Download, GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"
import AnimateOnScroll from "./AnimateOnScroll"

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="slideRight">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">Omar Jabloun</h1>
              <p className="text-xl mb-6 text-gray-300">Software Engineer</p>
              <div className="flex justify-center lg:justify-start space-x-4 mb-6">
                <a
                  href="https://github.com/omarjabloun-hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <GitHub className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/omar-jabloun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:omar.jabloun1@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/Omar-Jabloun-Resume.pdf`}
                download
                className="inline-flex items-center px-6 py-3 bg-white text-gray-800 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scale">
            <div className="flex flex-col items-center lg:items-end">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 mb-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MyPhoto.jpg-JjM5fUcXcFNle1sJLT4K8CWpJ0nv6N.jpeg"
                  alt="Omar Jabloun"
                  fill
                  className="rounded-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll animation="slideUp" delay={0.3}>
          <div className="mt-12 bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">About Me</h2>
            <p className="text-gray-700 mb-4">
              I'm a passionate Software Engineer with a strong background in full-stack development, AI/ML, and cloud
              technologies. Currently pursuing my Master's degree in Software Engineering at the National Institute of
              Applied Science and Technology (INSAT) in Tunis, Tunisia.
            </p>
            <p className="text-gray-700">
              With experience in developing microservice-based architectures, implementing AI-driven solutions, and
              managing cloud deployments, I strive to create efficient and scalable software solutions. I'm always eager
              to take on new challenges and contribute to innovative projects.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}


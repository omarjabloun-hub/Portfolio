import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-md mx-auto">
          <div className="mb-4 flex items-center">
            <Mail className="mr-4 text-blue-500" />
            <a href="mailto:omar.jabloun1@gmail.com" className="text-gray-700 hover:text-blue-500">
              omar.jabloun1@gmail.com
            </a>
          </div>
          <div className="mb-4 flex items-center">
            <Linkedin className="mr-4 text-blue-500" />
            <a
              href="https://www.linkedin.com/in/omar-jabloun/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500"
            >
              LinkedIn: Omar Jabloun
            </a>
          </div>
          <div className="flex items-center">
            <Github className="mr-4 text-blue-500" />
            <a
              href="https://github.com/omarjabloun-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500"
            >
              GitHub: omarjabloun-hub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


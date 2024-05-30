import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <section
      className="snap-start bg-accent-white *:text-on-primary py-12 xl:py-0"
      id="contact-section"
    >
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen gap-y-16">
        <span className="section-title">Contact Me</span>
        <div className="text-center">
          <span className="text-xl xl:text-2xl text-center font-semibold">
            Looking forward to the possibility of collaborating!
          </span>
          <span className="text-2xl">☺️</span>
        </div>
        <img
          className="h-48 rounded-full"
          src="images/portrait.jpeg"
          alt="Risky Asty Andini"
        />
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/risky-asty-andini-22a495157"
            target="_blank"
            className="animate-bounce"
          >
            <FaLinkedin size={48} className="hover:text-blue-600" />
          </a>
          <a
            href="mailto:riskyastyandini@gmail.com?subject=Hello%20Andini"
            className="animate-bounce"
          >
            <SiGmail size={48} className="hover:text-red-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

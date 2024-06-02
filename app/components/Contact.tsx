import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <section
      className="snap-start flex flex-col items-center justify-center bg-accent-white *:text-on-primary py-12 xl:py-0 min-h-screen"
      id="contact-section"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-16">
        <div className="text-center text-lg lg:text-2xl xl:text-4xl">
          <span className="font-semibold">
            Looking forward to the possibility of collaborating!
          </span>
          <span>☺️</span>
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

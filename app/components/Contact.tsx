import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <section
      className="snap-start flex flex-col items-center justify-center min-h-screen gap-y-16 bg-secondary/40 *:text-primary"
      id="contact-section"
    >
      <span className="text-4xl font-semibold">Contact Me</span>
      <div>
        <span className="text-2xl font-semibold">
          Looking forward to the possibility of collaborating!
        </span>
        <span className="text-2xl">☺️</span>
      </div>
      <div className="flex gap-8">
        <a
          href="https://www.linkedin.com/in/risky-asty-andini-22a495157"
          target="_blank"
        >
          <FaLinkedin size={48} className="hover:text-blue-600" />
        </a>
        <a href="mailto:riskyastyandini@gmail.com?subject=Hello%20Andini">
          <SiGmail size={48} className="hover:text-red-400" />
        </a>
      </div>
    </section>
  );
}

export default function NavigationBar() {
  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <header className="fixed bg-accent-yellow/70 top-0 px-8 py-4 w-full z-50">
      <nav>
        <div className="flex justify-between items-center">
          <button
            className="text-4xl font-semibold"
            onClick={() => {
              scrollToSection("hero-section");
            }}
          >
            andini
          </button>
          <div className="flex gap-x-4 items-center *:text-xs *:uppercase">
            <button
              className="hover:font-semibold"
              onClick={() => {
                scrollToSection("work-section");
              }}
            >
              work experience
            </button>
            <button
              className="hover:font-semibold"
              onClick={() => {
                scrollToSection("journey-section");
              }}
            >
              journey
            </button>
            <button
              className="hover:font-semibold"
              onClick={() => {
                scrollToSection("contact-section");
              }}
            >
              contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

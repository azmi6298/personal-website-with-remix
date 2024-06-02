export function useScrollToSection() {
  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return { scrollToSection };
}

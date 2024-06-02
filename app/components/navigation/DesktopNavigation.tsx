import { NAVBAR_MENU } from "utils/constant/navbarMenu";
import { useScrollToSection } from "~/hooks/useScrollToSection";

export default function DesktopNavigation() {
  const { scrollToSection } = useScrollToSection();

  return (
    <header className="hidden xl:block fixed bg-accent-yellow/70 top-0 px-8 py-4 w-full z-50">
      <nav>
        <div className="flex justify-center xl:justify-between items-center">
          <button
            className="text-4xl font-semibold"
            onClick={() => {
              scrollToSection("hero-section");
            }}
          >
            andini
          </button>
          <div className="flex gap-x-4 items-center *:text-xs *:uppercase">
            {NAVBAR_MENU.map((menu) => (
              <button
                key={menu.id}
                className="hover:font-semibold"
                onClick={() => {
                  scrollToSection(menu.id);
                }}
              >
                {menu.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

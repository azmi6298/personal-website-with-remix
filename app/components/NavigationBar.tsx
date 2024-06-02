import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { MdMenuBook } from "react-icons/md";

export default function NavigationBar() {
  const [openMobileMenus, setOpenMobileMenus] = useState<boolean>();
  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  }

  const mobileMenusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenusRef.current &&
        !mobileMenusRef.current.contains(event.target as Node)
      ) {
        setOpenMobileMenus(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
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
              <button
                className="hover:font-semibold"
                onClick={() => {
                  scrollToSection("work-section");
                }}
              >
                experience
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

      <button
        className="block xl:hidden fixed bottom-8 right-6 bg-accent-yellow rounded-full shadow-md p-2"
        onClick={() => setOpenMobileMenus(!openMobileMenus)}
      >
        <MdMenuBook size={28} />
      </button>

      <div
        ref={mobileMenusRef}
        className={clsx([
          openMobileMenus ? "flex flex-col" : "hidden",
          "gap-y-4 xl:hidden fixed bottom-24 right-6 bg-accent-yellow p-4 shadow-md rounded-xl z-50",
        ])}
      >
        <button
          className="hover:font-semibold"
          onClick={() => {
            scrollToSection("hero-section");
          }}
        >
          home
        </button>
        <button
          className="hover:font-semibold"
          onClick={() => {
            scrollToSection("work-section");
          }}
        >
          experience
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
    </>
  );
}

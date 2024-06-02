import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { MdMenuBook } from "react-icons/md";
import { NAVBAR_MENU } from "utils/constant/navbarMenu";
import { useScrollToSection } from "~/hooks/useScrollToSection";

export default function MobileNavigation() {
  const { scrollToSection } = useScrollToSection();
  const [openMobileMenus, setOpenMobileMenus] = useState<boolean>();
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
      <button
        className="block xl:hidden fixed bottom-8 right-6 bg-accent-yellow rounded-full shadow-md p-2 z-50"
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
          onClick={() => {
            scrollToSection("hero-section");
          }}
        >
          home
        </button>
        {NAVBAR_MENU.map((menu) => (
          <button
            key={menu.id}
            onClick={() => {
              scrollToSection(menu.id);
            }}
          >
            {menu.label}
          </button>
        ))}
      </div>
    </>
  );
}

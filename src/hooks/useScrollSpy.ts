import { scrollToSectionHandler } from "../helpers/helpers";
import { useEffect, useState } from "react";

const useScrollSpy = (
  sections: NodeListOf<HTMLElement>,
  defaultSectionId: string,
  headerElement: HTMLElement | null
): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(
    defaultSectionId
  );

  const newActiveSection = sessionStorage.getItem("activeSection");

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;

      const currentSection = Array.from(sections).find((section) => {
        const headerHeight = headerElement?.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight - (headerHeight ?? 0);
        return scrollPosition < sectionTop + sectionHeight;
      });

      const newActiveSection = currentSection ? currentSection.id : null;
      setActiveSection(newActiveSection);
      sessionStorage.setItem(
        "activeSection",
        newActiveSection || defaultSectionId
      );
    };

    setActiveSection(newActiveSection ?? defaultSectionId);

    scrollToSectionHandler(handleScroll);
  }, [activeSection]);

  return activeSection;
};

export default useScrollSpy;

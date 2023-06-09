import { useEffect, useState } from "react";

const useScrollSpy = (
  sections: NodeListOf<HTMLElement>,
  defaultSectionId: string
): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(
    defaultSectionId
  );

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;

      const currentSection = Array.from(sections).find((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        return (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        );
      });

      const newActiveSection = currentSection ? currentSection.id : null;
      setActiveSection(newActiveSection);
      sessionStorage.setItem("activeSection", newActiveSection || defaultSectionId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    const newActiveSection = sessionStorage.getItem("activeSection");
    setActiveSection(newActiveSection);
  }, [activeSection]);

  return activeSection;
};

export default useScrollSpy;

import { useEffect, useState } from "react";

const useScrollSpy = (
  sections: NodeListOf<HTMLElement>,
  defaultSectionId: string
) => {
  const [activeSection, setActiveSection] = useState<string | null>(
    defaultSectionId
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const currentSection = Array.from(sections).find((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        return (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        );
      });

      setActiveSection(currentSection ? currentSection.id : null);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return activeSection;
};

export default useScrollSpy;

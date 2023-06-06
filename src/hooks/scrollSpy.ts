import { useEffect, useState } from "react";

const useActiveSection = (sections: NodeListOf<HTMLElement>) => {
    const [activeSection, setActiveSection] = useState<string | null>('');

    useEffect(() => {
      const handleScroll = () => {
        let currentSectionId = null;
  
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  
          if (isVisible) {
            currentSectionId = section.getAttribute('id');
          }
        });
  
        if (!currentSectionId && sections.length > 0) {
          currentSectionId = sections[0].getAttribute('id');
        }
  
        setActiveSection(currentSectionId);
      };
  
      handleScroll();
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [activeSection]);
  
    return activeSection;
  };
  
  export default useActiveSection;
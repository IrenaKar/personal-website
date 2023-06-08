import { ReactElement, RefObject } from "react";

export interface SectionProps {
  children: ReactElement;
  className?: string;
  id?: string;
  sectionRef?: RefObject<HTMLDivElement>;
}

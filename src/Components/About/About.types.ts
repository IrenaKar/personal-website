import { RefObject } from "react";

export interface Roles {
  company: string;
  date: string;
  role: string;
}

export interface AboutProps {
  sectionRef: RefObject<HTMLDivElement>;
}

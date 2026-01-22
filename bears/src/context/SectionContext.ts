import { createContext } from "react";
import { type Section } from "../types/types";

type SectionContextType = {
  section: Section;
  setSection: (section: Section) => void;
};

export const SectionContext = createContext<SectionContextType | undefined>(
  undefined,
);

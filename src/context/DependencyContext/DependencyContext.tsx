import { createContext } from "react";
import { DependencyContextType } from "../../models/dependency";

export const DependencyContext = createContext<DependencyContextType | null>(
  null
);

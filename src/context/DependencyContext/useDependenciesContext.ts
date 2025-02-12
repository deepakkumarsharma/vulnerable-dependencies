import { useContext } from "react";
import { DependencyContext } from "./DependencyContext";

export const useDependenciesContext = () => {
  const context = useContext(DependencyContext);
  if (context === null) {
    throw new Error(
      "Error - Cannot use useDependenciesContext outside of DependencyContext"
    );
  }
  return context;
};

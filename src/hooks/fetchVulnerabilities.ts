import { useCallback, useEffect, useState } from "react";
import { filteredDependencies } from "../utils/filteredDependencies";
import { checkDependencyVulnerability } from "../services/osvService";
import { useDependenciesContext } from "../context/DependencyContext/useDependenciesContext";
import { Vulnerability } from "../models/vulnerabilities";

export const useFetchVulnerabilities = () => {
  const [loading, setLoading] = useState(false);
  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([]);
  const { dependencies, devDependencies } = useDependenciesContext();

  const fetchVulnerabilities = useCallback(async () => {
    const allDependencies = {
      ...dependencies,
      ...devDependencies,
    };

    try {
      setLoading(true);
      const result = filteredDependencies(allDependencies);
      const vulnerabilities = await checkDependencyVulnerability({
        dependencies: result,
      });
      setVulnerabilities(vulnerabilities);
    } catch (error) {
      setLoading(false);
      setVulnerabilities([]);
      console.error("Error fetching vulnerabilities", error);
    } finally {
      setLoading(false);
    }
  }, [dependencies, devDependencies]);

  useEffect(() => {
    fetchVulnerabilities();
  }, [fetchVulnerabilities]);

  return { loading, vulnerabilities };
};

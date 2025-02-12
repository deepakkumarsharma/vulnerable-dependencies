import { useCallback, useEffect, useState } from "react";
import { useDependenciesContext } from "../../context/DependencyContext/useDependenciesContext";
import { checkDependencyVulnerability } from "../../services/osvService";
import { filteredDependencies } from "../../utils/filteredDependencies";

const Vulnerabilities = () => {
  const [vulnerabilities, setVulnerabilities] = useState([]);
  const { dependencies, devDependencies } = useDependenciesContext();

  const fetchVulnerabilities = useCallback(async () => {
    const allDependencies = {
      ...dependencies,
      ...devDependencies,
    };

    try {
      const result = filteredDependencies(allDependencies);
      const vulnerabilities = await checkDependencyVulnerability({
        dependencies: result,
      });
      setVulnerabilities(vulnerabilities);
    } catch (error) {
      console.error("Error fetching vulnerabilities", error);
    }
  }, [dependencies, devDependencies]);

  useEffect(() => {
    fetchVulnerabilities();
  }, [fetchVulnerabilities]);

  console.log({ vulnerabilities });

  return <div>Vulnerabilities</div>;
};

export default Vulnerabilities;

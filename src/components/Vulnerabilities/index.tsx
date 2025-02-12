import { useCallback, useEffect, useState } from "react";
import { useDependenciesContext } from "../../context/DependencyContext/useDependenciesContext";
import { checkDependencyVulnerability } from "../../services/osvService";
import { filteredDependencies } from "../../utils/filteredDependencies";

const Vulnerabilities = () => {
  const [loading, setLoading] = useState(false);
  const [vulnerabilities, setVulnerabilities] = useState<
    Record<string, string>
  >({});
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
      setVulnerabilities({});
      console.error("Error fetching vulnerabilities", error);
    } finally {
      setLoading(false);
    }
  }, [dependencies, devDependencies]);

  useEffect(() => {
    fetchVulnerabilities();
  }, [fetchVulnerabilities]);

  console.log({ vulnerabilities });

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="text-2xl font-bold">
          Checking for vulnerabilities...
        </div>
      </div>
    );
  }

  return <div>Vulnerabilities</div>;
};

export default Vulnerabilities;

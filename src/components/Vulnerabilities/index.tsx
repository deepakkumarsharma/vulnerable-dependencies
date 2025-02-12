import Spinner from "../Spinner";
import VulnerabilitiesList from "./vulnerabilitiesList";
import { useFetchVulnerabilities } from "../../hooks/fetchVulnerabilities";
import { useDependenciesContext } from "../../context/DependencyContext/useDependenciesContext";

const Vulnerabilities = () => {
  const { loading, vulnerabilities } = useFetchVulnerabilities();
  const { dependencies, devDependencies } = useDependenciesContext();

  if (
    Object.keys(dependencies).length === 0 &&
    Object.keys(devDependencies).length === 0
  ) {
    return (
      <div className="mt-10 text-center text-gray-900">
        Please upload a{" "}
        <span className="font-bold underline underline-offset-4">
          package.json
        </span>{" "}
        file to get started
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="flex items-center gap-6 text-2xl font-bold">
          Checking for vulnerabilities <Spinner />
        </div>
      </div>
    );
  }

  return <VulnerabilitiesList vulnerabilities={vulnerabilities} />;
};

export default Vulnerabilities;

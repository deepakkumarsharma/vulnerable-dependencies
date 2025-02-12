import VulnerabilitiesList from "./vulnerabilitiesList";
import { useFetchVulnerabilities } from "../../hooks/fetchVulnerabilities";

const Vulnerabilities = () => {
  const { loading, vulnerabilities } = useFetchVulnerabilities();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="text-2xl font-bold">
          Checking for vulnerabilities...
        </div>
      </div>
    );
  }

  console.log({ vulnerabilities });

  return <VulnerabilitiesList />;
};

export default Vulnerabilities;

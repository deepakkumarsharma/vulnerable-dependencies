import { Vulnerability } from "../../models/vulnerabilities";
import VulnerabilitiesTable from "./vulnerabilitiesTable";
type Props = {
  vulnerabilities: Vulnerability[];
};

const VulnerabilitiesList = ({ vulnerabilities }: Props) => {
  if (!vulnerabilities || vulnerabilities.length === 0) {
    return (
      <div className="mt-10 text-center font-bold text-2xl">
        No vulnerabilities found
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {vulnerabilities?.length > 0 && (
        <div className="mt-10">
          {vulnerabilities.map((vulnerability, index) => (
            <VulnerabilitiesTable
              vulnerabilities={vulnerability}
              key={`${vulnerability.vulnerabilities[index]?.id}-${index}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default VulnerabilitiesList;

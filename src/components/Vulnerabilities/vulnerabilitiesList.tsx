import { Vulnerability } from "../../models/vulnerabilities";
import VulnerabilitiesTable from "./vulnerabilitiesTable";
type Props = {
  vulnerabilities: Vulnerability[];
};

const VulnerabilitiesList = ({ vulnerabilities }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {vulnerabilities?.length > 0 ? (
        <div className="mt-10">
          {vulnerabilities.map((vulnerability, index) => (
            <VulnerabilitiesTable
              vulnerabilities={vulnerability}
              key={`${vulnerability.vulnerabilities[index]?.id}-${index}`}
            />
          ))}
        </div>
      ) : (
        <div className="capitalize">No vulnerabilities found</div>
      )}
    </div>
  );
};

export default VulnerabilitiesList;

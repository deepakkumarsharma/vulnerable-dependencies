import { Vulnerability } from "../../models/vulnerabilities";

type Props = {
  vulnerabilities: Vulnerability;
};

const VulnerabilitiesTable = ({ vulnerabilities }: Props) => {
  console.log({ vulnerabilities });

  return (
    <div className="border border-gray-200 rounded-md shadow-sm overflow-hidden mb-10">
      <table className="w-full">
        <thead className="bg-black">
          <tr className="">
            <th className="w-[260px] px-10 py-3 text-left text-xs font-medium text-white uppercase">
              Id
            </th>
            <th className="w-[100px] px-6 py-3 text-left text-xs font-medium text-white uppercase">
              Name
            </th>
            <th className="w-[100px] px-6 py-3 text-left text-xs font-medium text-white uppercase">
              Version
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase">
              Affected Versions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {vulnerabilities.vulnerabilities.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4">{item.id}</td>
              <td className="px-6 py-4">{item.affected[0].package.name}</td>
              <td className="px-6 py-4">
                {item.affected[0].package.ecosystem}
              </td>
              <td className="px-6 py-4">
                {item.affected[0].versions.join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VulnerabilitiesTable;

import { Vulnerability } from "../../models/vulnerabilities";

type Props = {
  vulnerabilities: Vulnerability;
};

const VulnerabilitiesTable = ({ vulnerabilities }: Props) => {
  console.log({ vulnerabilities });

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border border-gray-200 mb-6">
      <table className="w-full text-sm text-left rtl:text-right text-gray-950 ">
        <thead className="text-xs text-white uppercase bg-gray-600 ">
          <tr className="">
            <th scope="col" className="px-6 py-3 w-[200px]">
              Id
            </th>
            <th scope="col" className="px-6 py-3 w-[140px]">
              Name
            </th>
            <th scope="col" className="px-6 py-3 w-[140px]">
              Version
            </th>
            <th scope="col" className="px-6 py-3">
              Affected Versions
            </th>
          </tr>
        </thead>
        <tbody>
          {vulnerabilities.vulnerabilities.map((item, index) => (
            <tr key={index} className="bg-white">
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

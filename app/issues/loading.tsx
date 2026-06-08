import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IssueActions from "./IssueActions";

export default function Loading() {
  const issues = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col space-y-10">
      <table className="w-full">
        <thead>
          <tr>
            <th>Issue</th>
            <th className="hidden md:table-cell">Status</th>
            <th className="hidden md:table-cell">Created At</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((i) => (
            <tr key={i}>
              <td>
                <Skeleton />
                <div className="block md:hidden">
                  <Skeleton />
                </div>
              </td>
              <td className="hidden md:table-cell">
                <Skeleton />
              </td>
              <td className="hidden md:table-cell">
                <Skeleton />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <IssueActions />
    </div>
  );
}

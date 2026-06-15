import IssueCards from "./components/tables/IssueCards";
import LatestIssues from "./components/tables/LatestIssues";

export default async function Home() {
  return (
    <div>
      <IssueCards />
      <LatestIssues />
    </div>
  );
}

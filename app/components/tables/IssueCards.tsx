import Link from "next/link";
import Card from "../Card";
import StyledLink from "../general/StyledLink";

interface Props {
  open: string | number;
  inProg: string | number;
  closed: string | number;
}
export default async function IssueCards({ open, closed, inProg }: Props) {
  return (
    <div className="flex gap-5 flex-wrap">
      <Card
        title={<StyledLink href={`/issues?status=OPEN`} text="Open Issues" />}
        text={open}
        icon="flag-triangle-right"
      />
      <Card
        title={
          <StyledLink
            href={`/issues?status=IN_PROGRESS`}
            text="In Progress Issues"
          />
        }
        text={inProg}
        icon="clock-8"
      />
      <Card
        title={
          <StyledLink href={`/issues?status=CLOSED`} text="Closed Issues" />
        }
        text={closed}
        icon="circle-check"
      />
    </div>
  );
}

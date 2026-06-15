import Card from "../Card";

interface Props{
    open: string | number
    inProg: string | number
    closed: string | number
}
export default async function IssueCards({ open, closed, inProg }: Props) {
  return (
    <div className="flex gap-5">
      <Card title="Open Issues" text={open} icon="flag-triangle-right" />
      <Card title="In Progress Issues" text={inProg} icon="clock-8" />
      <Card title="Closed Issues" text={closed} icon="circle-check" />
    </div>
  );
}

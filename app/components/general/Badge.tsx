import { Status } from "@/app/generated/prisma/enums";

const MAP: Record<Status, { label: string; className: string }> = {
  OPEN: { label: "Open", className: "bg-red-100 text-red-700" },
  IN_PROGRESS: {
    label: "In Progress",
    className: "bg-violet-100 text-violet-700",
  },
  CLOSED: { label: "Closed", className: "bg-green-100 text-green-800" },
};

interface Props {
  status: Status;
  style?: any;
}

export default function Badge({ status, style }: Props) {
  const { label, className } = MAP[status];
  return (
    <span
      className={`px-2.5 py-1 rounded-md text-sm font-medium w-fit ${className}`}
      style={style}
    >
      {label}
    </span>
  );
}

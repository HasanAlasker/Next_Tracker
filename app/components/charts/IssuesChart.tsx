"use client";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface Props {
  open: string | number;
  inProg: string | number;
  closed: string | number;
}

export default function IssuesChart({ open, closed, inProg }: Props) {
  const data = [
    { label: "Open", value: open },
    { label: "In Progress", value: inProg },
    { label: "Closed", value: closed },
  ];

  return (
    <ResponsiveContainer
      width={"100%"}
      className={"bg-white p-5 pb-2 pl-0 rounded-xl border-outline border min-h-96"}
    >
      <BarChart data={data}>
        <XAxis dataKey="label" />
        <YAxis />
        <Bar dataKey="value" barSize={50} fill="oklch(49.1% 0.27 292.581)" />
      </BarChart>
    </ResponsiveContainer>
  );
}

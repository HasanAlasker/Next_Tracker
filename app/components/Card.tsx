import { DynamicIcon, IconName } from "lucide-react/dynamic";
import React, { ReactNode } from "react";

interface Props {
  title: string | ReactNode;
  text: string | number;
  icon?: IconName;
}
export default function Card({ title, text, icon }: Props) {
  return (
    <div className=" bg-white rounded-xl p-5 flex flex-col gap-5 flex-1 border-outline border justify-between">
      <div className="flex items-center justify-between">
        <div className="text-lg font-medium text-secText">{title}</div>
        {icon && <DynamicIcon name={icon} className="text-secText" />}
      </div>

      <h1 className="text-pri">{text}</h1>
    </div>
  );
}

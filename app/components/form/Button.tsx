"use client";

import classNames from "classnames";
import { ReactNode } from "react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface Props {
  icon?: IconName;
  title: string | ReactNode;
  onClick?: () => void;
  isPri?: boolean;
}

export default function Button({ icon, title, onClick, isPri }: Props) {
  return (
    <button
      className={classNames(
        "flex items-center p-4 space-x-2 border-3 border-pri rounded-lg font-bold text-lg transition-all hover:-translate-y-1",
        isPri
          ? "bg-pri text-white hover:bg-priHover"
          : "bg-white text-pri hover:bg-priHover hover:text-white",
      )}
      onClick={onClick}
    >
      {title}
      {icon && <DynamicIcon name={icon} />}
    </button>
  );
}

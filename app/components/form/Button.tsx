"use client";

import classNames from "classnames";
import { ReactNode } from "react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface Props {
  icon?: IconName;
  title: string | ReactNode;
  onClick?: () => void;
  isPri?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({ icon, title, onClick, isPri, type }: Props) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      type={type ?? "button"}
      className={classNames(
        "flex items-center justify-center px-5 py-3 space-x-2 border-3 border-pri rounded-lg font-bold text-md transition-all hover:-translate-y-1",
        isPri
          ? "bg-pri text-white hover:bg-priHover"
          : "bg-white text-pri hover:bg-priHover hover:text-white",
      )}
      onClick={handleClick}
    >
      {title}
      {icon && <DynamicIcon name={icon} />}
    </button>
  );
}

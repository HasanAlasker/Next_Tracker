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
  disabled?: boolean;
}

export default function Button({
  icon,
  title,
  onClick,
  isPri,
  type,
  disabled,
}: Props) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      disabled={disabled}
      type={type ?? "button"}
      className={classNames(
        "flex items-center justify-center px-5 py-3 space-x-2 border-3 border-pri rounded-lg font-bold text-md transition-all cursor-pointer",
        isPri
          ? "bg-pri text-white hover:bg-priHover hover:-translate-y-1"
          : "bg-white text-pri hover:bg-priHover hover:text-white hover:-translate-y-1",
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
      )}
      onClick={handleClick}
    >
      {title}
      {icon && <DynamicIcon name={icon} />}
    </button>
  );
}

"use client";

import classNames from "classnames";
import { ReactNode } from "react";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface Props {
  icon?: IconName;
  title: string | ReactNode;
  onClick?: () => void;
  isPri?: boolean;
  isDelete?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  full?: boolean;
  className?: string;
}

export default function Button({
  icon,
  title,
  onClick,
  isPri,
  isDelete,
  type,
  disabled,
  full,
  className,
}: Props) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      disabled={disabled}
      type={type ?? "button"}
      className={classNames(
        "flex items-center justify-center px-3 py-2 space-x-2 border-2 border-pri rounded-lg font-bold text-md transition-all cursor-pointer",
        isDelete && "bg-red-500 border-red-500 hover:bg-red-700",
        isPri
          ? "bg-pri text-white hover:bg-priHover hover:-translate-y-1"
          : "bg-white text-pri hover:bg-priHover hover:text-white hover:-translate-y-1",
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        full && "w-full",
        className ? !className : "",
      )}
      onClick={handleClick}
    >
      <p>{title}</p>
      {icon && <DynamicIcon name={icon} size={18} />}
    </button>
  );
}

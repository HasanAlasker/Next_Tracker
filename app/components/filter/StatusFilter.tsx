"use client";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  label?: string;
  name: string;
  options: Record<string, string | number>[];
  placeholder?: string;
  icon?: IconName;
}

export default function StatusFilter({
  label,
  name,
  options,
  icon,
  placeholder,
}: Props) {
  const [value, setValue] = useState("");
  const router = useRouter();

  const handelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    const query = e.target.value ? `?status=${e.target.value}` : "/issues";
    router.push(query);
  };

  const optionList = options?.map((o) => (
    <option key={o.value} value={o.value}>
      {o.label}
    </option>
  ));

  return (
    <div className="inputGroup max-w-fit">
      {label && (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      )}
      <div className={`inputField`}>
        {icon && (
          <DynamicIcon
            name={icon}
            strokeWidth={1.5}
            size={22}
            className="inputIcon"
          />
        )}
        <select
          name={name}
          value={value}
          onChange={handelChange}
          className={`input`}
        >
          <option value="" disabled>
            {placeholder ?? "Select an option"}
          </option>
          {optionList}
        </select>
      </div>
    </div>
  );
}

"use client";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("status") ?? "");
  const router = useRouter();

  const handelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams();
    setValue(e.target.value);
    if (e.target.value) params.append("status", e.target.value);
    if (searchParams.get("orderBy"))
      params.append("orderBy", searchParams.get("orderBy")!);

    const query = params.size ? `?${params.toString()}` : "/issues";
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

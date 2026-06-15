"use client";
import { pageSizes } from "@/app/constants/statusDDL";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  label?: string;
  name: string;
  placeholder: string;
  icon?: IconName;
  pageSize?: number;
}

export default function PageSizeDDL({
  label,
  name,
  icon,
  placeholder,
  pageSize,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const params = new URLSearchParams(searchParams);
    params.set("pageSize", e.target.value);
    params.set("page", "1");
    router.push("?" + params.toString());
  };

  const optionList = pageSizes?.map((o) => (
    <option key={o.value} value={o.value}>
      {o.label}
    </option>
  ));

  return (
    <div className="inputGroup md:max-w-fit">
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
          value={pageSize}
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

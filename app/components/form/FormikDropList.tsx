import { useFormikContext } from "formik";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import React from "react";

interface Props {
  label: string;
  name: string;
  options: Record<string, string | number>[];
  placeholder: string;
  icon?: IconName;
}

export default function FormikDropList({
  label,
  name,
  options,
  icon,
  placeholder,
}: Props) {
  const { values, errors, touched, setFieldValue, setFieldTouched, status } =
    useFormikContext<Record<string, string>>();

  const shouldShowErr = errors[name] && touched[name] && !values[name];

  const handelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFieldValue(name, e.target.value);
    setFieldTouched(name, true);
  };

  const optionList = options?.map((o) => (
    <option key={o.value} value={o.value}>
      {o.lable}
    </option>
  ));

  return (
    <div className="inputGroup">
      {label && (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      )}
      <div className={`inputField  ${shouldShowErr && "inputErr"}`}>
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
          value={values[name]}
          onChange={handelChange}
          onBlur={() => setFieldTouched(name, true)}
          className={`input`}
        >
          <option value="" disabled>
            {placeholder ?? "Select an option"}
          </option>
          {optionList}
        </select>
      </div>
      {shouldShowErr && <p className="error">{errors[name]}</p>}
    </div>
  );
}

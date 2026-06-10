"use client";

import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useFormikContext } from "formik";

interface Props {
  placeholder: string;
  label: string;
  name: string;
  className?: string;
}
export default function FormikMde({
  placeholder,
  label,
  name,
  className,
}: Props) {
  const { errors, touched, setFieldValue, setFieldTouched, values } =
    useFormikContext<Record<string, string>>();

  const hasErr = touched[name] && errors[name];

  const handleChange = (value: string) => {
    setFieldValue(name, value);
    setFieldTouched(name, true);
  };

  return (
    <div className="flex flex-col space-y-2">
      {label && (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      )}
      <SimpleMdeReact
        className={`input ${className ? className : ""}`}
        placeholder={placeholder}
        onChange={handleChange}
        value={values[name]}
      />
      {hasErr && <p className="error">{errors[name]}</p>}
    </div>
  );
}

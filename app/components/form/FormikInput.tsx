import { ErrorMessage, Field, useField } from "formik";
import { DynamicIcon, IconName } from "lucide-react/dynamic";

interface Props {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  icon?: IconName;
  maxHeight?: number;
  multiLine?: boolean;
}

export default function FormikInput({
  label,
  name,
  placeholder,
  icon,
  type,
  multiLine,
  maxHeight,
}: Props) {
  const [field, meta] = useField(name);
  const hasErr = meta.error && meta.touched;

  return (
    <div className="inputGroup">
      {label && (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      )}
      <div className={`inputField  ${hasErr && "inputErr"}`}>
        {icon && (
          <DynamicIcon
            name={icon}
            strokeWidth={1.5}
            size={22}
            className="inputIcon"
            style={{ alignSelf: multiLine ? "start" : "" }}
          />
        )}
        {multiLine ? (
          <textarea
            placeholder={placeholder}
            className={`input`}
            maxLength={500}
            style={{ maxHeight: maxHeight || "5rem" }}
            {...field}
          />
        ) : (
          <Field
            placeholder={placeholder}
            name={name}
            type={type ?? "text"}
            className={`input`}
          />
        )}
      </div>
      <ErrorMessage name={name} className="error" component={"p"} />
    </div>
  );
}

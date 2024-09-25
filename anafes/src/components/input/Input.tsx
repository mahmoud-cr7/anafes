import { InputFieldProps } from "../../types/Types";
import "./Input.css"
const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  label,
  required,
  defaultValue,
}) => {
  return (
    <div className="input-field">
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        defaultValue={defaultValue}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default InputField;

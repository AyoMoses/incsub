import { useState } from "react";
import SVG from "react-inlinesvg";

import styles from "./style.module.scss";

import eyeIcon from "../../assets/icons/eye-svg.svg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
}

export const Input = ({
  type = "text",
  label,
  error,
  ...props
}: InputProps) => {
  const [inputType, setInputType] = useState(() => type);

  const handleToggleType = () => {
    setInputType((type) => (type === "password" ? "text" : "password"));
  };

  return (
    <div className={styles.didLloatingLabelContent}>
      {/* wrap input and the button  in a div. 
      You'll need to adjust css that moves label up after that. The div should be positioned relative. 
      This is needed so the icon will remain stationary even with a validation error */}
      <input className={styles.didFloatingInput} type={inputType} {...props} />
      {type === "password" && (
        <button
          type="button"
          aria-label="toggle password"
          className={styles.passwordBtn}
          onClick={handleToggleType}
        >
          <SVG src={eyeIcon} width={16} height={16} />
        </button>
      )}
      <label
        className={styles.didFloatingLabel}
        data-focused={props.value !== ""}
      >
        {label}
      </label>

      {error && <p className={styles.authFormInstruction}>{error}</p>}
    </div>
  );
};

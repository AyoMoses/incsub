import { useState } from 'react';
import SVG from 'react-inlinesvg';

import styles from './input.module.scss';

import eyeIcon from '../../assets/icons/eye-svg.svg';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
}

export const Input = ({
  type = 'text',
  label,
  error,
  ...props
}: InputProps) => {
  const [inputType, setInputType] = useState(() => type);

  const handleToggleType = () => {
    setInputType((type) => (type === 'password' ? 'text' : 'password'));
  };

  return (
    <div className={styles.authInputContainer}>
      <div className={styles.authInputWrap}>
        <input
          className={styles.authInput}
          type={inputType}
          {...props}
          data-error={Boolean(error)}
        />
        {type === 'password' && (
          <button
            type='button'
            aria-label='toggle password'
            className={styles.passwordBtn}
            onClick={handleToggleType}
          >
            <SVG src={eyeIcon} width={16} height={16} />
          </button>
        )}
      </div>
      <label
        className={styles.authInputLabel}
        data-focused={props.value !== ''}
        data-error={Boolean(error)}
      >
        {label}
      </label>

      {error && <p className={styles.authFormInstruction}>{error}</p>}
    </div>
  );
};

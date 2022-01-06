import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface PropsTypes {
  className?: string;
  disabled?: boolean;
  onChange?: any;
  onInput?: any;
  value?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  size?: string;
  readonly?: boolean;
  plaintext?: boolean;
  label?: string;
}

Input.defaultProps = {
  className: '',
  disabled: false,
  onChange: () => {},
  onInput: () => {},
  value: '',
  type: 'text',
  id: '',
  size: '',
  readonly: false,
  plaintext: false,
  placeholder: '',
  label: '',
};

function Input(props: PropsTypes) {
  const {
    className,
    onChange,
    onInput,
    disabled,
    placeholder,
    type,
    value,
    id,
    size,
    readonly,
    plaintext,
    label,
  } = props;
  const inputClasses: string[] = [];
  if (plaintext) inputClasses.push('form-control-plaintext');
  inputClasses.push('form-control');
  if (className) inputClasses.push(className);
  if (size) inputClasses.push(`form-control-${size}`);

  return (
    <input
      className={inputClasses.join(' ')}
      type={type}
      aria-label={label || placeholder}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      onInput={onInput}
      defaultValue={value}
      readOnly={readonly}
      id={id}
    />
  );
}

export default React.memo(Input);

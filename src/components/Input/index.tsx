import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface PropsTypes {
  className?: string;
  disabled?: boolean;
  onChange: any;
  onInput: any;
  value?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  size?: string;
  readonly?: boolean;
  plaintext?: boolean;
  min?: number;
  max?: number;
  current?: number;
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
  min: 0,
  max: 100,
  current: 40,
} as PropsTypes;

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
    min,
    max,
    current,
  } = props;
  const inputClasses: string[] = [];
  let input = null;
  if (plaintext) inputClasses.push('form-control-plaintext');
  else if (type === 'range') {
    inputClasses.push('form-range');
  } else {
    inputClasses.push('form-control');
  }

  if (className) inputClasses.push(className);

  if (size) inputClasses.push(`form-control-${size}`);

  if (type === 'range') {
    input = (
      <input
        className={inputClasses.join(' ')}
        type={type}
        aria-label={placeholder}
        disabled={disabled}
        onChange={onChange}
        onInput={onInput}
        defaultValue={current}
        id={id}
        readOnly={readonly}
        min={min}
        max={max}
      />
    );
  } else {
    input = (
      <input
        className={inputClasses.join(' ')}
        type={type}
        aria-label={placeholder}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onInput={onInput}
        value={value}
        id={id}
        readOnly={readonly}
      />
    );
  }

  return input;
}

export default Input;

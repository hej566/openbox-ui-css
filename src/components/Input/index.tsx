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
}

Input.defaultProps = {
  className: '',
  disabled: false,
  onChange: () => {},
  onInput: () => {},
  value: '',
  placeholder: '',
  type: 'input',
} as PropsTypes;

function Input(props: PropsTypes) {
  const { className, onChange, onInput, disabled, placeholder, type, value } = props;

  return (
    <>
      {type === 'input' ? (
        <input
          className="form-control"
          type="text"
          aria-label={placeholder}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onInput={onInput}
          value={value}
        />
      ) : (
        <textarea
          className="form-control"
          aria-label={placeholder}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onInput={onInput}
          value={value}
        />
      )}
    </>
  );
}

export default Input;

import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface PropsTypes {
  className?: string;
  disabled?: boolean;
  onChange: any;
  onInput: any;
  value?: string;
  placeholder?: string;
  id?: string;
  rows?: number;
}

Textarea.defaultProps = {
  className: '',
  disabled: false,
  onChange: () => {},
  onInput: () => {},
  value: '',
  placeholder: '',
  id: '',
  rows: 3,
} as PropsTypes;

function Textarea(props: PropsTypes) {
  const { className, onChange, onInput, disabled, placeholder, rows, value, id } = props;
  const textareaClasses: string[] = ['form-control'];

  if (className) textareaClasses.push(className);

  return (
    <textarea
      className={textareaClasses.join(' ')}
      aria-label={placeholder}
      disabled={disabled}
      onChange={onChange}
      onInput={onInput}
      value={value}
      rows={rows}
      id={id}
    />
  );
}

export default Textarea;

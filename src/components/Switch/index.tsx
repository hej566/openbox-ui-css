import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface PropsTypes {
  children: any;
  className?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: any;
}

Switch.defaultProps = {
  className: '',
  children: '',
  label: '',
  checked: false,
  disabled: false,
  onChange: () => {},
} as PropsTypes;

function Switch(props: PropsTypes) {
  const { children, className, label, onChange, checked, disabled } = props;
  const radioClasses: string[] = [`form-check`, 'form-switch'];
  if (className) radioClasses.push(className);

  const uuid = uuidv4();

  return (
    <div className={radioClasses.join(' ')}>
      <input
        className="form-check-input"
        type="checkbox"
        id={uuid}
        defaultChecked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={uuid}>
        {label}
      </label>
    </div>
  );
}

export default Switch;

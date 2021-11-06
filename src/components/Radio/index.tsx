import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface PropsTypes {
  children: any;
  className?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: any;
  name?: string;
  value?: string;
}

Radio.defaultProps = {
  className: '',
  children: '',
  label: '',
  value: '',
  checked: false,
  disabled: false,
  onChange: () => {},
  name: '',
} as PropsTypes;

function Radio(props: PropsTypes) {
  const { children, className, label, onChange, checked, disabled, name, value } = props;
  const radioClasses: string[] = [`form-check`];
  if (className) radioClasses.push(className);

  const uuid = uuidv4();

  return (
    <div className={radioClasses.join(' ')}>
      <input
        className="form-check-input"
        type="radio"
        id={uuid}
        name={name}
        defaultValue={value}
        defaultChecked={checked}
        disabled={disabled}
      />
      <label className="form-check-label" htmlFor={uuid}>
        {label}
      </label>
    </div>
  );
}

export default Radio;

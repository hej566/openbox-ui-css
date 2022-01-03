import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface PropsTypes {
  children: any;
  className?: string;
  label?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (checked: boolean) => void;
}

Switch.defaultProps = {
  className: '',
  children: '',
  label: '',
  isChecked: false,
  isDisabled: false,
  onChange: undefined,
} as PropsTypes;

function Switch(props: PropsTypes) {
  const { children, className, label, onChange, isChecked, isDisabled } = props;
  const radioClasses: string[] = [`form-check`, 'form-switch'];
  const [checked, setChecked] = useState(isChecked);
  if (className) radioClasses.push(className);

  const uuid = uuidv4();

  function changeHandler(e: any) {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  }

  return (
    <div className={radioClasses.join(' ')} role="switch" aria-checked={checked}>
      <input
        className="form-check-input"
        type="checkbox"
        id={uuid}
        defaultChecked={isChecked}
        disabled={isDisabled}
        onChange={changeHandler}
      />
      <label className="form-check-label" htmlFor={uuid}>
        {label}
      </label>
    </div>
  );
}

export default Switch;

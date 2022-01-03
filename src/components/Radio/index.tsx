import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface PropsTypes {
  children: any;
  className?: string;
  label?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange: any;
  name?: string;
  value?: string;
}

Radio.defaultProps = {
  className: '',
  children: '',
  label: '',
  value: '',
  isChecked: false,
  isDisabled: false,
  onChange: () => {},
  name: '',
} as PropsTypes;

function Radio(props: PropsTypes) {
  const { children, className, label, onChange, isChecked, isDisabled, name, value } = props;
  const radioClasses: string[] = [];
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
        defaultChecked={isChecked}
        disabled={isDisabled}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={uuid}>
        {label}
      </label>
    </div>
  );
}

export default Radio;

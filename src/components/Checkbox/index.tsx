import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface PropsTypes {
  children: any;
  className?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange: any;
  indeterminate?: boolean;
}

Checkbox.defaultProps = {
  className: '',
  children: '',
  label: '',
  checked: false,
  disabled: false,
  indeterminate: false,
  onChange: () => {},
} as PropsTypes;

function Checkbox(props: PropsTypes) {
  const { children, className, label, onChange, checked, disabled, indeterminate } = props;
  const checkboxClasses: string[] = [`form-check`];
  const checkboxRef = useRef<HTMLInputElement>(null);
  if (className) checkboxClasses.push(className);

  const uuid = uuidv4();

  function setupIndeterminate() {
    const checkboxDom = checkboxRef.current;
    if (checkboxDom) {
      checkboxDom.indeterminate = true;
    }
  }

  function removeIndeterminate() {
    const checkboxDom = checkboxRef.current;
    if (checkboxDom) {
      checkboxDom.indeterminate = false;
    }
  }

  useEffect(() => {
    if (indeterminate) {
      setupIndeterminate();
    } else {
      removeIndeterminate();
    }
  }, [indeterminate]);

  return (
    <div className={checkboxClasses.join(' ')}>
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={uuid}
        checked={checked}
        disabled={disabled}
        onChange={!disabled ? onChange : () => {}}
        ref={checkboxRef}
      />
      <label className="form-check-label" htmlFor={uuid}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;

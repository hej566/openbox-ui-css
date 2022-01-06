import React, { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface PropsTypes {
  children: any;
  className?: string;
  label?: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  value?: string;
  controlled?: boolean;
  onChange?: any;
}

Checkbox.defaultProps = {
  className: '',
  children: '',
  label: '',
  isChecked: false,
  isDisabled: false,
  isIndeterminate: false,
  value: '',
  controlled: false,
  onChange: undefined,
} as PropsTypes;

function Checkbox(props: PropsTypes) {
  const {
    children,
    className,
    label,
    onChange,
    isChecked,
    isDisabled,
    isIndeterminate,
    value,
    controlled,
  } = props;
  const checkboxClasses: string[] = [];
  const checkboxRef = useRef<HTMLInputElement>(null);
  if (className) checkboxClasses.push(className);

  if (isIndeterminate) {
    setupIndeterminate();
  } else {
    removeIndeterminate();
  }

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

  function changeHandler(e: any) {
    if (onChange) {
      onChange(e.currentTarget.checked);
    }
  }

  useEffect(() => {
    if (isIndeterminate) {
      setupIndeterminate();
    } else {
      removeIndeterminate();
    }
  }, []);

  return (
    <div className={checkboxClasses.join(' ')}>
      {controlled && (
        <input
          className="form-check-input"
          type="checkbox"
          id={uuid}
          checked={isChecked}
          value={value}
          disabled={isDisabled}
          onChange={!isDisabled ? changeHandler : () => {}}
          ref={checkboxRef}
          aria-label={label}
        />
      )}

      {!controlled && (
        <input
          className="form-check-input"
          type="checkbox"
          id={uuid}
          defaultChecked={isChecked}
          value={value}
          disabled={isDisabled}
          onChange={!isDisabled ? changeHandler : () => {}}
          ref={checkboxRef}
          aria-label={label}
        />
      )}

      <label className="form-check-label" htmlFor={uuid}>
        {children}
      </label>
    </div>
  );
}

export default Checkbox;

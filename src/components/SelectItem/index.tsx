import React from 'react';

interface PropsTypes {
  children: any;
  className?: string;
  onFocus?: any;
  disabled?: boolean;
  active?: boolean;
}

SelectItem.defaultProps = {
  className: '',
  onFocus: () => {},
  disabled: false,
  active: false,
};

function SelectItem(props: PropsTypes) {
  const { children, className, onFocus, disabled, active } = props;
  const dropdownItemClasses: string[] = ['select-item'];
  if (className) dropdownItemClasses.push(className);
  if (disabled) dropdownItemClasses.push('disabled');
  if (active) dropdownItemClasses.push('active');

  return (
    <li className={dropdownItemClasses.join(' ')} onFocus={onFocus} tabIndex={-1}>
      {children}
    </li>
  );
}

export default SelectItem;

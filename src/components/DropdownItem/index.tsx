import React from 'react';

interface PropsTypes {
  children: any;
  className?: string;
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  active?: boolean;
}

DropdownItem.defaultProps = {
  className: '',
  onMouseDown: () => {},
  disabled: false,
  active: false,
};

function DropdownItem(props: PropsTypes) {
  const { children, className, onMouseDown, disabled, active } = props;
  const dropdownItemClasses: string[] = ['dropdown-item'];
  if (className) dropdownItemClasses.push(className);
  if (disabled) dropdownItemClasses.push('disabled');
  if (active) dropdownItemClasses.push('active');

  return (
    <li className={dropdownItemClasses.join(' ')} onMouseDown={onMouseDown}>
      {children}
    </li>
  );
}

export default DropdownItem;

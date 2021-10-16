import React from 'react';

interface PropsTypes {
  children: any;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  active?: boolean;
}

DropdownItem.defaultProps = {
  className: '',
  onClick: () => {},
  disabled: false,
  active: false,
};

function DropdownItem(props: PropsTypes) {
  const { children, className, onClick, disabled, active } = props;
  const dropdownItemClasses: string[] = ['dropdown-item'];
  if (className) dropdownItemClasses.push(className);
  if (disabled) dropdownItemClasses.push('disabled');
  if (active) dropdownItemClasses.push('active');

  return (
    <li className={dropdownItemClasses.join(' ')} onClick={onClick}>
      {children}
    </li>
  );
}

export default DropdownItem;

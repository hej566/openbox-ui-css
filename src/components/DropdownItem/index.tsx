import React from 'react';

interface PropsTypes {
  children: any;
  className?: string;
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  active?: boolean;
  onEsc?: React.MouseEventHandler<HTMLElement>;
}

DropdownItem.defaultProps = {
  className: '',
  onMouseDown: () => {},
  onEsc: () => {},
  disabled: false,
  active: false,
};

function DropdownItem(props: PropsTypes) {
  const { children, className, onMouseDown, onEsc, disabled, active } = props;
  const dropdownItemClasses: string[] = ['dropdown-item'];
  if (className) dropdownItemClasses.push(className);
  if (disabled) dropdownItemClasses.push('disabled');
  if (active) dropdownItemClasses.push('active');

  const keyPressHandler = (e: any) => {
    const { currentTarget } = e;
    if (currentTarget) {
      if (e.keyCode === 40) {
        e.preventDefault();
        let nextSibling = currentTarget.nextElementSibling;
        while (nextSibling) {
          if (nextSibling.getAttribute('disabled')) {
            nextSibling = nextSibling.nextElementSibling;
          } else {
            nextSibling.focus();
            break;
          }
        }
      } else if (e.keyCode === 38) {
        e.preventDefault();
        let previousSibling = currentTarget.previousElementSibling;
        while (previousSibling) {
          if (previousSibling.getAttribute('disabled')) {
            previousSibling = previousSibling.previousElementSibling;
          } else {
            previousSibling.focus();
            break;
          }
        }
      } else if (e.keyCode === 13) {
        e.preventDefault();
        if (onMouseDown) onMouseDown(e);
      } else if (e.keyCode === 27) {
        e.preventDefault();
        if (onEsc) onEsc(e);
      }
    }
  };

  return (
    <li
      className={dropdownItemClasses.join(' ')}
      onMouseDown={onMouseDown}
      tabIndex={0}
      onKeyDown={keyPressHandler}
    >
      {children}
    </li>
  );
}

export default DropdownItem;

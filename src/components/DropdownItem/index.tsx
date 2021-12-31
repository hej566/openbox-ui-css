import React, { useContext } from 'react';
import DropdownContext from '../DropdownContext';

const DropdownItem: React.FunctionComponent<propTypes> = (props) => {
  const { children, className, itemId } = props;
  const ctx = useContext(DropdownContext);
  const dropdownItemClasses: string[] = [`dropdown-item`];
  if (className) dropdownItemClasses.push(className);
  if (ctx.disabledStateMap[itemId]) dropdownItemClasses.push(`dropdown-item--disabled`);
  if (ctx.activeStateMap[itemId]) dropdownItemClasses.push(`dropdown-item--active`);

  const keyDownHandler = (e: any) => {
    const { currentTarget } = e;
    if (currentTarget) {
      if (e.keyCode === 40) {
        e.preventDefault();
        let nextSibling = currentTarget.nextElementSibling;
        while (nextSibling) {
          if (
            nextSibling.classList.contains(`dropdown-item--disabled`) ||
            !nextSibling.classList.contains(`dropdown-item`)
          ) {
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
          if (
            previousSibling.classList.contains(`dropdown-item--disabled`) ||
            !previousSibling.classList.contains(`dropdown-item`)
          ) {
            previousSibling = previousSibling.previousElementSibling;
          } else {
            previousSibling.focus();
            break;
          }
        }
      } else if (e.keyCode === 13) {
        e.preventDefault();
        if (!currentTarget.classList.contains(`dropdown-item--disabled`)) {
          currentTarget.click();
        }
      } else if (e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();
        ctx.onESC(e);
      }
    }
  };

  const clickHandler = (e: any) => {
    const { currentTarget } = e;
    if (!currentTarget.classList.contains(`dropdown-item--disabled`)) {
      ctx.onClick(itemId, 'leaf')(e);
    }
  };

  return (
    <li
      className={dropdownItemClasses.join(' ')}
      onClick={clickHandler}
      tabIndex={0}
      onKeyDown={keyDownHandler}
    >
      {children}
    </li>
  );
};

type propTypes = {
  children: any;
  className?: string;
  isDisabled?: boolean;
  isActive?: boolean;
  itemId: string;
};

DropdownItem.defaultProps = {
  className: '',
  isDisabled: false,
  isActive: false,
};

export default DropdownItem;

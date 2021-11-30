import React from 'react';

interface PropsTypes {
  children: any;
  className?: string;
  onMouseDown?: any;
  onEsc?: any;
  disabled?: boolean;
  active?: boolean;
}

SelectItem.defaultProps = {
  className: '',
  onMouseDown: () => {},
  onEsc: () => {},
  disabled: false,
  active: false,
};

function SelectItem(props: PropsTypes) {
  const { children, className, onMouseDown, disabled, active, onEsc } = props;
  const selectItemClasses: string[] = ['select-item'];
  if (className) selectItemClasses.push(className);
  if (disabled) selectItemClasses.push('disabled');
  if (active) selectItemClasses.push('active');

  const keyDownHandler = (e: any) => {
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
      className={selectItemClasses.join(' ')}
      onMouseDown={onMouseDown}
      tabIndex={0}
      onKeyDown={keyDownHandler}
    >
      {children}
    </li>
  );
}

export default SelectItem;

import React from 'react';

interface PropsTypes {
  children: any;
  itemId: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

PaginationItem.defaultProps = {
  isActive: false,
  isDisabled: false,
  onClick: () => {},
};

function PaginationItem(props: PropsTypes) {
  const { children, isDisabled, isActive, onClick } = props;
  const paginationItemClasses: string[] = ['page-item'];

  if (isDisabled) paginationItemClasses.push('disabled');
  if (isActive) paginationItemClasses.push('active');

  function keyDownHandler(e: any) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.currentTarget.click();
    }
  }

  return (
    <li className={paginationItemClasses.join(' ')} onClick={onClick} onKeyDown={keyDownHandler}>
      <span className="page-link" tabIndex={0}>
        {children}
      </span>
    </li>
  );
}

export default PaginationItem;

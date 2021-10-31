import React from 'react';

interface PropsTypes {
  children: any;
  active?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

PaginationItem.defaultProps = {
  active: false,
  disabled: false,
  onClick: () => {},
};

function PaginationItem(props: PropsTypes) {
  const { children, disabled, active, onClick } = props;
  const paginationItemClasses: string[] = ['page-item'];

  if (disabled) paginationItemClasses.push('disabled');
  if (active) paginationItemClasses.push('active');

  return (
    <li className={paginationItemClasses.join(' ')} onClick={onClick}>
      <span className="page-link" tabIndex={-1}>
        {children}
      </span>
    </li>
  );
}

export default PaginationItem;

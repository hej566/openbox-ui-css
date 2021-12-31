import React from 'react';

interface PropsTypes {
  children: React.ReactNode | string;
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  variant?: string;
  itemId: string;
}

ListGroupItem.defaultProps = {
  className: '',
  isActive: false,
  isDisabled: false,
  variant: '',
  onClick: () => {},
};

function ListGroupItem(props: PropsTypes) {
  const { children, className, isActive, isDisabled, onClick, variant } = props;
  const ListGroupItemClasses: string[] = ['list-group-item', 'list-group-item-action'];

  if (className) ListGroupItemClasses.push(className);
  if (isActive) ListGroupItemClasses.push('active');
  if (isDisabled) ListGroupItemClasses.push('disabled');
  if (variant) ListGroupItemClasses.push(`list-group-item-${variant}`);

  return (
    <li className={ListGroupItemClasses.join(' ')} onClick={onClick}>
      {children}
    </li>
  );
}

export default ListGroupItem;

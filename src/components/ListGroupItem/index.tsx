import React from 'react';

interface PropsTypes {
  children: React.ReactNode | string;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
  variant?: string;
}

ListGroupItem.defaultProps = {
  className: '',
  children: '',
  active: false,
  disabled: false,
  onClick: () => {},
  variant: '',
} as PropsTypes;

function ListGroupItem(props: PropsTypes) {
  const { children, className, active, disabled, onClick, variant } = props;
  const ListGroupItemClasses: string[] = ['list-group-item', 'list-group-item-action'];

  if (className) ListGroupItemClasses.push(className);
  if (active) ListGroupItemClasses.push('active');
  if (disabled) ListGroupItemClasses.push('disabled');
  if (variant) ListGroupItemClasses.push(`list-group-item-${variant}`);

  return (
    <li className={ListGroupItemClasses.join(' ')} onClick={onClick}>
      {children}
    </li>
  );
}

export default ListGroupItem;

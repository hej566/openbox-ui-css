import React from 'react';

interface PropsTypes {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  disabled?: boolean;
}

NavItem.defaultProps = {
  className: '',
  active: false,
  disabled: false,
};

function NavItem(props: PropsTypes) {
  const { children, className, active, disabled } = props;
  const navItemClasses: string[] = ['nav-link'];
  if (className) navItemClasses.push(className);

  if (active) navItemClasses.push('active');
  if (disabled) navItemClasses.push('disabled');

  return (
    <li className="nav-item">
      <>
        {active && (
          <a className={navItemClasses.join(' ')} aria-current="page">
            {children}
          </a>
        )}
        {!active && <a className={navItemClasses.join(' ')}>{children}</a>}
      </>
    </li>
  );
}

export default NavItem;

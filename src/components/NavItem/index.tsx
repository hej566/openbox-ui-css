import React from 'react';

interface PropsTypes {
  children: React.ComponentElement<any, any> | string;
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: string;
  dropdown?: boolean;
  itemId: string;
  role?: string;
}

NavItem.defaultProps = {
  className: '',
  isActive: false,
  isDisabled: false,
  onClick: () => {},
  type: 'nav',
  dropdown: false,
  role: 'navigation',
};

function NavItem(props: PropsTypes) {
  const { children, className, isActive, isDisabled, onClick, type, dropdown, role } =
    props;
  const navLinkClasses: string[] = ['nav-link'];
  const navItemClasses: string[] = ['nav-item'];
  if (className) navItemClasses.push(className);
  if (dropdown) {
    navItemClasses.push('dropdown');
    navLinkClasses.push('dropdown');
  }
  if (isActive) navLinkClasses.push('active');
  if (isDisabled) navLinkClasses.push('disabled');

  let navItem;

  function keyDownHandler(e: any) {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (e.currentTarget.querySelector('button')) {
        e.currentTarget.querySelector('button').click();
      } else {
        e.currentTarget.click();
      }
    }
  }

  const component = React.Children.map(children, (child) => {
    if (dropdown && typeof child !== 'string') {
      return React.cloneElement(child, {
        open: isActive,
        type: 'normal',
      });
    }
    return child;
  });

  if (type === 'tabs') {
    navItem = (
      <div
        className={navLinkClasses.join(' ')}
        aria-selected="true"
        tabIndex={isDisabled || dropdown ? -1 : 0}
      >
        {component}
      </div>
    );
  } else {
    navItem = (
      <div
        className={navLinkClasses.join(' ')}
        aria-current="page"
        tabIndex={isDisabled || dropdown ? -1 : 0}
      >
        {component}
      </div>
    );
  }

  return (
    <div
      className={navItemClasses.join(' ')}
      onClick={onClick}
      onKeyDown={keyDownHandler}
      role={role}
    >
      {navItem}
    </div>
  );
}

export default NavItem;

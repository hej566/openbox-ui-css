import React from 'react';

interface PropsTypes {
  children: React.ComponentElement<any, any> | string;
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: string;
  collapse?: boolean;
  dropdown?: boolean;
  itemId: string;
}

NavItem.defaultProps = {
  className: '',
  isActive: false,
  isDisabled: false,
  onClick: () => {},
  type: 'nav',
  collapse: false,
  dropdown: false,
};

function NavItem(props: PropsTypes) {
  const { children, className, isActive, isDisabled, onClick, type, collapse, dropdown } = props;
  const navLinkClasses: string[] = ['nav-link'];
  const navItemClasses: string[] = ['nav-item'];
  if (className) navItemClasses.push(className);
  if (dropdown) {
    navItemClasses.push('dropdown');
  }
  if (isActive) navLinkClasses.push('active');
  if (isDisabled) navLinkClasses.push('disabled');

  let navItem = null;

  const component = React.Children.map(children, (child) => {
    if (dropdown && typeof child !== 'string') {
      return React.cloneElement(child, {
        open: isActive,
        type: collapse ? 'normal' : 'popper',
      });
    }
    return child;
  });

  if (type === 'tabs') {
    navItem = (
      <div className={navLinkClasses.join(' ')} aria-selected="true">
        {component}
      </div>
    );
  } else {
    navItem = (
      <div className={navLinkClasses.join(' ')} aria-current="page">
        {component}
      </div>
    );
  }

  return (
    <div className={navItemClasses.join(' ')} onClick={onClick}>
      {navItem}
      {/*<>*/}
      {/*  {isActive && type === 'nav' && (*/}
      {/*    <div className={navLinkClasses.join(' ')} aria-current="page">*/}
      {/*      {component}*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*  {isActive && type === 'tab' && (*/}
      {/*    <div className={navLinkClasses.join(' ')} aria-selected="true">*/}
      {/*      {component}*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*  {!isActive && <div className={navLinkClasses.join(' ')}>{component}</div>}*/}
      {/*</>*/}
    </div>
  );
}

export default NavItem;

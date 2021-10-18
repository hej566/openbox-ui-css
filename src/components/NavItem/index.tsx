import React from 'react';

interface PropsTypes {
  children: React.ComponentElement<any, any> | string;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: string;
  dropdown?: boolean;
}

NavItem.defaultProps = {
  className: '',
  active: false,
  disabled: false,
  onClick: () => {},
  type: 'nav',
  dropdown: false,
};

function NavItem(props: PropsTypes) {
  const { children, className, active, disabled, onClick, type, dropdown } = props;
  const navLinkClasses: string[] = ['nav-link'];
  const navItemClasses: string[] = ['nav-item'];
  if (className) navItemClasses.push(className);
  if (dropdown) {
    navItemClasses.push('dropdown');
  }
  if (active) navLinkClasses.push('active');
  if (disabled) navLinkClasses.push('disabled');

  const component = React.Children.map(children, (child) => {
    if (typeof child === 'object' && child.type.name === 'Dropdown') {
      return React.cloneElement(child, {
        open: active,
        type: dropdown ? 'nav-dropdown' : 'dropdown',
      });
    }
    return child;
  });

  return (
    <div className={navItemClasses.join(' ')} onClickCapture={onClick}>
      <>
        {active && type === 'nav' && (
          <div className={navLinkClasses.join(' ')} aria-current="page">
            {component}
          </div>
        )}
        {active && type === 'tab' && (
          <div className={navLinkClasses.join(' ')} aria-selected="true">
            {component}
          </div>
        )}
        {!active && <div className={navLinkClasses.join(' ')}>{component}</div>}
      </>
    </div>
  );
}

export default NavItem;

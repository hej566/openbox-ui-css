import React, { useContext } from 'react';
import MenuContext from '../MenuContext';

const MenuItem = React.forwardRef<HTMLDivElement, PropsTypes>((props: PropsTypes, ref) => {
  const { className, children, onClick, prefix, menuId, indent } = props;
  const menuItemIndent = Number(indent) * menuId.split('-').length;
  const ctx = useContext(MenuContext);
  const menuItemClasses: string[] = ['menu-item'];
  const isActive = ctx.activeStateMap[menuId];

  if (isActive) {
    menuItemClasses.push('active');
  }

  return (
    <div
      className={menuItemClasses.join(' ')}
      style={{ paddingLeft: `${menuItemIndent}px` }}
      ref={ref}
      onClick={ctx.onClick(menuId)}
    >
      <div className="menu-item__inner">
        <div className="menu-item__wrapper">
          <div className="menu-item__prefix">{prefix}</div>
          <div className="menu-item__content">{children}</div>
        </div>
      </div>
    </div>
  );
});

type PropsTypes = {
  children: any;
  className?: string;
  onClick?: any;
  prefix?: any;
  menuId: string;
  indent?: string;
  active?: boolean;
  disabled?: boolean;
  ref?: any;
};

MenuItem.defaultProps = {
  className: '',
  prefix: null,
  indent: '16',
  onClick: () => {},
  active: false,
  disabled: false,
  ref: null,
};

export default MenuItem;

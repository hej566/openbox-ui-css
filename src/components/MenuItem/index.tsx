import React, { useContext, useEffect, useRef, useState } from 'react';
import MenuContext from '../MenuContext';

interface PropsTypes {
  children: any;
  className?: string;
  onClick?: any;
  prefix?: any;
  menuId: string;
  indent?: string;
  active?: boolean;
  disabled?: boolean;
}

MenuItem.defaultProps = {
  className: '',
  prefix: null,
  indent: '16',
  onClick: () => {},
  active: false,
  disabled: false,
};

function MenuItem(props: PropsTypes) {
  const { className, children, onClick, prefix, menuId, indent } = props;
  const menuItemRef = useRef<HTMLDivElement>(null);
  const menuItemIndent = Number(indent) * menuId.split('-').length;
  const ctx = useContext(MenuContext);

  console.log('recreated menu-item');

  return (
    <>
      {ctx.activeStateMap[menuId] && (
        <div
          className="menu-item active"
          style={{ paddingLeft: `${menuItemIndent}px` }}
          ref={menuItemRef}
          onClick={ctx.onClick(menuId)}
        >
          <div className="menu-item__inner">
            <div className="menu-item__wrapper">
              <div className="menu-item__prefix">{prefix}</div>
              <div className="menu-item__content">{children}</div>
            </div>
          </div>
        </div>
      )}
      {!ctx.activeStateMap[menuId] && (
        <div
          className="menu-item"
          ref={menuItemRef}
          style={{ paddingLeft: `${menuItemIndent}px` }}
          onClick={ctx.onClick(menuId)}
        >
          <div className="menu-item__inner">
            <div className="menu-item__wrapper">
              <div className="menu-item__prefix">{prefix}</div>
              <div className="menu-item__content">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MenuItem;

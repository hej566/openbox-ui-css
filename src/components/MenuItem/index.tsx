import React, { useEffect, useRef, useState } from 'react';
import MenuContext from '../MenuContext';

interface PropsTypes {
  children: any;
  className?: string;
  onClick?: any;
  prefix?: any;
  suffix?: any;
  menuId: string;
  indent?: string;
  active?: boolean;
  disabled?: boolean;
}

MenuItem.defaultProps = {
  className: '',
  prefix: null,
  suffix: null,
  indent: '16',
  onClick: () => {},
  active: false,
  disabled: false,
};

function MenuItem(props: PropsTypes) {
  const { className, children, onClick, prefix, suffix, menuId, indent } = props;
  const menuItemRef = useRef<HTMLDivElement>(null);
  const menuItemIndent = Number(indent) * menuId.split('-').length;

  return (
    <MenuContext.Consumer>
      {(ctx) => (
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
                <div className="menu-item__suffix">{suffix}</div>
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
                <div className="menu-item__suffix">{suffix}</div>
              </div>
            </div>
          )}
        </>
      )}
    </MenuContext.Consumer>
  );
}

export default MenuItem;

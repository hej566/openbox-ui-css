import React, { useContext, useRef } from 'react';
import MenuContext from '../MenuContext';

const MenuItem = React.forwardRef<HTMLDivElement, propTypes>((props: propTypes, ref) => {
  const { className, children, prefix, menuId, indent } = props;
  const menuItemIndent = Number(indent) * menuId.split('-').length;
  const ctx = useContext(MenuContext);
  const menuItemClasses: string[] = ['menu-item'];
  const isActive = ctx.activeStateMap[menuId];
  const menuItemContentRef = useRef<HTMLDivElement>(null);

  if (isActive) menuItemClasses.push('active');
  if (className) menuItemClasses.push(className);

  const clickHandler = (e: any) => {
    const menuItemContentDom = menuItemContentRef.current;
    if (menuItemContentDom) {
      const linkElm = menuItemContentDom.querySelector('a');
      if (linkElm) linkElm.click();
    }
    ctx.onClick(menuId, 'leaf')(e);
  };

  return (
    <div className={menuItemClasses.join(' ')} ref={ref} onMouseDown={clickHandler}>
      <div
        className="menu-item__inner"
        style={{ paddingLeft: `${menuItemIndent}px`, paddingRight: `${indent}px` }}
      >
        <div className="menu-item__wrapper">
          <div className="menu-item__prefix">{prefix}</div>
          <div className="menu-item__content" ref={menuItemContentRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
});

type propTypes = {
  children: any;
  className?: string;
  onClick?: any;
  prefix?: any;
  menuId: string;
  indent?: string;
  active?: boolean;
  disabled?: boolean;
  ref?: any;
  type?: string;
};

MenuItem.defaultProps = {
  className: '',
  prefix: null,
  indent: '16',
  onClick: () => {},
  active: false,
  disabled: false,
  ref: null,
  type: 'leaf',
};

export default MenuItem;

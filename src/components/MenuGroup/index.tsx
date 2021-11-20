import React, { useContext, useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import Chevron from '../../assets/icons/svg/chevron-down-regular.svg';
import MenuContext from '../MenuContext';

interface PropsTypes {
  children: React.ComponentElement<any, any>[];
  className?: string;
  onChange?: any;
  prefix?: any;
  suffix?: any;
  label: string;
  menuId: string;
  indent?: string;
}

MenuGroup.defaultProps = {
  className: '',
  onChange: () => {},
  prefix: null,
  suffix: <Icon Component={Chevron} />,
  indent: '16',
};

function MenuGroup(props: PropsTypes) {
  const { className, children, onChange, prefix, suffix, label, menuId, indent } = props;
  const menuGroupHeaderRef = useRef<HTMLDivElement>(null);
  const ctx = useContext(MenuContext);

  function clickHandler(e: any) {
    if (!ctx.collapsed) {
      e.stopPropagation();
    }
  }

  function setupIndent() {
    const menuGroupHeaderDom = menuGroupHeaderRef.current;
    if (menuGroupHeaderDom) {
      const menuGroupHeaderIndent = Number(indent) * menuId.split('-').length;
      menuGroupHeaderDom.style.paddingLeft = `${menuGroupHeaderIndent}px`;
    }
  }

  useEffect(() => {
    setupIndent();
  }, []);

  return (
    <div className="menu-group" onMouseDown={clickHandler}>
      <div className="menu-group__header" ref={menuGroupHeaderRef}>
        <div className="menu-group__prefix">{prefix}</div>
        <div className="menu-group__content">{label}</div>
      </div>
      <div className="menu-group__body">{children}</div>
    </div>
  );
}

export default MenuGroup;

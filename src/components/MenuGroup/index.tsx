import React, { useContext, useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import Chevron from '../../assets/icons/svg/chevron-down-regular.svg';
import MenuContext from '../MenuContext';

interface PropsTypes {
  children: React.ComponentElement<any, any>[];
  className?: string;
  prefix?: any;
  suffix?: any;
  label: string;
  indent?: string;
}

MenuGroup.defaultProps = {
  className: '',
  prefix: null,
  suffix: <Icon Component={Chevron} />,
  indent: '16',
};

function MenuGroup(props: PropsTypes) {
  const { className, children, prefix, label, indent } = props;
  const menuGroupHeaderRef = useRef<HTMLDivElement>(null);
  const menuGroupBodyRef = useRef<HTMLDivElement>(null);
  const ctx = useContext(MenuContext);

  function clickHandler(e: any) {
    if (!ctx.collapsed) {
      e.stopPropagation();
    }
  }

  function setupIndent() {
    const menuGroupHeaderDom = menuGroupHeaderRef.current;
    const menuGroupBodyDom = menuGroupBodyRef.current;
    if (menuGroupHeaderDom && menuGroupBodyDom) {
      const targetDom = menuGroupBodyDom.querySelector<HTMLElement>(
        '.menu-item__inner, .submenu-header__inner'
      );
      if (targetDom) {
        const { paddingLeft } = targetDom.style;
        menuGroupHeaderDom.style.paddingLeft = `${parseInt(paddingLeft, 10)}px`;
      }
    }
  }

  useEffect(() => {
    setupIndent();
  }, []);

  return (
    <div className="menu-group" onMouseDown={clickHandler}>
      <div className="menu-group-header" ref={menuGroupHeaderRef}>
        <div className="menu-group__prefix">{prefix}</div>
        <div className="menu-group__content">{label}</div>
      </div>
      <div className="menu-group-body" ref={menuGroupBodyRef}>
        {children}
      </div>
    </div>
  );
}

export default MenuGroup;

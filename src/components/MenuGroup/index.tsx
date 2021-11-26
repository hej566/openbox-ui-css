import React, { useContext, useEffect, useRef } from 'react';
import Icon from '../Icon';
import Chevron from '../../assets/icons/svg/chevron-down-regular.svg';
import MenuContext from '../MenuContext';

const MenuGroup: React.FunctionComponent<propTypes> = (props) => {
  const { className, children, prefix, label, id } = props;
  const menuGroupHeaderRef = useRef<HTMLDivElement>(null);
  const menuGroupBodyRef = useRef<HTMLDivElement>(null);
  const ctx = useContext(MenuContext);
  const menuGroupClasses: string[] = ['menu-group'];

  if (className) menuGroupClasses.push(className);

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
    <div className={menuGroupClasses.join(' ')} onMouseDown={clickHandler} id={id}>
      <div className="menu-group-header" ref={menuGroupHeaderRef}>
        <div className="menu-group__prefix">{prefix}</div>
        <div className="menu-group__content">{label}</div>
      </div>
      <div className="menu-group-body" ref={menuGroupBodyRef}>
        {children}
      </div>
    </div>
  );
};

type propTypes = {
  className?: string;
  prefix?: any;
  suffix?: any;
  label: string;
  id?: string;
};

MenuGroup.defaultProps = {
  className: '',
  prefix: null,
  suffix: <Icon Component={Chevron} />,
  id: '',
};

export default MenuGroup;

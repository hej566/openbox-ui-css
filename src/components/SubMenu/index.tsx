import React, { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import Chevron from '../../assets/icons/svg/chevron-down-regular.svg';

interface PropsTypes {
  children: React.ComponentElement<any, any>[] | React.ComponentElement<any, any>;
  className?: string;
  onChange?: any;
  prefix?: any;
  suffix?: any;
  label: string;
  open?: boolean;
  menuId: string;
  indent?: string;
  onClick?: any;
}

SubMenu.defaultProps = {
  className: '',
  onChange: () => {},
  prefix: null,
  suffix: <Icon Component={Chevron} />,
  open: false,
  indent: '16',
  onClick: () => {},
};

function SubMenu(props: PropsTypes) {
  const { className, children, onChange, prefix, suffix, label, open, menuId, indent, onClick } =
    props;
  const submenuBodyRef = useRef<HTMLDivElement>(null);
  const submenuHeaderRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpenState] = useState(open);
  const [initSubmenu, setInitSubmenuState] = useState(true);

  function getSubmenuHeight() {
    const submenuBodyDom = submenuBodyRef.current;
    const submenuDom = submenuRef.current;
    if (submenuBodyDom && submenuDom) {
      submenuDom.setAttribute('data-height', String(submenuBodyDom.offsetHeight));
      if (!isOpen) {
        submenuBodyDom.style.display = 'none';
      }
    }
  }

  function updateSubmenuState() {
    if (initSubmenu) {
      setInitSubmenuState(false);
    }
  }

  function transitionEndHandler(e: any) {
    e.stopPropagation();
    const submenuBodyDom = submenuBodyRef.current;
    if (submenuBodyDom) {
      if (isOpen) {
        submenuBodyDom.style.height = '';
        submenuBodyDom.classList.remove('collapsing');
        submenuBodyDom.classList.add('collapse', 'show');
      } else {
        submenuBodyDom.style.height = '';
        submenuBodyDom.classList.remove('collapsing', 'show');
        submenuBodyDom.classList.add('collapse');
        submenuBodyDom.style.display = 'none';
      }
    }
  }

  function updateSubmenuBodyClass() {
    if (isOpen && !initSubmenu) {
      const submenuBodyDom = submenuBodyRef.current;
      const submenuDom = submenuRef.current;
      if (submenuBodyDom && submenuDom) {
        submenuBodyDom.style.display = 'block';
        submenuBodyDom.style.height = '0px';
        requestAnimationFrame(() => {
          submenuBodyDom.style.height = `${submenuDom.dataset.height}px`;
        });
        submenuBodyDom.classList.add('collapsing');
        submenuDom.classList.add('show');
      }
    } else if (!isOpen && !initSubmenu) {
      const submenuBodyDom = submenuBodyRef.current;
      const submenuDom = submenuRef.current;
      if (submenuBodyDom && submenuDom) {
        submenuBodyDom.style.height = `${submenuDom.dataset.height}px`;
        requestAnimationFrame(() => {
          submenuBodyDom.style.height = `0px`;
        });
        submenuBodyDom.classList.add('collapsing');
        submenuDom.classList.remove('show');
      }
    }
  }

  function setupIndent() {
    const submenuHeaderDom = submenuHeaderRef.current;
    if (submenuHeaderDom) {
      const submenuIndent = Number(indent) * menuId.split('-').length;
      submenuHeaderDom.style.paddingLeft = `${submenuIndent}px`;
    }
  }

  function clickHandler(e: any) {
    e.stopPropagation();
    setOpenState(!isOpen);
    updateSubmenuState();
  }

  useEffect(() => {
    updateSubmenuBodyClass();
  }, [isOpen]);

  useEffect(() => {
    getSubmenuHeight();
    setupIndent();
  }, []);

  return (
    <div className="submenu" ref={submenuRef} onClick={clickHandler}>
      <div className="submenu__header" ref={submenuHeaderRef} onClick={onChange}>
        <div className="submenu__wrapper">
          <div className="submenu__prefix">{prefix}</div>
          <div className="submenu__content">{label}</div>
        </div>
        <div className="submenu__suffix">{suffix}</div>
      </div>
      <div className="submenu__body" ref={submenuBodyRef} onTransitionEnd={transitionEndHandler}>
        {children}
      </div>
    </div>
  );
}

export default SubMenu;

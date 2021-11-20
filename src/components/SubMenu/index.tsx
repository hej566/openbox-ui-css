import React, { useContext, useEffect, useRef, useState } from 'react';
import tippy, { animateFill, sticky } from 'tippy.js';
import Icon from '../Icon';
import Chevron from '../../assets/icons/svg/chevron-down-regular.svg';
import MenuContext from '../MenuContext';

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
  const ctx = useContext(MenuContext);
  const [isOpen, setOpenState] = useState(ctx.openStateMap[menuId]);
  let submenu = null;
  const [tippyInstance, setTippyInstance]: [any, any] = useState(null);

  function initSubmenuHeight() {
    const submenuBodyDom = submenuBodyRef.current;
    const submenuDom = submenuRef.current;
    if (submenuBodyDom && submenuDom) {
      submenuDom.setAttribute('data-height', String(submenuBodyDom.offsetHeight));
      if (!ctx.collapsed) {
        if (!submenuDom.classList.contains('show')) {
          submenuBodyDom.style.display = 'none';
        }
      }
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

  function toggleHandler(e: any) {
    setOpenState(!isOpen);
    const submenuBodyDom = submenuBodyRef.current;
    const submenuDom = submenuRef.current;
    if (e.currentTarget.classList.contains('show')) {
      if (submenuBodyDom && submenuDom) {
        submenuBodyDom.style.height = `${submenuDom.dataset.height}px`;
        requestAnimationFrame(() => {
          submenuBodyDom.style.height = `0px`;
        });
        submenuBodyDom.classList.add('collapsing');
        submenuDom.classList.remove('show');
      }
    } else {
      if (submenuBodyDom && submenuDom) {
        submenuBodyDom.style.display = 'block';
        submenuBodyDom.style.height = '0px';
        requestAnimationFrame(() => {
          submenuBodyDom.style.height = `${submenuDom.dataset.height}px`;
        });
        submenuBodyDom.classList.add('collapsing');
        submenuDom.classList.add('show');
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
    toggleHandler(e);
  }

  useEffect(() => {
    initSubmenuHeight();
    setupIndent();
  }, []);

  useEffect(() => {
    if (ctx.collapsed) {
      setupTippy();
    } else {
      if (tippyInstance) {
        tippyInstance.destroy();
      }
    }
  }, [ctx.collapsed]);

  useEffect(() => {
    if (ctx.deleteBranch) {
      if (tippyInstance && ctx.collapsed) {
        tippyInstance.hide();
      }
      ctx.resetCollapseTippy();
    }
  }, [ctx.deleteBranch]);

  function setupTippy() {
    const submenuDom = submenuRef.current;
    const submenuBodyDom = submenuBodyRef.current;

    if (submenuDom && submenuBodyDom) {
      submenuDom.classList.remove('show');
      const instance = tippy(submenuDom, {
        allowHTML: true,
        interactive: true,
        arrow: false,
        trigger: 'mouseenter click',
        content: submenuBodyDom,
        appendTo: submenuDom,
        plugins: [sticky],
        maxWidth: 'none',
        placement: 'left-start',
        sticky: true,
        theme: 'rb-submenu',
        hideOnClick: false,
        onDestroy: (instance) => {
          if (isOpen) {
            submenuDom.classList.add('show');
            submenuBodyDom.classList.add('collapse', 'show');
            submenuBodyDom.style.display = 'block';
          } else {
            submenuBodyDom.style.display = 'none';
          }
          submenuDom.appendChild(submenuBodyDom);
        },
      });
      setTippyInstance(() => instance);
    }
  }

  if (!ctx.collapsed) {
    if (ctx.openStateMap[menuId]) {
      submenu = (
        <div className="submenu show" ref={submenuRef} onMouseDown={clickHandler}>
          <div className="submenu__header" ref={submenuHeaderRef} onClick={onChange}>
            <div className="submenu__wrapper">
              <div className="submenu__prefix">{prefix}</div>
              <div className="submenu__content">{label}</div>
            </div>
            <div className="submenu__suffix">{suffix}</div>
          </div>
          <div
            className="submenu__body collapse show"
            ref={submenuBodyRef}
            onTransitionEnd={transitionEndHandler}
          >
            {children}
          </div>
        </div>
      );
    } else {
      submenu = (
        <div className="submenu" ref={submenuRef} onMouseDown={clickHandler}>
          <div className="submenu__header" ref={submenuHeaderRef} onClick={onChange}>
            <div className="submenu__wrapper">
              <div className="submenu__prefix">{prefix}</div>
              <div className="submenu__content">{label}</div>
            </div>
            <div className="submenu__suffix">{suffix}</div>
          </div>
          <div
            className="submenu__body"
            ref={submenuBodyRef}
            onTransitionEnd={transitionEndHandler}
          >
            {children}
          </div>
        </div>
      );
    }
  } else {
    submenu = (
      <div className="submenu" ref={submenuRef} onClick={ctx.onClick(menuId, 'node')}>
        <div className="submenu__header" ref={submenuHeaderRef}>
          <div className="submenu__wrapper">
            <div className="submenu__prefix">{prefix}</div>
            <div className="submenu__content">{label}</div>
          </div>
          <div className="submenu__suffix">{suffix}</div>
        </div>
        <div className="submenu__body" ref={submenuBodyRef} style={{ display: 'block' }}>
          {children}
        </div>
      </div>
    );
  }

  return submenu;
}

export default SubMenu;

import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
} from 'react';
import tippy, { sticky } from 'tippy.js';
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
  type?: string;
}

SubMenu.defaultProps = {
  className: '',
  onChange: () => {},
  prefix: null,
  suffix: <Icon Component={Chevron} />,
  open: false,
  indent: '16',
  onClick: () => {},
  type: 'node',
};

function SubMenu(props: PropsTypes) {
  const { className, children, onChange, prefix, suffix, label, menuId, indent, onClick, type } =
    props;
  const ctx = useContext(MenuContext);
  const submenuBodyRef = useRef<HTMLDivElement>(null);
  const submenuHeaderRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpenState] = useState(ctx.openStateMap[menuId]);
  const [tippyInstance, setTippyInstance]: [any, any] = useState(null);

  const transitionEndHandler = useCallback(
    (e: any) => {
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
    },
    [isOpen]
  );

  const toggleHandler = (e: any) => {
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
  };

  const mouseDownHandler = useCallback(
    (e: any) => {
      e.stopPropagation();
      toggleHandler(e);
    },
    [isOpen]
  );

  const clickHandler = useCallback((e: any) => {
    ctx.onClick(menuId, 'node');
  }, []);

  const setupHeight = () => {
    const submenuBodyDom = submenuBodyRef.current;
    const submenuDom = submenuRef.current;
    if (submenuBodyDom && submenuDom) {
      submenuDom.setAttribute('data-height', String(submenuBodyDom.offsetHeight));
    }
  };

  const setupIndent = () => {
    const submenuHeaderDom = submenuHeaderRef.current;
    if (submenuHeaderDom) {
      const submenuIndent = Number(indent) * menuId.split('-').length;
      submenuHeaderDom.style.paddingLeft = `${submenuIndent}px`;
    }
  };

  const setupVisibility = () => {
    const submenuBodyDom = submenuBodyRef.current;
    const submenuDom = submenuRef.current;
    if (submenuBodyDom && submenuDom) {
      if (!ctx.collapsed) {
        if (isOpen) {
          submenuDom.classList.add('show');
          submenuBodyDom.classList.add('collapse', 'show');
          submenuBodyDom.style.display = 'block';
        } else {
          submenuBodyDom.style.display = 'none';
        }
      } else {
        submenuDom.classList.remove('show');
        submenuBodyDom.style.display = 'block';
      }
    }
  };

  const setupTippy = () => {
    const submenuDom = submenuRef.current;
    const submenuBodyDom = submenuBodyRef.current;

    if (submenuDom && submenuBodyDom) {
      if (!tippyInstance) {
        const instance = tippy(submenuDom, {
          allowHTML: true,
          interactive: true,
          arrow: false,
          trigger: 'mouseenter',
          content: submenuBodyDom,
          appendTo: submenuDom,
          plugins: [sticky],
          maxWidth: 'none',
          placement: 'left-start',
          sticky: true,
          theme: 'rb-submenu',
          hideOnClick: false,
          onDestroy: () => {
            submenuDom.appendChild(submenuBodyDom);
            setTippyInstance(null);
          },
        });

        setTippyInstance(() => instance);
      }
    }
  };

  const initHeightAndIndent = () => {
    setupHeight();
    setupIndent();
  };

  useEffect(() => {
    if (ctx.hideTippy) {
      if (tippyInstance && ctx.collapsed) {
        tippyInstance.hide();
      }
      ctx.resetHideTippy();
    }
  }, [ctx.hideTippy]);

  useEffect(() => {
    if (ctx.collapsed && !tippyInstance) {
      setupTippy();
    }
    if (!ctx.collapsed && tippyInstance) {
      tippyInstance.destroy();
    }
    setupVisibility();
  }, [ctx.collapsed]);

  useLayoutEffect(() => {
    initHeightAndIndent();
    if (ctx.collapsed && !tippyInstance) {
      setupTippy();
    }
    if (!ctx.collapsed && tippyInstance) {
      tippyInstance.destroy();
    }
    setupVisibility();
  }, []);

  return (
    <div
      className="submenu"
      ref={submenuRef}
      onClick={ctx.collapsed ? clickHandler : () => {}}
      onMouseDown={!ctx.collapsed ? mouseDownHandler : () => {}}
    >
      <div className="submenu__header" ref={submenuHeaderRef}>
        <div className="submenu__wrapper">
          <div className="submenu__prefix">{prefix}</div>
          <div className="submenu__content">{label}</div>
        </div>
        <div className="submenu__suffix">{suffix}</div>
      </div>
      <div
        className="submenu__body"
        ref={submenuBodyRef}
        onTransitionEnd={!ctx.collapsed ? transitionEndHandler : () => {}}
      >
        {children}
      </div>
    </div>
  );
}

export default SubMenu;

import React, { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import Button from '../Button';
import Bars from '../../assets/icons/svg/bars-regular.svg';

interface PropsTypes {
  children: React.ComponentElement<any, any>[] | React.ComponentElement<any, any>;
  title?: string;
  className?: string;
  Icon?: React.ReactNode | null;
  theme?: string;
  open?: boolean;
  expand?: boolean;
  variant?: string;
  position?: string;
}

Navbar.defaultProps = {
  className: '',
  title: '',
  Icon: <Icon component={Bars} />,
  theme: 'light',
  open: false,
  expand: true,
  variant: 'light',
  position: '',
};

function Navbar(props: PropsTypes) {
  const { title, Icon, className, children, theme, open, expand, variant, position } = props;
  const activeListMap: { [key: string]: boolean } = {};
  const disabledListMap: { [key: string]: boolean } = {};
  const [activeStateMap, setActiveStateMap] = useState(activeListMap);
  const [disabledStateMap, setDisabledStateMap] = useState(disabledListMap);
  const [isOpen, setOpenState] = useState(open);
  const navbarCollapseRef = useRef<HTMLDivElement>(null);
  const navbarClasses: string[] = ['navbar'];

  if (className) navbarClasses.push(className);
  if (theme) navbarClasses.push(`navbar-${theme}`);
  if (variant) navbarClasses.push(`bg-${variant}`);
  if (position) navbarClasses.push(position);

  if (!Object.keys(activeStateMap).length) {
    React.Children.forEach(children, (child) => {
      const { isActive, isDisabled, itemId } = child.props;

      if (itemId && isActive && isDisabled) {
        activeStateMap[itemId] = isActive;
        disabledStateMap[itemId] = isDisabled;
      }
    });
  }

  function clickHandler(itemId: string) {
    return () => {
      Object.keys(activeStateMap).forEach((itemId) => {
        activeStateMap[itemId] = false;
      });
      activeStateMap[itemId] = true;
      setActiveStateMap(() => ({
        ...activeStateMap,
      }));
      setDisabledStateMap(() => ({
        ...disabledStateMap,
      }));
    };
  }

  function show() {
    navbarCollapseRef.current!.classList.remove('collapse');
    setOpenState(true);
  }

  function hide() {
    navbarCollapseRef.current!.classList.add('collapse');
    setOpenState(false);
  }

  const NavItemList = React.Children.map(children, (child) => {
    const { itemId } = child.props;
    if (itemId) {
      return React.cloneElement(child, {
        isActive: activeStateMap[itemId],
        isDisabled: disabledStateMap[itemId],
        onClick: !disabledStateMap[itemId] ? clickHandler(itemId) : null,
      });
    }
  });

  return (
    <nav className={navbarClasses.join(' ')}>
      <div className="container-fluid">
        <div className="navbar-brand">{title}</div>
        <Button
          className="navbar-toggler"
          variant="link"
          prefixIcon={Icon}
          onClick={isOpen ? hide : show}
        />
        <div className="navbar-collapse collapse justify-content-end" ref={navbarCollapseRef}>
          <div className="navbar-nav">{NavItemList}</div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

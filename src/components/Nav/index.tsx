import React, { useState } from 'react';

interface PropsTypes {
  children: React.ComponentElement<any, any>[];
  centered?: boolean;
  ended?: boolean;
  vertical?: boolean;
  className?: string;
  tabs?: boolean;
  onChange?: any;
}

Nav.defaultProps = {
  centered: false,
  ended: false,
  vertical: false,
  className: '',
  tabs: false,
  onChange: () => {},
};

function Nav(props: PropsTypes) {
  const { children, centered, ended, vertical, className, tabs, onChange } = props;
  const activeListMap: { [key: string]: boolean } = {};
  const disabledListMap: { [key: string]: boolean } = {};
  const [activeStateMap, setActiveStateMap] = useState(activeListMap);
  const [disabledStateMap, setDisabledStateMap] = useState(disabledListMap);
  const navClasses: string[] = ['nav'];

  if (centered) navClasses.push('justify-content-center');
  if (ended) navClasses.push('justify-content-end');
  if (vertical) navClasses.push('flex-column');
  if (tabs) navClasses.push('nav-tabs');
  if (className) navClasses.push(className);

  if (!Object.keys(activeStateMap).length) {
    React.Children.forEach(children, (child) => {
      const { isActive, isDisabled, itemId } = child.props;
      if (itemId) {
        activeStateMap[itemId] = isActive;
        disabledStateMap[itemId] = isDisabled;
      }
    });
  }

  function clickHandler(itemId: string) {
    return () => {
      if (!disabledStateMap[itemId]) {
        Object.keys(activeStateMap).forEach((itemId) => {
          activeStateMap[itemId] = false;
        });
        activeStateMap[itemId] = true;
        setActiveStateMap(() => ({
          ...activeStateMap,
        }));
      }
      setDisabledStateMap(() => ({
        ...disabledStateMap,
      }));
      if (onChange) onChange(itemId);
    };
  }

  const NavItemList = React.Children.map(children, (child) => {
    const { itemId } = child.props;
    return React.cloneElement(child, {
      isActive: activeStateMap[itemId],
      isDisabled: disabledStateMap[itemId],
      onClick: !disabledStateMap[itemId] ? clickHandler(itemId) : null,
      type: tabs ? 'tab' : 'nav',
    });
  });

  return (
    <>
      {tabs && <nav className={navClasses.join(' ')}>{NavItemList}</nav>}
      {!tabs && <nav className={navClasses.join(' ')}>{NavItemList}</nav>}
    </>
  );
}

export default Nav;

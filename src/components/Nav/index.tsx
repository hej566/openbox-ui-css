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
      const { active, disabled } = child.props;
      const { key } = child;
      if (key) {
        activeStateMap[key] = active;
        disabledStateMap[key] = disabled;
      }
    });
  }

  function clickHandler(key: string) {
    return () => {
      if (!disabledStateMap[key]) {
        for (const id in activeStateMap) {
          activeStateMap[id] = false;
        }
        activeStateMap[key] = true;

        setActiveStateMap(() => ({
          ...activeStateMap,
        }));
      }
      setDisabledStateMap(() => ({
        ...disabledStateMap,
      }));
      if (onChange) onChange(key);
    };
  }

  const NavItemList = React.Children.map(children, (child) => {
    const { key } = child;
    if (key) {
      return React.cloneElement(child, {
        active: activeStateMap[key],
        disabled: disabledStateMap[key],
        onClick: !disabledStateMap[key] ? clickHandler(String(key)) : null,
        type: tabs ? 'tab' : 'nav',
      });
    }
  });

  return (
    <>
      {tabs && <nav className={navClasses.join(' ')}>{NavItemList}</nav>}
      {!tabs && (
        <nav className={navClasses.join(' ')} role="navigation">
          {NavItemList}
        </nav>
      )}
    </>
  );
}

export default Nav;

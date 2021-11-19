import React, { Children, useEffect, useState } from 'react';
import MenuContext from '../MenuContext';

interface PropsTypes {
  children: React.ComponentElement<any, any>[];
  className?: string;
  onChange?: any;
  disabled?: boolean;
  defaultActiveId?: string;
  defaultOpenKey?: string[];
  collapsed?: boolean;
}

Menu.defaultProps = {
  className: '',
  onChange: () => {},
  disabled: false,
  defaultActiveId: '',
  defaultOpenKey: [''],
  collapsed: false,
};

function Menu(props: PropsTypes) {
  const { children, className, onChange, disabled, defaultActiveId, defaultOpenKey, collapsed } =
    props;
  const activeMap: { [key: string]: boolean } = {};
  const disabledMap: { [key: string]: boolean } = {};
  const openMap: { [key: string]: boolean } = {};
  const [activeStateMap, setActiveStateMap] = useState(activeMap);
  const [disabledStateMap, setDisabledStateMap] = useState(disabledMap);
  const [openStateMap, setOpenStateMap] = useState(openMap);
  const menuClasses: string[] = ['menu'];
  const collection: React.ComponentElement<any, any>[] = [];
  const map: { [key: string]: React.ComponentElement<any, any> } = {};
  const [componentsMap, setComponentsMap] = useState(map);
  if (className) menuClasses.push(className);

  if (!Object.keys(activeStateMap).length) {
    React.Children.map(children, (child) => {
      collection.push(child);
    });
    allComponents(componentsMap, collection);
    setComponentsMap(() => ({ ...componentsMap }));
  }

  function allComponents(map: any, component: any) {
    if (typeof component === 'object' && component instanceof Array) {
      for (const subcomponent of component) {
        map[subcomponent.key] = subcomponent;
        allComponents(map, subcomponent.props.children);
      }
    } else if (typeof component === 'object' && component instanceof Object) {
      map[component.key] = component;
      allComponents(map, component.props.children);
    }
  }

  if (!Object.keys(activeStateMap).length) {
    for (const key in componentsMap) {
      const { active, disabled, open } = componentsMap[key].props;
      if (active !== null && disabled !== null && open !== null) {
        activeStateMap[key] = active;
        disabledStateMap[key] = disabled;
        openStateMap[key] = open;
      }
      if (defaultActiveId) {
        activeStateMap[defaultActiveId] = true;
      }
      if (defaultOpenKey) {
        for (let i = 0; i < defaultOpenKey.length; i += 1) {
          openStateMap[defaultOpenKey[i]] = true;
        }
      }
    }
    setActiveStateMap(() => ({
      ...activeStateMap,
    }));
    setOpenStateMap(() => ({
      ...openStateMap,
    }));
  }

  function clickHandler(key: string) {
    return (e: any) => {
      e.stopPropagation();
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

  if (collapsed) {
    menuClasses.push('horizontal-collapse');
    // for (const key in openStateMap) {
    //   openStateMap[key] = false;
    // }
    // setOpenStateMap(() => ({ ...openStateMap }));
  }

  return (
    <menu className={menuClasses.join(' ')} role="navigation">
      <MenuContext.Provider
        value={{
          onClick: clickHandler,
          activeStateMap,
          disabledStateMap,
          openStateMap,
          collapsed: collapsed !== undefined ? collapsed : false,
        }}
      >
        {children}
      </MenuContext.Provider>
    </menu>
  );
}

export default Menu;

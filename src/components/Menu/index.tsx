import React, { useState } from 'react';
import MenuContext from '../MenuContext';

interface PropsTypes {
  children: React.ComponentElement<any, any>[];
  className?: string;
  onChange?: any;
  disabled?: boolean;
  defaultActiveId?: string;
  defaultOpenKey?: string[];
}

Menu.defaultProps = {
  className: '',
  onChange: () => {},
  disabled: false,
  defaultActiveId: '',
  defaultOpenKey: [''],
};

function Menu(props: PropsTypes) {
  const { children, className, onChange, disabled, defaultActiveId, defaultOpenKey } = props;
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

  // const MenuContext = React.createContext(clickHandler);

  // const AllComponentsList = Object.entries(componentsMap).map((component) =>
  //   React.cloneElement(component[1], {
  //     active: activeStateMap[component[0]],
  //     disabled: disabledStateMap[component[0]],
  //     // onClick: !disabledStateMap[component[0]] ? clickHandler(String(component[0])) : null,
  //   })
  // );
  //
  // const MenuItemList = AllComponentsList.filter((component) => {
  //   const { key } = component;
  //   if (key) return String(key).split('-').length === 1;
  // });

  // const MenuItemList = React.Children.map(children, (child) => {
  //   const { key } = child;
  //   if (key) {
  //
  //     return React.cloneElement(child, {
  //       active: activeStateMap[key],
  //       disabled: disabledStateMap[key],
  //       // onClick: !disabledStateMap[key] ? clickHandler(key)) : null,
  //     });
  //   }
  // });
  // console.log(MenuItemList[0] === componentsMap['1']);
  // MenuItemList[0] === componentsMap['4-1'];

  return (
    <menu className={menuClasses.join(' ')} role="navigation">
      <MenuContext.Provider
        value={{
          onClick: clickHandler,
          activeStateMap,
          disabledStateMap,
          openStateMap,
        }}
      >
        {children}
      </MenuContext.Provider>
    </menu>
  );
}

export default Menu;

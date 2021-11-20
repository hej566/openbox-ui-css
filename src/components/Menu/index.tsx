import React, { useState, useEffect } from 'react';
import tippy, { sticky } from 'tippy.js';
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
  const testArray: any[] = [];
  const [tippyArray, setTippyState] = useState(testArray);
  const [deleteBranch, setDeleteBranch] = useState(false);
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

  function resetCollapseTippy() {
    setDeleteBranch(false);
  }

  function clickHandler(key: string, type: string) {
    return (e: any) => {
      e.stopPropagation();
      if (type === 'leaf') {
        setDeleteBranch(true);
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
      }
    };
  }

  function setupTippy(component: any, content: string) {
    const tippyInstance = tippy(component, {
      allowHTML: true,
      interactive: true,
      arrow: true,
      trigger: 'mouseenter',
      content: `<div>${content}</div>`,
      appendTo: component,
      plugins: [sticky],
      maxWidth: 'none',
      placement: 'right',
      sticky: true,
      theme: 'rb-tooltip',
    });
    tippyArray.push(tippyInstance);
  }

  function destoryTippys() {
    for (const instance of tippyArray) {
      instance.destroy();
    }
    setTippyState(() => []);
  }

  useEffect(() => {
    if (collapsed) {
      Array.from(document.querySelectorAll('menu .menu-item')).map((item) => {
        if (item.textContent) setupTippy(item, item.textContent);
        setTippyState(() => [...tippyArray]);
      });
    } else {
      destoryTippys();
    }
  }, [collapsed]);

  if (collapsed) {
    menuClasses.push('horizontal-collapse');
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
          deleteBranch,
          resetCollapseTippy,
        }}
      >
        {children}
      </MenuContext.Provider>
    </menu>
  );
}

export default Menu;

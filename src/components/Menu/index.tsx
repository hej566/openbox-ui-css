import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
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
  const componentMap: { [key: string]: React.ComponentElement<any, any> } = {};
  const testArray: any[] = [];
  const [tippyArray, setTippyState] = useState(testArray);
  const [hideTippy, setHideTippy] = useState(false);
  if (className) menuClasses.push(className);
  const menuRef = useRef<HTMLDivElement>(null);

  if (collapsed) menuClasses.push('horizontal-collapse');

  const getAllComponents = (map: any, component: any) => {
    if (typeof component === 'object' && component instanceof Array) {
      for (const subcomponent of component) {
        map[subcomponent.key] = subcomponent;
        getAllComponents(map, subcomponent.props.children);
      }
    } else if (typeof component === 'object' && component instanceof Object) {
      map[component.key] = component;
      getAllComponents(map, component.props.children);
    }
  };

  if (!Object.keys(activeStateMap).length) {
    React.Children.map(children, (child) => {
      collection.push(child);
    });
    getAllComponents(componentMap, collection);

    for (const key in componentMap) {
      const { active, disabled, open } = componentMap[key].props;
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
  }

  const resetHideTippy = () => {
    setHideTippy(false);
  };

  const clickHandler = (key: string, type: string) => (e: any) => {
    e.stopPropagation();
    if (type === 'leaf') {
      if (collapsed) setHideTippy(true);
      if (!disabledStateMap[key]) {
        for (const id in activeStateMap) {
          activeStateMap[id] = false;
        }
        activeStateMap[key] = true;
      }
      setDisabledStateMap(() => ({
        ...disabledStateMap,
      }));
      setActiveStateMap(() => ({
        ...activeStateMap,
      }));
      if (onChange) onChange(key);
    }
  };

  const setupTippy = (component: any, content: string) => {
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
  };

  const destroyTippys = () => {
    for (const instance of tippyArray) {
      instance.destroy();
    }
    setTippyState(() => []);
  };

  useEffect(() => {
    if (collapsed) {
      const menuDom = menuRef.current;
      if (menuDom) {
        Array.from(menuDom.querySelectorAll(':scope > .menu-item')).map((item) => {
          if (item.textContent) setupTippy(item, item.textContent);
          setTippyState(() => [...tippyArray]);
        });
      }
    } else {
      if (tippyArray.length) destroyTippys();
    }
  }, [collapsed]);

  return (
    <menu className={menuClasses.join(' ')} role="navigation" ref={menuRef}>
      <MenuContext.Provider
        value={{
          onClick: clickHandler,
          activeStateMap,
          disabledStateMap,
          openStateMap,
          collapsed: collapsed !== undefined ? collapsed : false,
          hideTippy,
          resetHideTippy,
        }}
      >
        {children}
      </MenuContext.Provider>
    </menu>
  );
}

export default React.memo(Menu);

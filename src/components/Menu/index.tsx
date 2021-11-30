import React, { useState, useEffect, useRef } from 'react';
import tippy, { sticky } from 'tippy.js';
import MenuContext from '../MenuContext';

const Menu = React.forwardRef<HTMLDivElement, propTypes>((props: propTypes, ref) => {
  const { className, onChange, disabled, defaultActiveId, defaultOpenKey, collapsed, children } =
    props;
  const [activeStateMap, setActiveStateMap] = useState<{ [key: string]: boolean }>({});
  const [disabledStateMap, setDisabledStateMap] = useState<{ [key: string]: boolean }>({});
  const [tippysArray, setTippyState] = useState<any[]>([]);
  const [hideTippy, setHideTippy] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const collection: React.ComponentElement<any, any>[] = [];
  const componentMap: { [key: string]: React.ComponentElement<any, any> } = {};
  const openStateMap: { [key: string]: boolean } = {};
  const menuClasses: string[] = ['menu'];

  if (className) menuClasses.push(className);
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
    tippysArray.push(tippyInstance);
  };

  const destroyTippys = () => {
    for (const instance of tippysArray) {
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
          setTippyState(() => [...tippysArray]);
        });
      }
    } else {
      if (tippysArray.length) destroyTippys();
    }
  }, [collapsed]);

  return (
    <div className={menuClasses.join(' ')} role="navigation" ref={menuRef}>
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
    </div>
  );
});

type propTypes = {
  children: any;
  className?: string;
  onChange?: any;
  disabled?: boolean;
  defaultActiveId?: string;
  defaultOpenKey?: string[];
  collapsed?: boolean;
};

Menu.defaultProps = {
  className: '',
  onChange: () => {},
  disabled: false,
  defaultActiveId: '',
  defaultOpenKey: [''],
  collapsed: false,
};

export default React.memo(Menu);

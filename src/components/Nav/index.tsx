import React, { useState } from 'react';

interface PropsTypes {
  children: React.ComponentElement<any, any>[];
}

function Nav(props: PropsTypes) {
  const { children } = props;
  const activeListMap: { [key: string]: boolean } = {};
  const disabledListMap: { [key: string]: boolean } = {};
  const [activeStateMap, setActiveStateMap] = useState(activeListMap);
  const [disabledStateMap, setDisabledStateMap] = useState(disabledListMap);

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

        setActiveStateMap(() => {
          return {
            ...activeStateMap,
          };
        });
      }
      setDisabledStateMap(() => {
        return {
          ...disabledStateMap,
        };
      });
    };
  }

  const List = React.Children.map(children, (child) => {
    const { key } = child;
    if (key) {
      return React.cloneElement(child, {
        active: activeStateMap[key],
        disabled: disabledStateMap[key],
        onClick: clickHandler(String(key)),
      });
    }
  });

  return <ul className="nav">{List}</ul>;
}

export default Nav;

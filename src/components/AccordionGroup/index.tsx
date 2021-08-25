import React, { useState } from 'react';

interface PropsTypes {
  children: React.ComponentElement<any, any>[];
  only?: boolean;
}

AccordionGroup.defaultProps = {
  only: false,
} as PropsTypes;

function AccordionGroup(props: PropsTypes) {
  const { children, only } = props;
  const initObject: { [key: string]: boolean } = {};
  const [stateMap, setStateMap] = useState(initObject);

  if (!Object.keys(stateMap).length) {
    React.Children.forEach(children, (child) => {
      const { show } = child.props;
      const { key } = child;
      if (key) stateMap[key] = show;
    });
  }

  function accordionHandler(child: any, mode: undefined | boolean) {
    return (e: React.MouseEvent<HTMLElement>) => {
      const { key } = child;
      if (mode) {
        if (stateMap[key]) stateMap[key] = false;
        else {
          for (const mapKey in stateMap) {
            stateMap[mapKey] = false;
          }
          stateMap[key] = true;
        }
      } else {
        stateMap[key] = !stateMap[key];
      }

      setStateMap(() => {
        return {
          ...stateMap,
        };
      });
    };
  }

  const accordionList = React.Children.map(children, (child) => {
    const { key } = child;
    if (key) {
      return React.cloneElement(child, {
        show: stateMap[key],
        onClick: accordionHandler(child, only),
      });
    }
  });

  return <div className="accordion">{accordionList}</div>;
}

export default AccordionGroup;

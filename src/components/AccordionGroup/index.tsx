import React, { useState } from 'react';

interface PropsTypes {
  children: React.ComponentElement<any, any>[];
  only?: boolean;
  flush?: boolean;
}

AccordionGroup.defaultProps = {
  only: false,
  flush: false,
} as PropsTypes;

function AccordionGroup(props: PropsTypes) {
  const { children, only, flush } = props;
  const initObject: { [key: string]: boolean } = {};
  const [stateMap, setStateMap] = useState(initObject);

  const accordionGroup: Array<string> = [`${ns}-accordion-group`];

  if (flush) {
    accordionGroup.push(`${ns}-accordion-flush`);
  }

  if (!Object.keys(stateMap).length) {
    React.Children.forEach(children, (child) => {
      const { open } = child.props;
      const { key } = child;
      if (key) stateMap[key] = open;
    });
  }

  function accordionHandler(child: React.ComponentElement<any, any>, mode: undefined | boolean) {
    return (e: React.MouseEvent<HTMLElement>) => {
      const { key } = child;
      if (mode) {
        if (key) {
          if (stateMap[key]) stateMap[key] = false;
          else {
            for (const mapKey in stateMap) {
              stateMap[mapKey] = false;
            }
            stateMap[key] = true;
          }
        }
      } else {
        if (key) stateMap[key] = !stateMap[key];
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
        open: stateMap[key],
        onClick: accordionHandler(child, only),
      });
    }
  });

  return <div className={accordionGroup.join(' ')}>{accordionList}</div>;
}

export default AccordionGroup;

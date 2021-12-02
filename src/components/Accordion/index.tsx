import React, { useState } from 'react';

const Accordion = React.forwardRef<HTMLDivElement, propTypes>((props: propTypes, ref) => {
  const { children, only, flush, className } = props;
  const [stateMap, setStateMap] = useState<{ [key: string]: boolean }>({});
  const accordionGroupClasses: Array<string> = [`${NS}-accordion-group`];

  if (flush) accordionGroupClasses.push(`${NS}-accordion-flush`);
  if (className) accordionGroupClasses.push(className);

  if (!Object.keys(stateMap).length) {
    React.Children.forEach(children, (child) => {
      const { open } = child.props;
      const { key } = child;
      if (key) stateMap[key] = open;
    });
  }

  const accordionHandler =
    (child: React.ComponentElement<any, any>, mode: undefined | boolean) =>
    (e: React.MouseEvent<HTMLElement>) => {
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

      setStateMap(() => ({
        ...stateMap,
      }));
    };

  const accordionList = React.Children.map(children, (child) => {
    const { key } = child;
    if (key) {
      return React.cloneElement(child, {
        isOpen: stateMap[key],
        onClick: accordionHandler(child, only),
      });
    }
  });

  return <div className={accordionGroupClasses.join(' ')}>{accordionList}</div>;
});

type propTypes = {
  children: React.ComponentElement<any, any>[] | React.ComponentElement<any, any>;
  only?: boolean;
  flush?: boolean;
  className?: string;
};

Accordion.defaultProps = {
  only: false,
  flush: false,
  className: '',
};

export default Accordion;

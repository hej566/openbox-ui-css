import React, { useState } from 'react';

const Accordion = React.forwardRef<HTMLDivElement, propTypes>((props: propTypes, ref) => {
  const { children, only, flush, className } = props;
  const [openStateMap, setStateMap] = useState<{ [key: string]: boolean }>({});
  const accordionGroupClasses: string[] = [`accordion-group`];

  if (flush) accordionGroupClasses.push(`accordion--flush`);
  if (className) accordionGroupClasses.push(className);

  if (!Object.keys(openStateMap).length) {
    React.Children.forEach(children, (child) => {
      const { isOpen } = child.props;
      const { key } = child;
      if (key) openStateMap[key] = isOpen;
    });
  }

  const accordionHandler =
    (child: React.ComponentElement<any, any>, mode: undefined | boolean) =>
    (e: React.MouseEvent<HTMLElement>) => {
      const { key } = child;
      if (mode) {
        if (key) {
          if (openStateMap[key]) openStateMap[key] = false;
          else {
            for (const mapKey in openStateMap) {
              openStateMap[mapKey] = false;
            }
            openStateMap[key] = true;
          }
        }
      } else {
        if (key) openStateMap[key] = !openStateMap[key];
      }

      setStateMap(() => ({
        ...openStateMap,
      }));
    };

  const accordionList = React.Children.map(children, (child) => {
    const { key } = child;
    if (key) {
      return React.cloneElement(child, {
        isOpen: openStateMap[key],
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

import React, { useState } from 'react';

const Accordion = React.forwardRef<HTMLDivElement, propTypes>((props: propTypes, ref) => {
  const { children, only, flush, className } = props;
  const [openStateMap, setStateMap] = useState<{ [key: string]: boolean }>({});
  const accordionGroupClasses: string[] = [`accordion-group`];

  if (flush) accordionGroupClasses.push(`accordion--flush`);
  if (className) accordionGroupClasses.push(className);

  if (!Object.keys(openStateMap).length) {
    React.Children.forEach(children, (child) => {
      const { isOpen, itemId } = child.props;
      if (itemId) openStateMap[itemId] = isOpen;
    });
  }

  const accordionHandler =
    (child: React.ComponentElement<any, any>, mode: undefined | boolean) =>
    (e: React.MouseEvent<HTMLElement>) => {
      const { itemId } = child.props;
      if (mode) {
        if (itemId) {
          if (openStateMap[itemId]) openStateMap[itemId] = false;
          else {
            for (const mapKey in openStateMap) {
              openStateMap[mapKey] = false;
            }
            openStateMap[itemId] = true;
          }
        }
      } else {
        if (itemId) openStateMap[itemId] = !openStateMap[itemId];
      }

      setStateMap(() => ({
        ...openStateMap,
      }));
    };

  const accordionList = React.Children.map(children, (child) => {
    const { itemId } = child.props;
    if (itemId) {
      return React.cloneElement(child, {
        isOpen: openStateMap[itemId],
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

import React, { useState } from 'react';

interface PropsTypes {
  children: React.ComponentElement<any, any>[];
  className?: string;
  change: React.MouseEventHandler<HTMLElement>;
  flush?: boolean;
  numbered?: boolean;
  horizontal?: boolean;
}

ListGroup.defaultProps = {
  className: '',
  children: [],
  change: () => {},
  flush: false,
  numbered: false,
  horizontal: false,
} as PropsTypes;

function ListGroup(props: PropsTypes) {
  const { children, className, flush, numbered, horizontal } = props;
  const listGroupClasses: string[] = ['list-group'];
  const activeListMap: { [key: string]: boolean } = {};
  const disabledListMap: { [key: string]: boolean } = {};
  const [activeStateMap, setActiveStateMap] = useState(activeListMap);
  const [disabledStateMap, setDisabledStateMap] = useState(disabledListMap);
  if (className) listGroupClasses.push(className);

  if (flush) listGroupClasses.push('list-group-flush');
  if (numbered) listGroupClasses.push('list-group-numbered');
  if (horizontal) listGroupClasses.push('list-group-horizontal');

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
      }

      setActiveStateMap(() => {
        return {
          ...activeStateMap,
        };
      });
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
        onClick: clickHandler(String(key)),
      });
    }
  });

  return <ul className={listGroupClasses.join(' ')}>{List}</ul>;
}

export default ListGroup;

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
      const { active, disabled, itemId } = child.props;
      if (itemId) {
        activeStateMap[itemId] = active;
        disabledStateMap[itemId] = disabled;
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

        setActiveStateMap(() => ({
          ...activeStateMap,
        }));
        setDisabledStateMap(() => ({
          ...disabledStateMap,
        }));
      }
    };
  }

  const ListGroupItemList = React.Children.map(children, (child) => {
    const { itemId } = child.props;
    if (itemId) {
      return React.cloneElement(child, {
        isActive: activeStateMap[itemId],
        isDisabled: disabledStateMap[itemId],
        onClick: !disabledStateMap[itemId] ? clickHandler(String(itemId)) : null,
      });
    }
  });

  return <ul className={listGroupClasses.join(' ')}>{ListGroupItemList}</ul>;
}

export default ListGroup;

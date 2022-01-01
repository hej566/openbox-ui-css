import React, { useState } from 'react';

interface PropsTypes {
  children: any;
  ariaLabel?: string;
  size?: string;
  position?: string;
}

Pagination.defaultProps = {
  ariaLabel: '',
  size: '',
  position: '',
};

function Pagination(props: PropsTypes) {
  const { children, ariaLabel, size, position } = props;
  const paginationClasses: string[] = ['pagination'];
  const activeListMap: { [key: string]: boolean } = {};
  const disabledListMap: { [key: string]: boolean } = {};
  const [activeStateMap, setActiveStateMap] = useState(activeListMap);
  const [disabledStateMap, setDisabledStateMap] = useState(disabledListMap);

  if (size) paginationClasses.push(`pagination-${size}`);
  if (position) paginationClasses.push(`justify-content-${position}`);

  if (!Object.keys(activeStateMap).length) {
    React.Children.forEach(children, (child) => {
      const { isActive, isDisabled, itemId } = child.props;
      if (itemId) {
        activeStateMap[itemId] = isActive;
        disabledStateMap[itemId] = isDisabled;
      }
    });
  }

  function clickHandler(itemId: string) {
    return () => {
      Object.keys(activeStateMap).forEach((itemId) => {
        activeStateMap[itemId] = false;
      });
      activeStateMap[itemId] = true;
      setActiveStateMap(() => ({
        ...activeStateMap,
      }));
      setDisabledStateMap(() => ({
        ...disabledStateMap,
      }));
    };
  }

  const paginationItemList = React.Children.map(children, (child) => {
    const { itemId } = child.props;
    if (itemId) {
      return React.cloneElement(child, {
        isActive: activeStateMap[itemId],
        isDisabled: disabledStateMap[itemId],
        onClick: !disabledStateMap[itemId] ? clickHandler(itemId) : null,
      });
    }
  });

  return (
    <nav aria-label={ariaLabel}>
      <ul className={paginationClasses.join(' ')}>{paginationItemList}</ul>
    </nav>
  );
}

export default Pagination;

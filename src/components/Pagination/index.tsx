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

        setActiveStateMap(() => ({
          ...activeStateMap,
        }));
      }
      setDisabledStateMap(() => ({
        ...disabledStateMap,
      }));
    };
  }

  const paginationItemList = React.Children.map(children, (child) => {
    const { key } = child;
    if (key) {
      return React.cloneElement(child, {
        active: activeStateMap[key],
        disabled: disabledStateMap[key],
        onClick: !disabledStateMap[key] ? clickHandler(String(key)) : null,
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

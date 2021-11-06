import React, { useState } from 'react';

interface PropsTypes {
  children: React.ComponentElement<any, any>[];
  className?: string;
  onChange: any;
}

CheckboxGroup.defaultProps = {
  className: '',
  children: [],
  onChange: () => {},
} as PropsTypes;

function CheckboxGroup(props: PropsTypes) {
  const { children, className, onChange } = props;
  const checkboxGroupClasses: string[] = [`form-check-group`];

  const checkedListMap: { [key: string]: boolean } = {};
  const disabledListMap: { [key: string]: boolean } = {};
  const valueListMap: { [key: string]: string } = {};
  const [checkedStateMap, setCheckedStateMap] = useState(checkedListMap);
  const [disabledStateMap, setDisabledStateMap] = useState(disabledListMap);
  const [valueStateMap, setValueStateMap] = useState(valueListMap);

  if (className) checkboxGroupClasses.push(className);

  React.Children.forEach(children, (child) => {
    const { checked, disabled, value } = child.props;
    const { key } = child;
    if (key) {
      checkedStateMap[key] = checked;
      disabledStateMap[key] = disabled;
      valueStateMap[key] = value;
    }
  });

  function changeHandler(key: string) {
    return () => {
      if (!disabledStateMap[key]) {
        checkedStateMap[key] = !checkedStateMap[key];

        setCheckedStateMap(() => ({
          ...checkedStateMap,
        }));
      }
      setDisabledStateMap(() => ({
        ...disabledStateMap,
      }));
      if (onChange) {
        const stateList = [];
        for (const key in checkedStateMap) {
          const tmp = {
            key,
            checked: checkedStateMap[key],
            disabled: disabledStateMap[key],
            value: valueStateMap[key],
          };
          stateList.push(tmp);
        }
        onChange(stateList);
      }
    };
  }

  const CheckboxList = React.Children.map(children, (child) => {
    const { key } = child;
    if (key) {
      return React.cloneElement(child, {
        checked: checkedStateMap[key],
        disabled: disabledStateMap[key],
        onChange: !disabledStateMap[key] ? changeHandler(String(key)) : null,
      });
    }
  });

  return <div className={checkboxGroupClasses.join(' ')}>{CheckboxList}</div>;
}

export default CheckboxGroup;

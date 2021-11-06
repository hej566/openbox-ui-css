import React, { useState } from 'react';
import Checkbox from '../components/Checkbox';
import CheckboxGroup from '../components/CheckboxGroup';

function Checkboxes() {
  const [isChecked, setChecked] = useState(false);
  const initGroupStateList = [
    { key: '1', checked: true, disabled: false, value: '1' },
    { key: '2', checked: true, disabled: false, value: '2' },
    { key: '3', checked: false, disabled: false, value: '3' },
  ];
  const [groupStateList, setGroupStateList] = useState(initGroupStateList);

  let indeterminated4 = false;
  const checked4 =
    initGroupStateList.filter((item) => item.checked).length === initGroupStateList.length;
  if (!checked4 && initGroupStateList.filter((item) => item.checked).length > 0) {
    indeterminated4 = true;
  }

  const [isChecked4, setChecked4] = useState(checked4);
  const [isIndeterminated4, setIndeterminated4] = useState(indeterminated4);

  function clickHandler() {
    setChecked(!isChecked);
  }

  function clickHandler4(e: any) {
    if (e.currentTarget.checked) {
      for (const checkbox of groupStateList) {
        if (!checkbox.disabled) {
          checkbox.checked = true;
        }
      }
    } else {
      for (const checkbox of groupStateList) {
        if (!checkbox.disabled) {
          checkbox.checked = false;
        }
      }
    }
    updateHandler(groupStateList);
  }

  function updateHandler(state: any) {
    const checked = state.filter((item: any) => item.checked);
    if (!checked.length) {
      setChecked4(() => false);
      setIndeterminated4(() => false);
    } else if (checked.length === state.length) {
      setChecked4(() => true);
      setIndeterminated4(() => false);
    } else {
      setChecked4(() => false);
      setIndeterminated4(() => true);
    }
    setGroupStateList(() => [...state]);
  }

  return (
    <div className="rc-navbars">
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic toast</div>
        <div className="rc-group">
          <div className="rc-item">
            <Checkbox label="Default checkbox" checked={isChecked} onChange={clickHandler} />
          </div>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic toast</div>
        <div className="rc-group">
          <div className="rc-item">
            <Checkbox
              label="Default checkbox"
              checked={isChecked}
              onChange={clickHandler}
              disabled
            />
          </div>
          <div className="rc-item">
            <Checkbox label="Default checkbox" checked disabled />
          </div>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic toast</div>
        <div className="rc-group">
          <div className="rc-item">
            <Checkbox
              label="Default checkbox"
              checked={isChecked4}
              onChange={clickHandler4}
              indeterminate={isIndeterminated4}
            />
            <CheckboxGroup onChange={updateHandler}>
              {groupStateList.map((item) => (
                <Checkbox
                  label="Default checkbox"
                  checked={item.checked}
                  value={item.value}
                  disabled={item.disabled}
                  key={item.key}
                />
              ))}
            </CheckboxGroup>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkboxes;

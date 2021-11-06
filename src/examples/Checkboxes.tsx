import React, { useState } from 'react';
import Checkbox from '../components/Checkbox';
import CheckboxGroup from '../components/CheckboxGroup';

function Checkboxes() {
  const [isChecked, setChecked] = useState(false);
  const [isChecked4, setChecked4] = useState(false);
  const [isIndeterminated, setIndeterminated] = useState(false);
  const initGroupStateList = [
    { key: '1', checked: false, disabled: false },
    { key: '2', checked: false, disabled: false },
    { key: '3', checked: false, disabled: false },
  ];
  const [groupStateList, setGroupStateList] = useState(initGroupStateList);

  function clickHandler() {
    setChecked(!isChecked);
  }

  function clickHandler4(e: any) {
    if (e.currentTarget.checked) {
      setChecked4(true);
      setIndeterminated(false);
      setGroupStateList(() => {
        for (const checkbox of groupStateList) {
          checkbox.checked = true;
        }
        return [...groupStateList];
      });
    } else {
      setChecked4(false);
      setIndeterminated(false);
      setGroupStateList(() => {
        for (const checkbox of groupStateList) {
          checkbox.checked = false;
        }
        return [...groupStateList];
      });
    }
  }

  function changeHandler(state: any) {
    const filter = state.filter((item: any) => item.checked);
    if (!filter.length) {
      setChecked4(false);
      setIndeterminated(false);
    } else if (filter.length === state.length) {
      setChecked4(true);
      setIndeterminated(false);
    } else {
      setChecked4(false);
      setIndeterminated(true);
    }
    setGroupStateList(() => [...state]);
  }

  console.log(isIndeterminated);

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
              indeterminate={isIndeterminated}
            />
            <CheckboxGroup onChange={changeHandler}>
              <Checkbox
                label="Default checkbox"
                checked={groupStateList[0].checked}
                key={groupStateList[0].key}
              />
              <Checkbox
                label="Default checkbox"
                checked={groupStateList[1].checked}
                key={groupStateList[1].key}
              />
              <Checkbox
                label="Default checkbox"
                checked={groupStateList[2].checked}
                key={groupStateList[2].key}
              />
            </CheckboxGroup>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkboxes;

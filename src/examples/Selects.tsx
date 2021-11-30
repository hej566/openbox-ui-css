import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Select from '../components/Select';
import Icon from '../components/Icon';
import SelectItem from '../components/SelectItem';

function Selects() {
  const selectList = [
    { key: '1', name: 'Action' },
    { key: '2', name: 'Another action' },
    { key: '3', name: 'Something else here' },
    { key: '4', name: 'Separated link' },
  ];
  const [selectName, setSelectName] = useState('Dropdown button');
  function changeHandler(itemKey: any) {
    for (const { key, name } of selectList) {
      if (key === itemKey) {
        setSelectName(name);
      }
    }
  }
  return (
    <div className="rc-dropdowns">
      <section className="rc-dropdown-basic">
        <div className="rc-title">Basic dropdown</div>
        <div className="rc-group">
          <Select buttonName={selectName} onChange={changeHandler} variant="link" type="select">
            <SelectItem active key={selectList[0].key}>
              {selectList[0].name}
            </SelectItem>
            <SelectItem disabled key={selectList[1].key}>
              {selectList[1].name}
            </SelectItem>
            <SelectItem key={selectList[2].key}>
              <a>{selectList[2].name}</a>
            </SelectItem>
            <hr className="select-divider" />
            <SelectItem key={selectList[3].key}>{selectList[3].name}</SelectItem>
          </Select>
        </div>
        <div className="rc-group">
          <Select buttonName={selectName} onChange={changeHandler} variant="link" size="lg">
            <SelectItem active key={selectList[0].key}>
              {selectList[0].name}
            </SelectItem>
            <SelectItem disabled key={selectList[1].key}>
              {selectList[1].name}
            </SelectItem>
            <SelectItem key={selectList[2].key}>
              <a>{selectList[2].name}</a>
            </SelectItem>
            <hr className="select-divider" />
            <SelectItem key={selectList[3].key}>{selectList[3].name}</SelectItem>
          </Select>
        </div>
        <div className="rc-group">
          <Select buttonName={selectName} onChange={changeHandler} variant="primary" size="sm">
            <SelectItem active key={selectList[0].key}>
              {selectList[0].name}
            </SelectItem>
            <SelectItem disabled key={selectList[1].key}>
              {selectList[1].name}
            </SelectItem>
            <SelectItem key={selectList[2].key}>
              <a>{selectList[2].name}</a>
            </SelectItem>
            <hr className="select-divider" />
            <SelectItem key={selectList[3].key}>{selectList[3].name}</SelectItem>
          </Select>
        </div>
        <div className="rc-group col-6">
          <Select
            buttonName={selectName}
            onChange={changeHandler}
            variant="link"
            type="select"
            disabled
          >
            <SelectItem active key={selectList[0].key}>
              {selectList[0].name}
            </SelectItem>
            <SelectItem disabled key={selectList[1].key}>
              {selectList[1].name}
            </SelectItem>
            <SelectItem key={selectList[2].key}>
              <a>{selectList[2].name}</a>
            </SelectItem>
            <hr className="select-divider" />
            <SelectItem key={selectList[3].key}>{selectList[3].name}</SelectItem>
          </Select>
        </div>
      </section>
    </div>
  );
}

export default Selects;

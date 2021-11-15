import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputGroup from '../components/InputGroup';
import Checkbox from '../components/Checkbox';
import Radio from '../components/Radio';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';
import Input from '../components/Input';
import Textarea from '../components/Textarea';

function InputGroups() {
  const [isChecked, setChecked] = useState(false);

  function clickHandler() {
    setChecked(!isChecked);
  }

  return (
    <div className="rc-navbars">
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic toast</div>
        <div className="rc-group">
          <div className="rc-item">
            <InputGroup className="mb-3">
              <span className="input-group-text">@</span>
              <Input placeholder="Username" value="" />
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3">
              <Input placeholder="Recipient's username" value="" />
              <span className="input-group-text">@example.com</span>
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3">
              <span className="input-group-text">$</span>
              <Input value="" />
              <span className="input-group-text">.00</span>
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3">
              <span className="input-group-text">With textarea</span>
              <Textarea />
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="flex-nowrap mb-3">
              <Input value="" />
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup size="sm" className="mb-3">
              <span className="input-group-text">small</span>
              <Input value="" />
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3">
              <span className="input-group-text">normal</span>
              <Input value="" />
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3" size="lg">
              <span className="input-group-text">normal</span>
              <Input value="" />
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3">
              <span className="input-group-text">
                <Checkbox checked={isChecked} onChange={clickHandler} />
              </span>
              <Input value="" />
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3">
              <span className="input-group-text">
                <Radio name="test" value="1" checked />
              </span>
              <Input value="" />
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3">
              <span className="input-group-text">normal</span>
              <Input value="" />
              <Input value="" />
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3">
              <span className="input-group-text">$</span>
              <span className="input-group-text">0.00</span>
              <Input value="" />
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3">
              <Button variant="outline-secondary">Button</Button>
              <Input value="" />
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3">
              <Input value="" />
              <Button variant="outline-secondary">Button</Button>
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3">
              <Button variant="outline-secondary">Button</Button>
              <Button variant="outline-secondary">Button</Button>
              <Input value="" />
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3">
              <Input value="" />
              <Button variant="outline-secondary">Button</Button>
              <Button variant="outline-secondary">Button</Button>
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3">
              <Dropdown variant="outline-secondary" buttonName="Dropdown">
                <DropdownItem active key={uuidv4()}>
                  Action
                </DropdownItem>
                <DropdownItem disabled key={uuidv4()}>
                  Another action
                </DropdownItem>
                <DropdownItem key={uuidv4()}>
                  <a>Something else here</a>
                </DropdownItem>
                <hr className="dropdown-divider" />
                <DropdownItem key={uuidv4()}>Separated link</DropdownItem>
              </Dropdown>
              <Input value="" />
            </InputGroup>
          </div>
          <div className="rc-item">
            <InputGroup className="mb-3">
              <Dropdown variant="outline-secondary" buttonName="Dropdown" split>
                <DropdownItem active key={uuidv4()}>
                  Action
                </DropdownItem>
                <DropdownItem disabled key={uuidv4()}>
                  Another action
                </DropdownItem>
                <DropdownItem key={uuidv4()}>
                  <a>Something else here</a>
                </DropdownItem>
                <hr className="dropdown-divider" />
                <DropdownItem key={uuidv4()}>Separated link</DropdownItem>
              </Dropdown>
              <Input value="" />
            </InputGroup>
            <InputGroup className="mb-3">
              <Input value="" />
              <Dropdown variant="outline-secondary" buttonName="Dropdown" split>
                <DropdownItem active key={uuidv4()}>
                  Action
                </DropdownItem>
                <DropdownItem disabled key={uuidv4()}>
                  Another action
                </DropdownItem>
                <DropdownItem key={uuidv4()}>
                  <a>Something else here</a>
                </DropdownItem>
                <hr className="dropdown-divider" />
                <DropdownItem key={uuidv4()}>Separated link</DropdownItem>
              </Dropdown>
            </InputGroup>
            <InputGroup className="mb-3">
              <Input value="" />
              <Dropdown variant="outline-secondary" buttonName="Dropdown">
                <DropdownItem active key={uuidv4()}>
                  Action
                </DropdownItem>
                <DropdownItem disabled key={uuidv4()}>
                  Another action
                </DropdownItem>
                <DropdownItem key={uuidv4()}>
                  <a>Something else here</a>
                </DropdownItem>
                <hr className="dropdown-divider" />
                <DropdownItem key={uuidv4()}>Separated link</DropdownItem>
              </Dropdown>
            </InputGroup>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InputGroups;

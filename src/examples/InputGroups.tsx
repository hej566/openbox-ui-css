import React, { useState } from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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

  const basic = `
    import InputGroup from '../components/InputGroup';
    import Input from '../components/Input';
    import Textarea from '../components/Textarea';

    <InputGroup className="mb-3">
      <span className="input-group-text">@</span>
      <Input placeholder="Username" value="" />
    </InputGroup>
    
    <InputGroup className="mb-3">
      <Input placeholder="Recipient's username" value="" />
      <span className="input-group-text">@example.com</span>
    </InputGroup>
    
    <InputGroup className="mb-3">
      <span className="input-group-text">$</span>
      <Input value="" placeholder="some text" />
      <span className="input-group-text">.00</span>
    </InputGroup>
    
    <InputGroup className="mb-3">
      <span className="input-group-text">With textarea</span>
      <Textarea placeholder="some text" />
    </InputGroup>
  `;

  const sizing = `
    import InputGroup from '../components/InputGroup';
    import Input from '../components/Input';

    <InputGroup size="sm" className="mb-3">
       <span className="input-group-text">small</span>
       <Input value="" placeholder="some text" />
    </InputGroup>
     
    <InputGroup className="mb-3">
       <span className="input-group-text">normal</span>
       <Input value="" placeholder="some text" />
    </InputGroup>
     
    <InputGroup className="mb-3" size="lg">
       <span className="input-group-text">large</span>
       <Input value="" placeholder="some text" />
    </InputGroup>
  `;

  const checksRadios = `
    import InputGroup from '../components/InputGroup';
    import Input from '../components/Input';
    import Checkbox from '../components/Checkbox';
    import Radio from '../components/Radio';
    
    const [isChecked, setChecked] = useState(false);

    function clickHandler() {
      setChecked(!isChecked);
    }
    
    <InputGroup className="mb-3">
      <span className="input-group-text">
        <Checkbox isChecked={isChecked} onChange={clickHandler} />
      </span>
      <Input value="" placeholder="some text" />
    </InputGroup>
    
    <InputGroup className="mb-3">
      <span className="input-group-text">
        <Radio name="test" value="1" isChecked />
      </span>
      <Input value="" placeholder="some text" />
    </InputGroup>
  `;

  const multipleInputs = `
    import InputGroup from '../components/InputGroup';
    import Input from '../components/Input';
    
    <InputGroup className="mb-3">
      <span className="input-group-text">normal</span>
      <Input value="" placeholder="some text" />
      <Input value="" placeholder="some text" />
    </InputGroup>
  `;

  const multipleAddons = `
    import InputGroup from '../components/InputGroup';
    import Input from '../components/Input';
    
    <InputGroup className="mb-3">
      <span className="input-group-text">$</span>
      <span className="input-group-text">0.00</span>
      <Input value="" placeholder="some text" />
    </InputGroup>
  `;

  const buttonAddons = `
    import InputGroup from '../components/InputGroup';
    import Input from '../components/Input';
    
    <InputGroup className="mb-3">
      <Button variant="outline-secondary">Button</Button>
      <Input value="" placeholder="some text" />
    </InputGroup>
    
    <InputGroup className="mb-3">
      <Input value="" placeholder="some text" />
      <Button variant="outline-secondary">Button</Button>
    </InputGroup>
    
    <InputGroup className="mb-3">
      <Button variant="outline-secondary">Button</Button>
      <Button variant="outline-secondary">Button</Button>
      <Input value="" placeholder="some text" />
    </InputGroup>
    
    <InputGroup className="mb-3">
      <Input value="" placeholder="some text" />
      <Button variant="outline-secondary">Button</Button>
      <Button variant="outline-secondary">Button</Button>
    </InputGroup>
  `;

  const buttonDropdown = `
    import InputGroup from '../components/InputGroup';
    import Input from '../components/Input';
    
    <InputGroup className="mb-3">
      <Dropdown buttonName="Dropdown" variant="outline-secondary">
        <DropdownItem isActive itemId="1">
          Action
        </DropdownItem>
        <DropdownItem isDisabled itemId="2">
          Another action
        </DropdownItem>
        <DropdownItem itemId="3">Something else here</DropdownItem>
        <hr className="dropdown-divider" />
        <DropdownItem itemId="4">Separated link</DropdownItem>
      </Dropdown>
      <Input value="" placeholder="some text" />
    </InputGroup>
    
    <InputGroup className="mb-3">
      <Dropdown variant="outline-secondary" buttonName="Dropdown" split>
        <DropdownItem isActive itemId="1">
          Action
        </DropdownItem>
        <DropdownItem isDisabled itemId="2">
          Another action
        </DropdownItem>
        <DropdownItem itemId="3">Something else here</DropdownItem>
        <hr className="dropdown-divider" />
        <DropdownItem itemId="4">Separated link</DropdownItem>
      </Dropdown>
      <Input value="" placeholder="some text" />
    </InputGroup>
    
    <InputGroup className="mb-3">
      <Input value="" placeholder="some text" />
      <Dropdown variant="outline-secondary" buttonName="Dropdown" split>
        <DropdownItem isActive itemId="1">
          Action
        </DropdownItem>
        <DropdownItem isDisabled itemId="2">
          Another action
        </DropdownItem>
        <DropdownItem itemId="3">Something else here</DropdownItem>
        <hr className="dropdown-divider" />
        <DropdownItem itemId="4">Separated link</DropdownItem>
      </Dropdown>
    </InputGroup>
    
    <InputGroup className="mb-3">
      <Input value="" placeholder="some text" />
      <Dropdown variant="outline-secondary" buttonName="Dropdown">
        <DropdownItem isActive itemId="1">
          Action
        </DropdownItem>
        <DropdownItem isDisabled itemId="2">
          Another action
        </DropdownItem>
        <DropdownItem itemId="3">Something else here</DropdownItem>
        <hr className="dropdown-divider" />
        <DropdownItem itemId="4">Separated link</DropdownItem>
      </Dropdown>
    </InputGroup>
  `;

  return (
    <div className="rb-input-groups container-fluid">
      <section className="rb-input-group-basic">
        <h1 className="rb-title">Input group</h1>
        <div className="rb-group">
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <span className="input-group-text">@</span>
              <Input placeholder="Username" value="" />
            </InputGroup>
          </div>
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <Input placeholder="Recipient's username" value="" />
              <span className="input-group-text">@example.com</span>
            </InputGroup>
          </div>
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <span className="input-group-text">$</span>
              <Input value="" placeholder="some text" />
              <span className="input-group-text">.00</span>
            </InputGroup>
          </div>
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <span className="input-group-text">With textarea</span>
              <Textarea placeholder="some text" />
            </InputGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {basic}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-input-group-basic">
        <h1 className="rb-title">Sizing</h1>
        <div className="rb-group">
          <div className="rb-input-group-wrapper">
            <InputGroup size="sm" className="mb-3">
              <span className="input-group-text">small</span>
              <Input value="" placeholder="some text" />
            </InputGroup>
          </div>
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <span className="input-group-text">normal</span>
              <Input value="" placeholder="some text" />
            </InputGroup>
          </div>
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3" size="lg">
              <span className="input-group-text">normal</span>
              <Input value="" placeholder="some text" />
            </InputGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {sizing}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-input-group-basic">
        <h1 className="rb-title">Checks and radios</h1>
        <div className="rb-group">
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <span className="input-group-text">
                <Checkbox isChecked={isChecked} onChange={clickHandler} label="some label" />
              </span>
              <Input value="" placeholder="some text" />
            </InputGroup>
          </div>
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <span className="input-group-text">
                <Radio name="test" value="1" isChecked label="some label" />
              </span>
              <Input value="" placeholder="some text" />
            </InputGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {checksRadios}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-input-group-basic">
        <h1 className="rb-title">Multiple inputs</h1>
        <div className="rb-group">
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <span className="input-group-text">normal</span>
              <Input value="" placeholder="some text" />
              <Input value="" placeholder="some text" />
            </InputGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {multipleInputs}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-input-group-basic">
        <h1 className="rb-title">Multiple addons</h1>
        <div className="rb-group">
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <span className="input-group-text">$</span>
              <span className="input-group-text">0.00</span>
              <Input value="" placeholder="some text" />
            </InputGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {multipleAddons}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-input-group-basic">
        <h1 className="rb-title">Button addons</h1>
        <div className="rb-group">
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <Button variant="outline-secondary">Button</Button>
              <Input value="" placeholder="some text" />
            </InputGroup>
          </div>
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <Input value="" placeholder="some text" />
              <Button variant="outline-secondary">Button</Button>
            </InputGroup>
          </div>
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <Button variant="outline-secondary">Button</Button>
              <Button variant="outline-secondary">Button</Button>
              <Input value="" placeholder="some text" />
            </InputGroup>
          </div>
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <Input value="" placeholder="some text" />
              <Button variant="outline-secondary">Button</Button>
              <Button variant="outline-secondary">Button</Button>
            </InputGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {buttonAddons}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-input-group-basic">
        <h1 className="rb-title">Button with dropdowns</h1>
        <div className="rb-group">
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <Dropdown buttonName="Dropdown" variant="outline-secondary">
                <DropdownItem isActive itemId="1">
                  Action
                </DropdownItem>
                <DropdownItem isDisabled itemId="2">
                  Another action
                </DropdownItem>
                <DropdownItem itemId="3">Something else here</DropdownItem>
                <hr className="dropdown-divider" />
                <DropdownItem itemId="4">Separated link</DropdownItem>
              </Dropdown>
              <Input value="" placeholder="some text" />
            </InputGroup>
          </div>
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <Dropdown variant="outline-secondary" buttonName="Dropdown" split>
                <DropdownItem isActive itemId="1">
                  Action
                </DropdownItem>
                <DropdownItem isDisabled itemId="2">
                  Another action
                </DropdownItem>
                <DropdownItem itemId="3">Something else here</DropdownItem>
                <hr className="dropdown-divider" />
                <DropdownItem itemId="4">Separated link</DropdownItem>
              </Dropdown>
              <Input value="" placeholder="some text" />
            </InputGroup>
          </div>
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <Input value="" placeholder="some text" />
              <Dropdown variant="outline-secondary" buttonName="Dropdown" split>
                <DropdownItem isActive itemId="1">
                  Action
                </DropdownItem>
                <DropdownItem isDisabled itemId="2">
                  Another action
                </DropdownItem>
                <DropdownItem itemId="3">Something else here</DropdownItem>
                <hr className="dropdown-divider" />
                <DropdownItem itemId="4">Separated link</DropdownItem>
              </Dropdown>
            </InputGroup>
          </div>
          <div className="rb-input-group-wrapper">
            <InputGroup className="mb-3">
              <Input value="" placeholder="some text" />
              <Dropdown variant="outline-secondary" buttonName="Dropdown">
                <DropdownItem isActive itemId="1">
                  Action
                </DropdownItem>
                <DropdownItem isDisabled itemId="2">
                  Another action
                </DropdownItem>
                <DropdownItem itemId="3">Something else here</DropdownItem>
                <hr className="dropdown-divider" />
                <DropdownItem itemId="4">Separated link</DropdownItem>
              </Dropdown>
            </InputGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {buttonDropdown}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default InputGroups;

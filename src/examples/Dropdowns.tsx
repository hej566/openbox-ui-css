import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';

function Dropdowns() {
  const normal = `
    import Dropdown from '../components/Dropdown';
    import DropdownItem from '../components/DropdownItem';
    
    <Dropdown buttonName="Dropdown button" type="normal">
      <DropdownItem isActive itemId="1">
        Action
      </DropdownItem>
      <DropdownItem isDisabled itemId="2">
        Another action
      </DropdownItem>
      <DropdownItem itemId="3">
        Something else here
      </DropdownItem>
      <hr className="dropdown-divider" />
      <DropdownItem itemId="4">Separated link</DropdownItem>
    </Dropdown>
  `;

  const link = `
    import Dropdown from '../components/Dropdown';
    import DropdownItem from '../components/DropdownItem';
    
    <Dropdown variant="link" buttonName="Link dropdown" type="normal">
      <DropdownItem isActive itemId="1">
        Action
      </DropdownItem>
      <DropdownItem isDisabled itemId="2">
        Another action
      </DropdownItem>
      <DropdownItem itemId="3">
        Something else here
      </DropdownItem>
      <hr className="dropdown-divider" />
      <DropdownItem itemId="4">
        Separated link
      </DropdownItem>
    </Dropdown>
  `;

  const variant = `
    import Dropdown from '../components/Dropdown';
    import DropdownItem from '../components/DropdownItem';
    
    <Dropdown variant="primary" buttonName="Primary">
      <DropdownItem isActive itemId="1">
        Action
      </DropdownItem>
      <DropdownItem isDisabled itemId="2">
        Another action
      </DropdownItem>
      <DropdownItem itemId="3">
        Something else here
      </DropdownItem>
      <hr className="dropdown-divider" />
      <DropdownItem itemId="4">
        Separated link
      </DropdownItem>
    </Dropdown>
    <Dropdown variant="secondary" buttonName="Secondary">
      <DropdownItem isActive itemId="1">
        Action
      </DropdownItem>
      <DropdownItem isDisabled itemId="2">
        Another action
      </DropdownItem>
      <DropdownItem itemId="3">
        Something else here
      </DropdownItem>
      <hr className="dropdown-divider" />
      <DropdownItem itemId="4">
        Separated link
      </DropdownItem>
    </Dropdown>
    <Dropdown variant="success" buttonName="Success">
      <DropdownItem isActive itemId="1">
        Action
      </DropdownItem>
      <DropdownItem isDisabled itemId="2">
        Another action
      </DropdownItem>
      <DropdownItem itemId="3">
        Something else here
      </DropdownItem>
      <hr className="dropdown-divider" />
      <DropdownItem itemId="4">
        Separated link
      </DropdownItem>
    </Dropdown>
    <Dropdown variant="info" buttonName="Info">
      <DropdownItem isActive itemId="1">
        Action
      </DropdownItem>
      <DropdownItem isDisabled itemId="2">
        Another action
      </DropdownItem>
      <DropdownItem  itemId="3">
        Something else here
      </DropdownItem>
      <hr className="dropdown-divider" />
      <DropdownItem itemId="4">
        Separated link
      </DropdownItem>
    </Dropdown>
    <Dropdown variant="warning" buttonName="Warning">
      <DropdownItem isActive itemId="1">
        Action
      </DropdownItem>
      <DropdownItem isDisabled itemId="2">
        Another action
      </DropdownItem>
      <DropdownItem itemId="3">
        Something else here
      </DropdownItem>
      <hr className="dropdown-divider" />
      <DropdownItem itemId="4">
        Separated link
      </DropdownItem>
    </Dropdown>
    <Dropdown variant="danger" buttonName="Danger">
      <DropdownItem isActive itemId="1">
        Action
      </DropdownItem>
      <DropdownItem isDisabled itemId="2">
        Another action
      </DropdownItem>
      <DropdownItem itemId="3">
        Something else here
      </DropdownItem>
      <hr className="dropdown-divider" />
      <DropdownItem itemId="4">
        Separated link
      </DropdownItem>
    </Dropdown>
  `;

  const split = `
    <Dropdown variant="primary" buttonName="Split button" split>
      <DropdownItem isActive itemId="1">
        Action
      </DropdownItem>
      <DropdownItem isDisabled itemId="2">
        Another action
      </DropdownItem>
      <DropdownItem itemId="3">
        Something else here
      </DropdownItem>
      <DropdownItem itemId="4">Separated link</DropdownItem>
    </Dropdown>
  `;

  const disabled = `
    <Dropdown variant="primary" buttonName="Split button" isDisabled>
      <DropdownItem isActive itemId="1">
        Action
      </DropdownItem>
      <DropdownItem isDisabled itemId="2">
        Another action
      </DropdownItem>
      <DropdownItem itemId="3">
        Something else here
      </DropdownItem>
      <DropdownItem itemId="4">Separated link</DropdownItem>
    </Dropdown>
  `;

  return (
    <div className="rb-dropdowns">
      <section className="rb-dropdown-basic">
        <h1 className="rb-title">Single button</h1>
        <div className="rb-group">
          <div className="rb-dropdown-wrapper" style={{ display: 'block' }}>
            <Dropdown buttonName="Dropdown button" type="normal">
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
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {normal}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-dropdown-popper">
        <h1 className="rb-title">Link</h1>
        <div className="rb-group">
          <div className="rb-dropdown-wrapper" style={{ display: 'block' }}>
            <Dropdown variant="link" buttonName="Link dropdown" type="normal">
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
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {link}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-dropdown-variant">
        <h1 className="rb-title">Variant</h1>
        <div className="rb-group">
          <div className="rb-dropdown-wrapper">
            <Dropdown variant="primary" buttonName="Primary">
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
          </div>
          <div className="rb-dropdown-wrapper">
            <Dropdown variant="secondary" buttonName="Secondary">
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
          </div>
          <div className="rb-dropdown-wrapper">
            <Dropdown variant="success" buttonName="Success">
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
          </div>
          <div className="rb-dropdown-wrapper">
            <Dropdown variant="info" buttonName="Info">
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
          </div>
          <div className="rb-dropdown-wrapper">
            <Dropdown variant="warning" buttonName="Warning">
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
          </div>
          <div className="rb-dropdown-wrapper">
            <Dropdown variant="danger" buttonName="Danger">
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
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {variant}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-dropdown-split-button">
        <div className="rb-title">Split</div>
        <div className="rb-group">
          <div className="rb-dropdown-wrapper">
            <Dropdown variant="primary" buttonName="Split button" split>
              <DropdownItem isActive itemId="1">
                Action
              </DropdownItem>
              <DropdownItem isDisabled itemId="2">
                Another action
              </DropdownItem>
              <DropdownItem itemId="3">Something else here</DropdownItem>
              <DropdownItem itemId="4">Separated link</DropdownItem>
            </Dropdown>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {split}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rc-dropdown-item-disabled">
        <div className="rc-title">Disabled item dropdown</div>
        <div className="rc-group">
          <div className="rb-dropdown-wrapper">
            <Dropdown variant="secondary" buttonName="Dropdown button" theme="dark" isDisabled>
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
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {disabled}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Dropdowns;

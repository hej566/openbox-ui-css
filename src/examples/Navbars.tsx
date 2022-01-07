import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Navbar from '../components/Navbar';
import NavItem from '../components/NavItem';
import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';

function Navbars() {
  const basic = `
    import Navbar from '../components/Navbar';
    import NavItem from '../components/NavItem';
    import Dropdown from '../components/Dropdown';
    import DropdownItem from '../components/DropdownItem';
    
    <Navbar title="Navbar" className="navbar-expand-lg">
      <NavItem isActive itemId="1">
        Active
      </NavItem>
      <NavItem itemId="2">
        <Dropdown variant="link" buttonName="Dropdown" type="normal">
          <DropdownItem isActive itemId="3">
            Action
          </DropdownItem>
          <DropdownItem isDisabled itemId="4">
            Another action
          </DropdownItem>
          <DropdownItem itemId="5">
            <a>Something else here</a>
          </DropdownItem>
          <hr className="dropdown-divider" />
          <DropdownItem itemId="6">Separated link</DropdownItem>
        </Dropdown>
      </NavItem>
      <NavItem itemId="7">Link</NavItem>
      <NavItem itemId="8" isDisabled>
        Disabled
      </NavItem>
    </Navbar>
  `;

  const variant = `
    import Navbar from '../components/Navbar';
    import NavItem from '../components/NavItem';
    import Dropdown from '../components/Dropdown';
    import DropdownItem from '../components/DropdownItem';
    
    <Navbar title="Navbar" className="navbar-expand-lg" variant="dark" theme="dark">
      <NavItem isActive itemId="1">
        Active
      </NavItem>
      <NavItem itemId="2">
        <Dropdown variant="link" buttonName="Dropdown" type="normal">
          <DropdownItem isActive itemId="3">
            Action
          </DropdownItem>
          <DropdownItem isDisabled itemId="4">
            Another action
          </DropdownItem>
          <DropdownItem itemId="5">
            <a>Something else here</a>
          </DropdownItem>
          <hr className="dropdown-divider" />
          <DropdownItem itemId="5">Separated link</DropdownItem>
        </Dropdown>
      </NavItem>
      <NavItem itemId="6">Link</NavItem>
      <NavItem itemId="7" isDisabled>
        Disabled
      </NavItem>
    </Navbar>
    <Navbar title="Navbar" className="navbar-expand-lg" variant="primary" theme="dark">
      <NavItem isActive itemId="1">
        Active
      </NavItem>
      <NavItem itemId="2">
        <Dropdown variant="link" buttonName="Dropdown" type="normal">
          <DropdownItem isActive itemId="3">
            Action
          </DropdownItem>
          <DropdownItem isDisabled itemId="4">
            Another action
          </DropdownItem>
          <DropdownItem itemId="5">
            <a>Something else here</a>
          </DropdownItem>
          <hr className="dropdown-divider" />
          <DropdownItem itemId="6">Separated link</DropdownItem>
        </Dropdown>
      </NavItem>
      <NavItem itemId="7">Link</NavItem>
      <NavItem itemId="8" isDisabled>
        Disabled
      </NavItem>
    </Navbar>
    <Navbar title="Navbar" className="navbar-expand-lg" variant="secondary" theme="dark">
      <NavItem isActive itemId="1">
        Active
      </NavItem>
      <NavItem itemId="2">
        <Dropdown variant="link" buttonName="Dropdown" type="normal">
          <DropdownItem isActive itemId="3">
            Action
          </DropdownItem>
          <DropdownItem isDisabled itemId="4">
            Another action
          </DropdownItem>
          <DropdownItem itemId="5">
            <a>Something else here</a>
          </DropdownItem>
          <hr className="dropdown-divider" />
          <DropdownItem itemId="6">Separated link</DropdownItem>
        </Dropdown>
      </NavItem>
      <NavItem itemId="7">Link</NavItem>
      <NavItem itemId="8" isDisabled>
        Disabled
      </NavItem>
    </Navbar>
  `;

  return (
    <div className="rb-navbars container-fluid">
      <section className="rb-navbar-basic">
        <h1 className="rb-title">Navbar</h1>
        <div className="rb-group">
          <div className="rb-navbar-wrapper">
            <Navbar title="Navbar" className="navbar-expand-lg">
              <NavItem isActive itemId="1">
                Active
              </NavItem>
              <NavItem itemId="2" dropdown>
                <Dropdown variant="link" buttonName="Dropdown" type="normal">
                  <DropdownItem isActive itemId="3">
                    Action
                  </DropdownItem>
                  <DropdownItem isDisabled itemId="4">
                    Another action
                  </DropdownItem>
                  <DropdownItem itemId="5">
                    <a>Something else here</a>
                  </DropdownItem>
                  <hr className="dropdown-divider" />
                  <DropdownItem itemId="6">Separated link</DropdownItem>
                </Dropdown>
              </NavItem>
              <NavItem itemId="7">Link</NavItem>
              <NavItem itemId="8" isDisabled>
                Disabled
              </NavItem>
            </Navbar>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {basic}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-navbar-basic">
        <h1 className="rb-title">Variant</h1>
        <div className="rb-group">
          <div className="rb-navbar-wrapper">
            <Navbar title="Navbar" className="navbar-expand-lg" variant="dark" theme="dark">
              <NavItem isActive itemId="1">
                Active
              </NavItem>
              <NavItem itemId="2">
                <Dropdown variant="link" buttonName="Dropdown" type="normal">
                  <DropdownItem isActive itemId="3">
                    Action
                  </DropdownItem>
                  <DropdownItem isDisabled itemId="4">
                    Another action
                  </DropdownItem>
                  <DropdownItem itemId="5">
                    <a>Something else here</a>
                  </DropdownItem>
                  <hr className="dropdown-divider" />
                  <DropdownItem itemId="5">Separated link</DropdownItem>
                </Dropdown>
              </NavItem>
              <NavItem itemId="6">Link</NavItem>
              <NavItem itemId="7" isDisabled>
                Disabled
              </NavItem>
            </Navbar>
          </div>
          <div className="rb-navbar-wrapper">
            <Navbar title="Navbar" className="navbar-expand-lg" variant="primary" theme="dark">
              <NavItem isActive itemId="1">
                Active
              </NavItem>
              <NavItem itemId="2">
                <Dropdown variant="link" buttonName="Dropdown" type="normal">
                  <DropdownItem isActive itemId="3">
                    Action
                  </DropdownItem>
                  <DropdownItem isDisabled itemId="4">
                    Another action
                  </DropdownItem>
                  <DropdownItem itemId="5">
                    <a>Something else here</a>
                  </DropdownItem>
                  <hr className="dropdown-divider" />
                  <DropdownItem itemId="6">Separated link</DropdownItem>
                </Dropdown>
              </NavItem>
              <NavItem itemId="7">Link</NavItem>
              <NavItem itemId="8" isDisabled>
                Disabled
              </NavItem>
            </Navbar>
          </div>
          <div className="rb-navbar-wrapper">
            <Navbar title="Navbar" className="navbar-expand-lg" variant="secondary" theme="dark">
              <NavItem isActive itemId="1">
                Active
              </NavItem>
              <NavItem itemId="2">
                <Dropdown variant="link" buttonName="Dropdown" type="normal">
                  <DropdownItem isActive itemId="3">
                    Action
                  </DropdownItem>
                  <DropdownItem isDisabled itemId="4">
                    Another action
                  </DropdownItem>
                  <DropdownItem itemId="5">
                    <a>Something else here</a>
                  </DropdownItem>
                  <hr className="dropdown-divider" />
                  <DropdownItem itemId="6">Separated link</DropdownItem>
                </Dropdown>
              </NavItem>
              <NavItem itemId="7">Link</NavItem>
              <NavItem itemId="8" isDisabled>
                Disabled
              </NavItem>
            </Navbar>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {variant}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Navbars;

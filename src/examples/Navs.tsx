import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';
import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';

function Navs() {
  function changeHandler(key: string) {
    // console.log(key);
  }

  const basic = `
    import Nav from '../components/Nav';
    import NavItem from '../components/NavItem';

    <Nav>
      <NavItem isActive itemId="1">
        Active
      </NavItem>
      <NavItem itemId="2">Link</NavItem>
      <NavItem itemId="3">Link</NavItem>
      <NavItem itemId="4" isDisabled>
        Disabled
      </NavItem>
    </Nav>
  `;

  const centered = `
    import Nav from '../components/Nav';
    import NavItem from '../components/NavItem';

    <Nav centered>
      <NavItem isActive itemId="1">
        Active
      </NavItem>
      <NavItem itemId="2">Link</NavItem>
      <NavItem itemId="3">Link</NavItem>
      <NavItem itemId="4" isDisabled>
        Disabled
      </NavItem>
    </Nav>
  `;

  const ended = `
    import Nav from '../components/Nav';
    import NavItem from '../components/NavItem';

    <Nav ended>
      <NavItem isActive itemId="1">
        Active
      </NavItem>
      <NavItem itemId="2">Link</NavItem>
      <NavItem itemId="3">Link</NavItem>
      <NavItem itemId="4" isDisabled>
        Disabled
      </NavItem>
    </Nav>
  `;

  const vertical = `
    import Nav from '../components/Nav';
    import NavItem from '../components/NavItem';

    <Nav vertical>
      <NavItem isActive itemId="1">
        Active
      </NavItem>
      <NavItem itemId="2">Link</NavItem>
      <NavItem itemId="3">Link</NavItem>
      <NavItem itemId="4" isDisabled>
        Disabled
      </NavItem>
    </Nav>
  `;
  const tabs = `
    import Nav from '../components/Nav';
    import NavItem from '../components/NavItem';

    <Nav tabs>
      <NavItem isActive itemId="1">
        Active
      </NavItem>
      <NavItem itemId="2">Link</NavItem>
      <NavItem itemId="3">Link</NavItem>
      <NavItem itemId="4" isDisabled>
        Disabled
      </NavItem>
    </Nav>
  `;

  const pillNav = `
    import Nav from '../components/Nav';
    import NavItem from '../components/NavItem';

    <Nav className="nav-pills">
      <NavItem isActive itemId="1">
        Active
      </NavItem>
      <NavItem itemId="2">Link</NavItem>
      <NavItem itemId="3" isDisabled>
        Disabled
      </NavItem>
    </Nav>
  `;

  const combineNav = `
    <Nav>
      <NavItem isActive itemId="1">
        Active
      </NavItem>
      <NavItem itemId="2" dropdown>
        <Dropdown variant="link" buttonName="Dropdown">
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
    </Nav>
  `;

  const pillJustifiedNav = `
    <Nav className="nav-pills nav-justified">
      <NavItem isActive itemId="1">
        Active
      </NavItem>
      <NavItem itemId="2">Link</NavItem>
      <NavItem itemId="3">Link</NavItem>
      <NavItem itemId="4" isDisabled>
        Disabled
      </NavItem>
    </Nav>
  `;

  const pillFillNav = `
    <Nav className="nav-pills nav-fill">
      <NavItem isActive itemId="1">
        Active
      </NavItem>
      <NavItem itemId="2">Link</NavItem>
      <NavItem itemId="3">Link</NavItem>
      <NavItem itemId="4" isDisabled>
        Disabled
      </NavItem>
    </Nav>
  `;

  return (
    <div className="rb-navs container-fluid">
      <section className="rb-nav-basic">
        <h1 className="rb-title">Nav and tab</h1>
        <div className="rb-group">
          <div className="rb-nav-wrapper">
            <Nav>
              <NavItem isActive itemId="1">
                Active
              </NavItem>
              <NavItem itemId="2">Link</NavItem>
              <NavItem itemId="3">Link</NavItem>
              <NavItem itemId="4" isDisabled>
                Disabled
              </NavItem>
            </Nav>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {basic}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-nav-centered">
        <h1 className="rb-title">Centered</h1>
        <div className="rb-group">
          <div className="rb-nav-wrapper">
            <Nav centered>
              <NavItem isActive itemId="1">
                Active
              </NavItem>
              <NavItem itemId="2">Link</NavItem>
              <NavItem itemId="3">Link</NavItem>
              <NavItem itemId="4" isDisabled>
                Disabled
              </NavItem>
            </Nav>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {centered}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-nav-ended">
        <h1 className="rb-title">Ended</h1>
        <div className="rb-group">
          <div className="rb-nav-wrapper">
            <Nav ended>
              <NavItem isActive itemId="1">
                Active
              </NavItem>
              <NavItem itemId="2">Link</NavItem>
              <NavItem itemId="3">Link</NavItem>
              <NavItem itemId="4" isDisabled>
                Disabled
              </NavItem>
            </Nav>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {ended}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-nav-vertical">
        <h1 className="rb-title">Vertical</h1>
        <div className="rb-group">
          <div className="rb-nav-wrapper">
            <Nav vertical>
              <NavItem isActive itemId="1">
                Active
              </NavItem>
              <NavItem itemId="2">Link</NavItem>
              <NavItem itemId="3">Link</NavItem>
              <NavItem itemId="4" isDisabled>
                Disabled
              </NavItem>
            </Nav>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {vertical}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-nav-tabs">
        <h1 className="rb-title">Tabs</h1>
        <div className="rb-group">
          <div className="rb-nav-wrapper">
            <Nav tabs>
              <NavItem isActive itemId="1" role="tab">
                Active
              </NavItem>
              <NavItem itemId="2" role="tab">
                Link
              </NavItem>
              <NavItem itemId="3" role="tab">
                Link
              </NavItem>
              <NavItem itemId="4" isDisabled role="tab">
                Disabled
              </NavItem>
            </Nav>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {tabs}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-nav-pills">
        <h1 className="rb-title">Pills nav</h1>
        <div className="rb-group">
          <div className="rb-nav-wrapper">
            <Nav className="nav-pills">
              <NavItem isActive itemId="1">
                Active
              </NavItem>
              <NavItem itemId="2">Link</NavItem>
              <NavItem itemId="3" isDisabled>
                Disabled
              </NavItem>
            </Nav>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {pillNav}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-nav-dropdown">
        <h1 className="rb-title">Combine nav</h1>
        <div className="rb-group">
          <div className="rb-nav-wrapper">
            <Nav>
              <NavItem isActive itemId="1">
                Active
              </NavItem>
              <NavItem itemId="2" dropdown>
                <Dropdown variant="link" buttonName="Dropdown">
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
            </Nav>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {combineNav}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-nav-pills-fill">
        <h1 className="rb-title">Pills and fill nav</h1>
        <div className="rb-group">
          <div className="rb-nav-wrapper">
            <Nav className="nav-pills nav-fill">
              <NavItem isActive itemId="1">
                Active
              </NavItem>
              <NavItem itemId="2">Link</NavItem>
              <NavItem itemId="3">Link</NavItem>
              <NavItem itemId="4" isDisabled>
                Disabled
              </NavItem>
            </Nav>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {pillFillNav}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-nav-pills-justified">
        <div className="rb-title">Pills and justified nav</div>
        <div className="rb-group">
          <Nav className="nav-pills nav-justified">
            <NavItem isActive itemId="1">
              Active
            </NavItem>
            <NavItem itemId="2">Link</NavItem>
            <NavItem itemId="3">Link</NavItem>
            <NavItem itemId="4" isDisabled>
              Disabled
            </NavItem>
          </Nav>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {pillJustifiedNav}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Navs;

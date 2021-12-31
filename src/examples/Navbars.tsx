import React from 'react';
import Navbar from '../components/Navbar';
import NavItem from '../components/NavItem';
import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';

function Navbars() {
  return (
    <div className="rb-navbars">
      <section className="rb-navbar-basic">
        <div className="rb-title">Basic navbar</div>
        <div className="rb-group">
          <Navbar title="Navbar" className="navbar-expand-lg">
            <NavItem isActive itemId="1">
              Active
            </NavItem>
            <NavItem itemId="2">
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
          </Navbar>
        </div>
      </section>
      <section className="rb-navbar-basic">
        <div className="rb-title">Colored navbar</div>
        <div className="rb-group">
          <Navbar title="Navbar" className="navbar-expand-lg" variant="dark" theme="dark">
            <NavItem isActive itemId="1">
              Active
            </NavItem>
            <NavItem itemId="2">
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
          </Navbar>
          <Navbar title="Navbar" className="navbar-expand-lg" variant="secondary" theme="dark">
            <NavItem isActive itemId="1">
              Active
            </NavItem>
            <NavItem itemId="2">
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
          </Navbar>
        </div>
      </section>

      {/*<section className="rc-navbar-basic">*/}
      {/*  <div className="rc-title">Basic navbar</div>*/}
      {/*  <div className="rc-group">*/}
      {/*    <Navbar title="Navbar" className="navbar-expand-lg" position="sticky-top">*/}
      {/*      <NavItem active key={uuidv4()}>*/}
      {/*        Active*/}
      {/*      </NavItem>*/}
      {/*      <NavItem key={uuidv4()} dropdown>*/}
      {/*        <Dropdown variant="link" buttonName="Dropdown">*/}
      {/*          /!* <DropdownItem active key={uuidv4()}> *!/*/}
      {/*          /!*  Action *!/*/}
      {/*          /!* </DropdownItem> *!/*/}
      {/*          /!* <DropdownItem disabled key={uuidv4()}> *!/*/}
      {/*          /!*  Another action *!/*/}
      {/*          /!* </DropdownItem> *!/*/}
      {/*          /!* <DropdownItem key={uuidv4()}> *!/*/}
      {/*          /!*  <a>Something else here</a> *!/*/}
      {/*          /!* </DropdownItem> *!/*/}
      {/*          /!* <hr className="dropdown-divider" /> *!/*/}
      {/*          /!* <DropdownItem key={uuidv4()}>Separated link</DropdownItem> *!/*/}
      {/*        </Dropdown>*/}
      {/*      </NavItem>*/}
      {/*      <NavItem key={uuidv4()}>Link</NavItem>*/}
      {/*      <NavItem key={uuidv4()} disabled>*/}
      {/*        Disabled*/}
      {/*      </NavItem>*/}
      {/*    </Navbar>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
}

export default Navbars;

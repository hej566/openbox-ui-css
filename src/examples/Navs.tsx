import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';
import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';

function Navs() {
  function changeHandler(key: string) {
    console.log(key);
  }
  return (
    <div className="rc-navs">
      <section className="rc-nav-basic">
        <div className="rc-title">Basic nav</div>
        <div className="rc-group">
          <Nav onChange={changeHandler}>
            <NavItem active key={uuidv4()}>
              Active
            </NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()} disabled>
              Disabled
            </NavItem>
          </Nav>
        </div>
      </section>
      <section className="rc-nav-centered">
        <div className="rc-title">Centered nav</div>
        <div className="rc-group">
          <Nav centered>
            <NavItem active key={uuidv4()}>
              Active
            </NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()} disabled>
              Disabled
            </NavItem>
          </Nav>
        </div>
      </section>
      <section className="rc-nav-ended">
        <div className="rc-title">Ended nav</div>
        <div className="rc-group">
          <Nav ended>
            <NavItem active key={uuidv4()}>
              Active
            </NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()} disabled>
              Disabled
            </NavItem>
          </Nav>
        </div>
      </section>
      <section className="rc-nav-vertical">
        <div className="rc-title">Vertical nav</div>
        <div className="rc-group">
          <Nav vertical>
            <NavItem active key={uuidv4()}>
              Active
            </NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()} disabled>
              Disabled
            </NavItem>
          </Nav>
        </div>
      </section>
      <section className="rc-nav-tabs">
        <div className="rc-title">Tabs nav</div>
        <div className="rc-group">
          <Nav tabs>
            <NavItem active key={uuidv4()}>
              Active
            </NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()} disabled>
              Disabled
            </NavItem>
          </Nav>
        </div>
      </section>
      <section className="rc-nav-pills">
        <div className="rc-title">Pills nav</div>
        <div className="rc-group">
          <Nav className="nav-pills" onChange={changeHandler}>
            <NavItem active key={uuidv4()}>
              Active
            </NavItem>
            <NavItem key={uuidv4()} dropdown>
              <Dropdown variant="link" link buttonName="Dropdown">
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
            </NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()} disabled>
              Disabled
            </NavItem>
          </Nav>
        </div>
      </section>
      <section className="rc-nav-dropdown">
        <div className="rc-title">Tabs nav with dropdown</div>
        <div className="rc-group">
          <Nav tabs>
            <NavItem active key={uuidv4()}>
              Active
            </NavItem>
            <NavItem key={uuidv4()} dropdown>
              <Dropdown variant="link" link buttonName="Dropdown">
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
            </NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()} disabled>
              Disabled
            </NavItem>
          </Nav>
        </div>
      </section>
      <section className="rc-nav-pills-fill">
        <div className="rc-title">Pills and fill nav</div>
        <div className="rc-group">
          <Nav className="nav-pills nav-fill">
            <NavItem active key={uuidv4()}>
              Active
            </NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()} disabled>
              Disabled
            </NavItem>
          </Nav>
        </div>
      </section>
      <section className="rc-nav-pills-justified">
        <div className="rc-title">Pills and justified nav</div>
        <div className="rc-group">
          <Nav className="nav-pills nav-justified">
            <NavItem active key={uuidv4()}>
              Active
            </NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()} disabled>
              Disabled
            </NavItem>
          </Nav>
        </div>
      </section>
    </div>
  );
}

export default Navs;

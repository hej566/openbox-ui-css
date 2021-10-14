import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import NavItem from '../components/NavItem';
import { v4 as uuidv4 } from 'uuid';

function Navs() {
  return (
    <div className="rc-navs">
      <section className="rc-accordion-only">
        <div className="rc-title">Basic nav</div>
        <div className="rc-group">
          <Nav>
            <NavItem active key={uuidv4()}>
              Active
            </NavItem>
            <NavItem disabled key={uuidv4()}>
              Link
            </NavItem>
            <NavItem key={uuidv4()}>Link</NavItem>
            <NavItem key={uuidv4()}>Disabled</NavItem>
          </Nav>
        </div>
      </section>
    </div>
  );
}

export default Navs;

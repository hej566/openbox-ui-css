import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Offcanvas from '../components/Offcanvas';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';

function Offcanvases() {
  const [isVisible, setVisible] = useState(false);

  function showHandler() {
    setVisible(true);
  }

  function cancelHandler() {
    setVisible(false);
  }

  return (
    <div className="rc-offcanvases">
      <section className="rc-offcanvas-basic">
        <div className="rc-title">Basic offcanvas</div>
        <div className="rc-group">
          <Button onClick={showHandler}>Launch demo offcanvas</Button>
          <Offcanvas title="Basic offcanvas" visible={isVisible} onCancel={cancelHandler}>
            <Dropdown buttonName="Dropdown button" type="tippy">
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
          </Offcanvas>
        </div>
      </section>
    </div>
  );
}

export default Offcanvases;

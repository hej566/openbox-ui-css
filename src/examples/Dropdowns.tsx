import React from 'react';
import Dropdown from '../components/Dropdown';
import Icon from '../components/Icon';

function Dropdowns() {
  return (
    <div className="rc-dropdowns">
      <section className="rc-dropdown-basic">
        <div className="rc-title">Basic dropdown</div>
        <div className="rc-group">
          <Dropdown buttonName="Dropdown button">
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
        </div>
      </section>
      <section className="rc-dropdown-link">
        <div className="rc-title">Link dropdown</div>
        <div className="rc-group">
          <Dropdown variant="link" link buttonName="Dropdown button">
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
        </div>
      </section>
      <section className="rc-dropdown-variant">
        <div className="rc-title">Variant dropdown</div>
        <div className="rc-group">
          <Dropdown variant="primary" buttonName="Primary">
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
          <Dropdown variant="secondary" buttonName="Secondary">
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
          <Dropdown variant="success" buttonName="Success">
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
          <Dropdown variant="info" buttonName="Info">
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
          <Dropdown variant="warning" buttonName="Warning">
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
          <Dropdown variant="danger" buttonName="Danger">
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
        </div>
      </section>
      <section className="rc-dropdown-split-button">
        <div className="rc-title">Split dropdown</div>
        <div className="rc-group">
          <Dropdown variant="primary" buttonName="Split button" split>
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
        </div>
      </section>
      <section className="rc-dropdown-size">
        <div className="rc-title">Size dropdown</div>
        <div className="rc-group">
          <Dropdown variant="secondary" buttonName="Small button" size="sm">
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
          <Dropdown variant="secondary" buttonName="Small split button" split size="sm">
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
          <Dropdown variant="secondary" buttonName="Large button" size="lg">
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
          <Dropdown variant="secondary" buttonName="Large split button" split size="lg">
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
        </div>
      </section>
      <section className="rc-dropdown-dark">
        <div className="rc-title">Dark dropdown</div>
        <div className="rc-group">
          <Dropdown variant="secondary" buttonName="Dropdown button" theme="dark">
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
        </div>
      </section>
      <section className="rc-dropdown-item-disabled">
        <div className="rc-title">Disabled item dropdown</div>
        <div className="rc-group">
          <Dropdown variant="secondary" buttonName="Dropdown button" theme="dark">
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
        </div>
      </section>
      <section className="rc-dropdown-disabled">
        <div className="rc-title">Disabled item dropdown</div>
        <div className="rc-group">
          <Dropdown variant="secondary" buttonName="Dropdown button" theme="dark" disabled>
            <div className="dropdown-item">Action</div>
            <div className="dropdown-item">Another action</div>
            <div className="dropdown-item">Something else here</div>
          </Dropdown>
        </div>
      </section>
    </div>
  );
}

export default Dropdowns;

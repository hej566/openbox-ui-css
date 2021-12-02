import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Dropdown from '../components/Dropdown';
import Icon from '../components/Icon';
import DropdownItem from '../components/DropdownItem';

function Dropdowns() {
  return (
    <div className="rc-dropdowns">
      <section className="rc-dropdown-basic">
        <div className="rc-title">Basic dropdown</div>
        <div className="rc-group">
          <Dropdown buttonName="Dropdown button">
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
        </div>
      </section>
      <section className="rc-dropdown-link">
        <div className="rc-title">Link dropdown</div>
        <div className="rc-group">
          <Dropdown variant="link" link buttonName="Dropdown button">
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
        </div>
      </section>
      <section className="rc-dropdown-variant">
        <div className="rc-title">Variant dropdown</div>
        <div className="rc-group">
          <Dropdown variant="primary" buttonName="Primary">
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
          <Dropdown variant="secondary" buttonName="Secondary">
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
          <Dropdown variant="success" buttonName="Success">
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
          <Dropdown variant="info" buttonName="Info">
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
          <Dropdown variant="warning" buttonName="Warning">
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
          <Dropdown variant="danger" buttonName="Danger">
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
        </div>
      </section>
      <section className="rc-dropdown-split-button">
        <div className="rc-title">Split dropdown</div>
        <div className="rc-group">
          <Dropdown variant="primary" buttonName="Split button" split>
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
        </div>
      </section>
      <section className="rc-dropdown-size">
        <div className="rc-title">Size dropdown</div>
        <div className="rc-group">
          <Dropdown variant="secondary" buttonName="Small button" size="sm">
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
          <Dropdown variant="secondary" buttonName="Small split button" split size="sm">
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
          <Dropdown variant="secondary" buttonName="Large button" size="lg">
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
          <Dropdown variant="secondary" buttonName="Large split button" split size="lg">
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
        </div>
      </section>
      <section className="rc-dropdown-dark">
        <div className="rc-title">Dark dropdown</div>
        <div className="rc-group">
          <Dropdown variant="secondary" buttonName="Dropdown button" theme="dark">
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
        </div>
      </section>
      <section className="rc-dropdown-item-disabled">
        <div className="rc-title">Disabled item dropdown</div>
        <div className="rc-group">
          <Dropdown variant="secondary" buttonName="Dropdown button" theme="dark">
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
        </div>
      </section>
      <section className="rc-dropdown-disabled">
        <div className="rc-title">Disabled item dropdown</div>
        <div className="rc-group">
          <Dropdown variant="secondary" buttonName="Dropdown button" theme="dark" disabled>
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
        </div>
      </section>
    </div>
  );
}

export default Dropdowns;

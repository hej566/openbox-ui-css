import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Dropdown from '../components/Dropdown';
import Icon from '../components/Icon';
import DropdownItem from '../components/DropdownItem';
import EllipsisV from '../assets/icons/svg/ellipsis-v-regular.svg';

function Dropdowns() {
  return (
    <div className="rc-dropdowns">
      <section className="rc-dropdown-basic">
        <div className="rc-title">Basic dropdown</div>
        <div className="rc-group">
          <Dropdown buttonName="Dropdown button" type="normal">
            <DropdownItem isActive key="1" itemId="1">
              Action
            </DropdownItem>
            <DropdownItem isDisabled key="2" itemId="2">
              Another action
            </DropdownItem>
            <DropdownItem key="3" itemId="3">
              <a>Something else here</a>
            </DropdownItem>
            <hr className="dropdown-divider" />
            <DropdownItem key="4" itemId="4">
              Separated link
            </DropdownItem>
          </Dropdown>
        </div>
      </section>
      <section className="rc-dropdown-link">
        <div className="rc-title">Link dropdown</div>
        <div className="rc-group">
          <Dropdown variant="link" buttonName="Dropdown button">
            <DropdownItem isActive key="1" itemId="1">
              Action
            </DropdownItem>
            <DropdownItem isDisabled key="2" itemId="2">
              Another action
            </DropdownItem>
            <DropdownItem key="3" itemId="3">
              <a>Something else here</a>
            </DropdownItem>
            <hr className="dropdown-divider" />
            <DropdownItem key="4" itemId="4">
              Separated link
            </DropdownItem>
          </Dropdown>
        </div>
      </section>
      <section className="rc-dropdown-variant">
        <div className="rc-title">Variant dropdown</div>
        <div className="rc-group">
          <Dropdown variant="primary" buttonName="Primary">
            <DropdownItem isActive key="1" itemId="1">
              Action
            </DropdownItem>
            <DropdownItem isDisabled key="2" itemId="2">
              Another action
            </DropdownItem>
            <DropdownItem key="3" itemId="3">
              <a>Something else here</a>
            </DropdownItem>
            <hr className="dropdown-divider" />
            <DropdownItem key="4" itemId="4">
              Separated link
            </DropdownItem>
          </Dropdown>
          <Dropdown variant="secondary" buttonName="Secondary">
            <DropdownItem isActive key="1" itemId="1">
              Action
            </DropdownItem>
            <DropdownItem isDisabled key="2" itemId="2">
              Another action
            </DropdownItem>
            <DropdownItem key="3" itemId="3">
              <a>Something else here</a>
            </DropdownItem>
            <hr className="dropdown-divider" />
            <DropdownItem key="4" itemId="4">
              Separated link
            </DropdownItem>
          </Dropdown>
          <Dropdown variant="success" buttonName="Success">
            <DropdownItem isActive key="1" itemId="1">
              Action
            </DropdownItem>
            <DropdownItem isDisabled key="2" itemId="2">
              Another action
            </DropdownItem>
            <DropdownItem key="3" itemId="3">
              <a>Something else here</a>
            </DropdownItem>
            <hr className="dropdown-divider" />
            <DropdownItem key="4" itemId="4">
              Separated link
            </DropdownItem>
          </Dropdown>
          <Dropdown variant="info" buttonName="Info">
            <DropdownItem isActive key="1" itemId="1">
              Action
            </DropdownItem>
            <DropdownItem isDisabled key="2" itemId="2">
              Another action
            </DropdownItem>
            <DropdownItem key="3" itemId="3">
              <a>Something else here</a>
            </DropdownItem>
            <hr className="dropdown-divider" />
            <DropdownItem key="4" itemId="4">
              Separated link
            </DropdownItem>
          </Dropdown>
          <Dropdown variant="warning" buttonName="Warning">
            <DropdownItem isActive key="1" itemId="1">
              Action
            </DropdownItem>
            <DropdownItem isDisabled key="2" itemId="2">
              Another action
            </DropdownItem>
            <DropdownItem key="3" itemId="3">
              <a>Something else here</a>
            </DropdownItem>
            <hr className="dropdown-divider" />
            <DropdownItem key="4" itemId="4">
              Separated link
            </DropdownItem>
          </Dropdown>
          <Dropdown variant="danger" buttonName="Danger">
            <DropdownItem isActive key="1" itemId="1">
              Action
            </DropdownItem>
            <DropdownItem isDisabled key="2" itemId="2">
              Another action
            </DropdownItem>
            <DropdownItem key="3" itemId="3">
              <a>Something else here</a>
            </DropdownItem>
            <hr className="dropdown-divider" />
            <DropdownItem key="4" itemId="4">
              Separated link
            </DropdownItem>
          </Dropdown>
        </div>
      </section>
      {/* <section className="rc-dropdown-split-button"> */}
      {/*  <div className="rc-title">Split dropdown</div> */}
      {/*  <div className="rc-group"> */}
      {/*    <Dropdown variant="primary" buttonName="Split button" split> */}
      {/*      <DropdownItem active key={uuidv4()}> */}
      {/*        Action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem disabled key={uuidv4()}> */}
      {/*        Another action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem key={uuidv4()}> */}
      {/*        <a>Something else here</a> */}
      {/*      </DropdownItem> */}
      {/*      <hr className="dropdown-divider" /> */}
      {/*      <DropdownItem key={uuidv4()}>Separated link</DropdownItem> */}
      {/*    </Dropdown> */}
      {/*  </div> */}
      {/* </section> */}
      {/* <section className="rc-dropdown-size"> */}
      {/*  <div className="rc-title">Size dropdown</div> */}
      {/*  <div className="rc-group"> */}
      {/*    <Dropdown variant="secondary" buttonName="Small button" size="sm"> */}
      {/*      <DropdownItem active key={uuidv4()}> */}
      {/*        Action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem disabled key={uuidv4()}> */}
      {/*        Another action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem key={uuidv4()}> */}
      {/*        <a>Something else here</a> */}
      {/*      </DropdownItem> */}
      {/*      <hr className="dropdown-divider" /> */}
      {/*      <DropdownItem key={uuidv4()}>Separated link</DropdownItem> */}
      {/*    </Dropdown> */}
      {/*    <Dropdown variant="secondary" buttonName="Small split button" split size="sm"> */}
      {/*      <DropdownItem active key={uuidv4()}> */}
      {/*        Action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem disabled key={uuidv4()}> */}
      {/*        Another action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem key={uuidv4()}> */}
      {/*        <a>Something else here</a> */}
      {/*      </DropdownItem> */}
      {/*      <hr className="dropdown-divider" /> */}
      {/*      <DropdownItem key={uuidv4()}>Separated link</DropdownItem> */}
      {/*    </Dropdown> */}
      {/*    <Dropdown variant="secondary" buttonName="Large button" size="lg"> */}
      {/*      <DropdownItem active key={uuidv4()}> */}
      {/*        Action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem disabled key={uuidv4()}> */}
      {/*        Another action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem key={uuidv4()}> */}
      {/*        <a>Something else here</a> */}
      {/*      </DropdownItem> */}
      {/*      <hr className="dropdown-divider" /> */}
      {/*      <DropdownItem key={uuidv4()}>Separated link</DropdownItem> */}
      {/*    </Dropdown> */}
      {/*    <Dropdown variant="secondary" buttonName="Large split button" split size="lg"> */}
      {/*      <DropdownItem active key={uuidv4()}> */}
      {/*        Action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem disabled key={uuidv4()}> */}
      {/*        Another action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem key={uuidv4()}> */}
      {/*        <a>Something else here</a> */}
      {/*      </DropdownItem> */}
      {/*      <hr className="dropdown-divider" /> */}
      {/*      <DropdownItem key={uuidv4()}>Separated link</DropdownItem> */}
      {/*    </Dropdown> */}
      {/*  </div> */}
      {/* </section> */}
      {/* <section className="rc-dropdown-dark"> */}
      {/*  <div className="rc-title">Dark dropdown</div> */}
      {/*  <div className="rc-group"> */}
      {/*    <Dropdown variant="secondary" buttonName="Dropdown button" theme="dark"> */}
      {/*      <DropdownItem active key={uuidv4()}> */}
      {/*        Action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem disabled key={uuidv4()}> */}
      {/*        Another action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem key={uuidv4()}> */}
      {/*        <a>Something else here</a> */}
      {/*      </DropdownItem> */}
      {/*      <hr className="dropdown-divider" /> */}
      {/*      <DropdownItem key={uuidv4()}>Separated link</DropdownItem> */}
      {/*    </Dropdown> */}
      {/*  </div> */}
      {/* </section> */}
      {/* <section className="rc-dropdown-item-disabled"> */}
      {/*  <div className="rc-title">Disabled item dropdown</div> */}
      {/*  <div className="rc-group"> */}
      {/*    <Dropdown variant="secondary" buttonName="Dropdown button" theme="dark"> */}
      {/*      <DropdownItem active key={uuidv4()}> */}
      {/*        Action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem disabled key={uuidv4()}> */}
      {/*        Another action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem key={uuidv4()}> */}
      {/*        <a>Something else here</a> */}
      {/*      </DropdownItem> */}
      {/*      <hr className="dropdown-divider" /> */}
      {/*      <DropdownItem key={uuidv4()}>Separated link</DropdownItem> */}
      {/*    </Dropdown> */}
      {/*  </div> */}
      {/* </section> */}
      {/* <section className="rc-dropdown-disabled"> */}
      {/*  <div className="rc-title">Disabled item dropdown</div> */}
      {/*  <div className="rc-group"> */}
      {/*    <Dropdown variant="secondary" buttonName="Dropdown button" theme="dark" disabled> */}
      {/*      <DropdownItem active key={uuidv4()}> */}
      {/*        Action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem disabled key={uuidv4()}> */}
      {/*        Another action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem key={uuidv4()}> */}
      {/*        <a>Something else here</a> */}
      {/*      </DropdownItem> */}
      {/*      <hr className="dropdown-divider" /> */}
      {/*      <DropdownItem key={uuidv4()}>Separated link</DropdownItem> */}
      {/*    </Dropdown> */}
      {/*  </div> */}
      {/* </section> */}
      {/* <section className="rc-dropdown-disabled"> */}
      {/*  <div className="rc-title">Disabled item dropdown</div> */}
      {/*  <div className="rc-group"> */}
      {/*    <Dropdown variant="secondary" theme="dark" suffixIcon={<Icon component={EllipsisV} />}> */}
      {/*      <DropdownItem active key={uuidv4()}> */}
      {/*        Action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem disabled key={uuidv4()}> */}
      {/*        Another action */}
      {/*      </DropdownItem> */}
      {/*      <DropdownItem key={uuidv4()}> */}
      {/*        <a>Something else here</a> */}
      {/*      </DropdownItem> */}
      {/*      <hr className="dropdown-divider" /> */}
      {/*      <DropdownItem key={uuidv4()}>Separated link</DropdownItem> */}
      {/*    </Dropdown> */}
      {/*  </div> */}
      {/* </section> */}
    </div>
  );
}

export default Dropdowns;

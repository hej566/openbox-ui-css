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
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </Dropdown>
                </div>
            </section>
            <section className="rc-dropdown-variant">
                <div className="rc-title">Variant dropdown</div>
                <div className="rc-group">
                    <Dropdown variant="primary" buttonName="Primary">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </Dropdown>
                    <Dropdown variant="secondary" buttonName="Secondary">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </Dropdown>
                    <Dropdown variant="success" buttonName="Success">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </Dropdown>
                    <Dropdown variant="info" buttonName="Info">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </Dropdown>
                    <Dropdown variant="warning" buttonName="Warning">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </Dropdown>
                    <Dropdown variant="danger" buttonName="Danger">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </Dropdown>
                </div>
            </section>
            <section className="rc-dropdown-split-button">
                <div className="rc-title">Split dropdown</div>
                <div className="rc-group">
                    <Dropdown variant="primary" buttonName="Split button" split>
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </Dropdown>
                </div>
            </section>
            <section className="rc-dropdown-size">
                <div className="rc-title">Size dropdown</div>
                <div className="rc-group">
                    <Dropdown variant="secondary" buttonName="Small button" size="sm">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </Dropdown>
                    <Dropdown variant="secondary" buttonName="Small split button" split size="sm">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </Dropdown>
                    <Dropdown variant="secondary" buttonName="Large button" size="lg">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </Dropdown>
                    <Dropdown variant="secondary" buttonName="Large split button" split size="lg">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </Dropdown>
                </div>
            </section>
            <section className="rc-dropdown-dark">
                <div className="rc-title">Dark dropdown</div>
                <div className="rc-group">
                    <Dropdown variant="secondary" buttonName="Dropdown button" theme="dark">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </Dropdown>
                </div>
            </section>
            <section className="rc-dropdown-item-disabled">
                <div className="rc-title">Disabled item dropdown</div>
                <div className="rc-group">
                    <Dropdown variant="secondary" buttonName="Dropdown button" theme="dark">
                        <li><a className="dropdown-item disabled" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </Dropdown>
                </div>
            </section>
            <section className="rc-dropdown-disabled">
                <div className="rc-title">Disabled item dropdown</div>
                <div className="rc-group">
                    <Dropdown variant="secondary" buttonName="Dropdown button" theme="dark" disabled>
                        <li><a className="dropdown-item disabled" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                    </Dropdown>
                </div>
            </section>
        </div>
    )
}

export default Dropdowns;
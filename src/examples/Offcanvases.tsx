import React, { useState } from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Offcanvas from '../components/Offcanvas';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import DropdownItem from '../components/DropdownItem';

function Offcanvases() {
  const [isVisible, setVisible] = useState(false);
  const [isVisible1, setVisible1] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  const [isVisible3, setVisible3] = useState(false);

  function showHandler() {
    setVisible(true);
  }

  function cancelHandler() {
    setVisible(false);
  }

  function showHandler1() {
    setVisible1(true);
  }

  function cancelHandler1() {
    setVisible1(false);
  }

  function showHandler2() {
    setVisible2(true);
  }

  function cancelHandler2() {
    setVisible2(false);
  }

  function showHandler3() {
    setVisible3(true);
  }

  function cancelHandler3() {
    setVisible3(false);
  }

  const left2right = `
    import Offcanvas from '../components/Offcanvas';
    import Button from '../components/Button';
    import Dropdown from '../components/Dropdown';
    import DropdownItem from '../components/DropdownItem';
    
    const [isVisible, setVisible] = useState(false);
    
    function showHandler() {
      setVisible(true);
    }
    
    <Button onClick={showHandler}>Launch demo offcanvas</Button>
    <Offcanvas title="Basic offcanvas" visible={isVisible} onCancel={cancelHandler}>
      <Dropdown buttonName="Dropdown button">
        <DropdownItem isActive itemId="1">
          Action
        </DropdownItem>
        <DropdownItem isDisabled itemId="2">
          Another action
        </DropdownItem>
        <DropdownItem itemId="3">
          Something else here
        </DropdownItem>
        <hr className="dropdown-divider" />
        <DropdownItem itemId="4">Separated link</DropdownItem>
      </Dropdown>
    </Offcanvas>
  `;

  const placement = `
    import Offcanvas from '../components/Offcanvas';
    import Button from '../components/Button';
    import Dropdown from '../components/Dropdown';
    import DropdownItem from '../components/DropdownItem';
    
    const [isVisible, setVisible] = useState(false);
    const [isVisible1, setVisible1] = useState(false);
    const [isVisible2, setVisible2] = useState(false);
      
    function showHandler() {
      setVisible(true);
    }
    
    function cancelHandler() {
      setVisible(false);
    }
  
    function showHandler1() {
      setVisible1(true);
    }
  
    function cancelHandler1() {
      setVisible1(false);
    }
  
    function showHandler2() {
      setVisible2(true);
    }
  
    function cancelHandler2() {
      setVisible2(false);
    }

    
    <Button onClick={showHandler}>Launch demo top</Button>
    <Offcanvas title="top" visible={isVisible} onCancel={cancelHandler} position="top">
      <Dropdown buttonName="Dropdown button" type="normal">
        <DropdownItem isActive itemId="1">
          Action
        </DropdownItem>
        <DropdownItem isDisabled itemId="2">
          Another action
        </DropdownItem>
        <DropdownItem itemId="3">
          Something else here
        </DropdownItem>
        <hr className="dropdown-divider" />
        <DropdownItem itemId="4">Separated link</DropdownItem>
      </Dropdown>
    </Offcanvas>
    
    <Button onClick={showHandler1}>Launch demo right</Button>
    <Offcanvas title="right" visible={isVisible1} onCancel={cancelHandler1} position="end">
      <Dropdown buttonName="Dropdown button" type="normal">
        <DropdownItem isActive itemId="1">
          Action
        </DropdownItem>
        <DropdownItem isDisabled itemId="2">
          Another action
        </DropdownItem>
        <DropdownItem itemId="3">
          Something else here
        </DropdownItem>
        <hr className="dropdown-divider" />
        <DropdownItem itemId="4">Separated link</DropdownItem>
      </Dropdown>
    </Offcanvas>
    
    <Button onClick={showHandler2}>Launch demo buttom</Button>
    <Offcanvas
      title="Buttom"
      visible={isVisible2}
      onCancel={cancelHandler2}
      position="bottom"
    >
      <Dropdown buttonName="Dropdown button" type="normal">
        <DropdownItem isActive itemId="1">
          Action
        </DropdownItem>
        <DropdownItem isDisabled itemId="2">
          Another action
        </DropdownItem>
        <DropdownItem itemId="3">
          <a>Something else here</a>
        </DropdownItem>
        <hr className="dropdown-divider" />
        <DropdownItem itemId="4">Separated link</DropdownItem>
      </Dropdown>
    </Offcanvas>
  `;

  return (
    <div className="rb-offcanvases">
      <section className="rb-offcanvas-basic">
        <h1 className="rb-title">Offcanvas</h1>
        <div className="rb-group">
          <div className="rb-offcanvas-wrapper">
            <Button onClick={showHandler}>Launch demo offcanvas</Button>
            <Offcanvas title="Basic offcanvas" visible={isVisible} onCancel={cancelHandler}>
              <Dropdown buttonName="Dropdown button" type="normal">
                <DropdownItem isActive itemId="1">
                  Action
                </DropdownItem>
                <DropdownItem isDisabled itemId="2">
                  Another action
                </DropdownItem>
                <DropdownItem itemId="3">
                  Something else here
                </DropdownItem>
                <hr className="dropdown-divider" />
                <DropdownItem itemId="4">Separated link</DropdownItem>
              </Dropdown>
            </Offcanvas>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {left2right}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-offcanvas-basic">
        <div className="rb-title">Placement</div>
        <div className="rb-group">
          <div className="rb-offcanvas-wrapper">
            <Button onClick={showHandler1}>Launch demo top</Button>
            <Offcanvas title="top" visible={isVisible1} onCancel={cancelHandler1} position="top">
              <Dropdown buttonName="Dropdown button" type="normal">
                <DropdownItem isActive itemId="1">
                  Action
                </DropdownItem>
                <DropdownItem isDisabled itemId="2">
                  Another action
                </DropdownItem>
                <DropdownItem itemId="3">
                  Something else here
                </DropdownItem>
                <hr className="dropdown-divider" />
                <DropdownItem itemId="4">Separated link</DropdownItem>
              </Dropdown>
            </Offcanvas>
          </div>
        </div>
        <div className="rb-group">
          <div className="rb-offcanvas-wrapper">
            <Button onClick={showHandler2}>Launch demo right</Button>
            <Offcanvas title="right" visible={isVisible2} onCancel={cancelHandler2} position="end">
              <Dropdown buttonName="Dropdown button" type="normal">
                <DropdownItem isActive itemId="1">
                  Action
                </DropdownItem>
                <DropdownItem isDisabled itemId="2">
                  Another action
                </DropdownItem>
                <DropdownItem itemId="3">
                  Something else here
                </DropdownItem>
                <hr className="dropdown-divider" />
                <DropdownItem itemId="4">Separated link</DropdownItem>
              </Dropdown>
            </Offcanvas>
          </div>
        </div>

        <div className="rb-group">
          <div className="rb-offcanvas-wrapper">
            <Button onClick={showHandler3}>Launch demo buttom</Button>
            <Offcanvas
              title="Buttom"
              visible={isVisible3}
              onCancel={cancelHandler3}
              position="bottom"
            >
              <Dropdown buttonName="Dropdown button" type="normal">
                <DropdownItem isActive itemId="1">
                  Action
                </DropdownItem>
                <DropdownItem isDisabled itemId="2">
                  Another action
                </DropdownItem>
                <DropdownItem itemId="3">
                  <a>Something else here</a>
                </DropdownItem>
                <hr className="dropdown-divider" />
                <DropdownItem itemId="4">Separated link</DropdownItem>
              </Dropdown>
            </Offcanvas>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {placement}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Offcanvases;

import React, { useState } from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Toast from '../components/Toast';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Times from '../assets/icons/svg/times-regular.svg';

function Toasts() {
  const [isVisible, setVisible] = useState(false);
  const [isVisible1, setVisible1] = useState(false);
  const [isVisible2, setVisible2] = useState(false);
  const [isVisible3, setVisible3] = useState(false);

  const content = (
    <>
      <div className="toast-header">
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <Button variant="link" prefixIcon={<Icon component={Times} />} onClick={closeHandler} />
      </div>
      <div className="toast-body">Hello, world! This is a toast message.</div>
    </>
  );

  const content1 = (
    <>
      <div className="toast-header">
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <Button variant="link" prefixIcon={<Icon component={Times} />} onClick={closeHandler1} />
      </div>
      <div className="toast-body">See? Just like this.</div>
    </>
  );

  const content2 = (
    <>
      <div className="toast-header">
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <Button variant="link" prefixIcon={<Icon component={Times} />} onClick={closeHandler2} />
      </div>
      <div className="toast-body">See? Just like this.</div>
    </>
  );

  const content3 = (
    <>
      <div className="d-flex justify-content-between">
        <div className="toast-body">See? Just like this.</div>
        <Button variant="link" prefixIcon={<Icon component={Times} />} onClick={closeHandler3} />
      </div>
    </>
  );

  function visibilityHandler() {
    setVisible(true);
  }

  function visibilityHandler1() {
    setVisible1(true);
    setVisible2(true);
  }

  function visibilityHandler3() {
    setVisible3(true);
    // setTimeout(() => {
    //   setVisible2(false);
    // }, 2000);
  }

  function closeHandler() {
    setVisible(false);
  }
  function closeHandler1() {
    setVisible1(false);
  }
  function closeHandler2() {
    setVisible2(false);
  }

  function closeHandler3() {
    setVisible3(false);
  }

  const basic = `
    import Toast from '../components/Toast';
    import Button from '../components/Button';
    import Icon from '../components/Icon';
    import Times from '../assets/icons/svg/times-regular.svg';
    
    const [isVisible, setVisible] = useState(false);
    
    function visibilityHandler() {
      setVisible(true);
    }
    
    function closeHandler() {
      setVisible(false);
    }
    
    const content = (
      <>
        <div className="toast-header">
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <Button variant="link" prefixIcon={<Icon component={Times} />} onClick={closeHandler} />
        </div>
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </>
    );
    
    <Button onClick={visibilityHandler}>live demo</Button>
    <div className="position-fixed top-0 start-50 translate-middle-x p-3">
      <Toast animate show={isVisible}>
        {content}
      </Toast>
    </div>
  `;

  const stacking = `
    import Toast from '../components/Toast';
    import Button from '../components/Button';
    import Icon from '../components/Icon';
    import Times from '../assets/icons/svg/times-regular.svg';
    
    const [isVisible1, setVisible1] = useState(false);
    const [isVisible2, setVisible2] = useState(false);
    
    function visibilityHandler() {
      setVisible1(true);
      setVisible1(true);
    }
    
    function closeHandler1() {
      setVisible1(false);
    }
    
    function closeHandler2() {
      setVisible1(false);
    }
    
    const content1 = (
      <>
        <div className="toast-header">
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <Button variant="link" prefixIcon={<Icon component={Times} />} onClick={closeHandler1} />
        </div>
        <div className="toast-body">See? Just like this.</div>
      </>
    );
    
    const content2 = (
      <>
        <div className="toast-header">
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <Button variant="link" prefixIcon={<Icon component={Times} />} onClick={closeHandler2} />
        </div>
        <div className="toast-body">See? Just like this.</div>
      </>
    );
    
    <Button onClick={visibilityHandler}>live demo</Button>
    <div className="toast-container">
      <Toast animate show={isVisible1}>
        {content}
      </Toast>
      <Toast animate show={isVisible2}>
        {content1}
      </Toast>
    </div>
  `;

  const custom = `
    import Toast from '../components/Toast';
    import Button from '../components/Button';
    import Icon from '../components/Icon';
    import Times from '../assets/icons/svg/times-regular.svg';
    
    const [isVisible3, setVisible3] = useState(false);
    
    function visibilityHandler3() {
      setVisible3(true);
    }
    
    function closeHandler3() {
      setVisible3(false);
    }
      
    const content3 = (
      <>
        <div className="d-flex justify-content-between">
          <div className="toast-body">See? Just like this.</div>
          <Button variant="link" prefixIcon={<Icon component={Times} />} onClick={closeHandler3} />
        </div>
      </>
    );
    
    <Button onClick={visibilityHandler3}>live demo</Button>
    <Toast
      animate
      show={isVisible3}
      className="align-items-center text-white bg-primary border-0"
    >
      {content3}
    </Toast>
  `;

  return (
    <div className="rb-toasts">
      <section className="rb-toast-basic">
        <h1 className="rb-title">Toasts</h1>
        <div className="rb-group">
          <div className="rb-toast-wrapper">
            <Button onClick={visibilityHandler}>live demo</Button>
            <div className="position-fixed top-0 start-50 translate-middle-x p-3">
              <Toast animate show={isVisible}>
                {content}
              </Toast>
            </div>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {basic}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-toast-basic">
        <h1 className="rb-title">Stacking</h1>
        <div className="rb-group">
          <div className="rb-toast-wrapper">
            <Button onClick={visibilityHandler1}>live demo</Button>
            <div className="toast-container">
              <Toast animate show={isVisible1}>
                {content1}
              </Toast>
              <Toast animate show={isVisible2}>
                {content2}
              </Toast>
            </div>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {stacking}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-toast-basic">
        <h1 className="rb-title">Custom content</h1>
        <div className="rb-group">
          <div className="rb-toast-wrapper">
            <Button onClick={visibilityHandler3}>live demo</Button>
            <Toast
              animate
              show={isVisible3}
              className="align-items-center text-white bg-primary border-0"
            >
              {content3}
            </Toast>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {custom}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Toasts;

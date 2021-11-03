import React, { useState } from 'react';
import Toast from '../components/Toast';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Times from '../assets/icons/svg/times-regular.svg';

function Toasts() {
  const [isVisible, setVisible] = useState(false);
  const [isVisible1, setVisible1] = useState(false);
  const [isVisible2, setVisible2] = useState(false);

  const content = (
    <>
      <div className="toast-header">
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <Button variant="link" PrefixIcon={<Icon Component={Times} />} onClick={closeHandler} />
      </div>
      <div className="toast-body">Hello, world! This is a toast message.</div>
    </>
  );

  const content1 = (
    <>
      <div className="toast-header">
        <strong className="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <Button variant="link" PrefixIcon={<Icon Component={Times} />} onClick={closeHandler1} />
      </div>
      <div className="toast-body">See? Just like this.</div>
    </>
  );

  const content2 = (
    <>
      <div className="d-flex justify-content-between">
        <div className="toast-body">See? Just like this.</div>
        <Button variant="link" PrefixIcon={<Icon Component={Times} />} onClick={closeHandler2} />
      </div>
    </>
  );

  function visibilityHandler() {
    setVisible(true);
    // setTimeout(() => {
    //   setVisible(false);
    // }, 2000);
  }

  function visibilityHandler1() {
    setVisible1(true);
    // setTimeout(() => {
    //   setVisible1(false);
    // }, 2000);
  }

  function visibilityHandler2() {
    setVisible2(true);
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

  return (
    <div className="rc-navbars">
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic toast</div>
        <div className="rc-group">
          <div className="rc-item">
            <Button onClick={visibilityHandler}>live demo</Button>
            <div className="position-fixed top-0 start-50 translate-middle-x p-3">
              <Toast animate show={isVisible}>
                {content}
              </Toast>
            </div>
          </div>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic toast</div>
        <div className="rc-group">
          <div className="rc-item">
            <Button onClick={visibilityHandler1}>live demo</Button>
            <div className="toast-container">
              <Toast animate show={isVisible1}>
                {content}
              </Toast>
              <Toast animate show={isVisible1}>
                {content1}
              </Toast>
            </div>
          </div>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic toast</div>
        <div className="rc-group">
          <div className="rc-item">
            <Button onClick={visibilityHandler2}>live demo</Button>
            <Toast
              animate
              show={isVisible2}
              className="align-items-center text-white bg-primary border-0"
            >
              {content2}
            </Toast>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Toasts;

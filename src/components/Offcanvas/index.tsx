import React, { useCallback, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../Icon';
import Times from '../../assets/icons/svg/times-regular.svg';
import Button from '../Button';

interface PropsTypes {
  onCancel: any;
  title: string;
  visible: boolean;
  children: any;
}

Offcanvas.defaultProps = {};

function Offcanvas(props: PropsTypes) {
  const { onCancel, title, visible, children } = props;
  const offcanvasRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  function setupDialog() {
    const offcanvasDom = offcanvasRef.current;
    const backdropDom = backdropRef.current;
    if (offcanvasDom && backdropDom) {
      backdropDom.style.visibility = 'visible';
      offcanvasDom.style.visibility = 'visible';
      requestAnimationFrame(() => {
        backdropDom.classList.add('show', 'fade');
        offcanvasDom.classList.add('show');
      });
    }
  }

  function removeDialog() {
    const offcanvasDom = offcanvasRef.current;
    const backdropDom = backdropRef.current;
    if (offcanvasDom && backdropDom) {
      requestAnimationFrame(() => {
        backdropDom.classList.remove('fade', 'show');
        offcanvasDom.classList.remove('show');
        backdropDom.style.visibility = 'hidden';
      });
    }
  }

  useEffect(() => {
    if (visible) {
      setupDialog();
    } else {
      removeDialog();
    }
  }, [visible]);

  const offcanvas = (
    <div className="offcanvas offcanvas-start" ref={offcanvasRef}>
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">{title}</h5>
        <Button variant="link" PrefixIcon={<Icon Component={Times} />} onClick={onCancel} />
      </div>
      <div className="offcanvas-body">{children}</div>
    </div>
  );

  const backdrop = <div className="offcanvas-backdrop" ref={backdropRef} onClick={onCancel} />;

  const Combinaton = (
    <>
      {backdrop}
      {offcanvas}
    </>
  );

  return ReactDOM.createPortal(Combinaton, document.body);
}

export default Offcanvas;

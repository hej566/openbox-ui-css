import React, { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../Icon';
import Times from '../../assets/icons/svg/times-regular.svg';
import Button from '../Button';

interface PropsTypes {
  onConfirm: any;
  onCancel: any;
  title: string;
  visible: boolean;
  children: any;
  scrollable?: boolean;
  centered?: boolean;
  footer?: React.ReactNode[];
}

Modal.defaultProps = {
  scrollable: false,
  centered: false,
  footer: [],
};

function Modal(props: PropsTypes) {
  const { onConfirm, onCancel, title, visible, children, scrollable, centered, footer } = props;
  const dialogClasses: string[] = ['modal-dialog'];
  if (scrollable) dialogClasses.push('modal-dialog-scrollable');
  if (centered) dialogClasses.push('modal-dialog-centered');
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  function setupDialog() {
    const modalDom = modalRef.current;
    const backdropDom = backdropRef.current;
    if (modalDom && backdropDom) {
      backdropDom.style.visibility = 'visible';
      modalDom.style.visibility = 'visible';
      requestAnimationFrame(() => {
        backdropDom.classList.add('show');
        modalDom.classList.add('show');
      });
    }
  }

  function removeDialog() {
    const modalDom = modalRef.current;
    const backdropDom = backdropRef.current;
    if (modalDom && backdropDom) {
      requestAnimationFrame(() => {
        backdropDom.classList.remove('show');
        backdropDom.style.visibility = 'hidden';
        modalDom.classList.remove('show');
      });
    }
  }

  function transitionEndHandler(e: any) {
    const modalDom = modalRef.current;
    if (modalDom && e.target.classList.contains('modal')) {
      if (!visible) {
        modalDom.style.visibility = 'hidden';
      }
    }
  }

  function clickHandler(e: any) {
    if (e.target.classList.contains('modal') || e.target.classList.contains('modal-dialog')) {
      onCancel(e);
    }
  }

  useEffect(() => {
    if (visible) {
      setupDialog();
      document.body.style.overflow = 'hidden';
    } else {
      removeDialog();
      document.body.style.overflow = 'auto';
    }
  }, [visible]);

  const modal = (
    <div
      className="modal fade"
      ref={modalRef}
      tabIndex={-1}
      onTransitionEnd={transitionEndHandler}
      onClick={clickHandler}
    >
      <div className={dialogClasses.join(' ')}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <Button variant="link" PrefixIcon={<Icon Component={Times} />} onClick={onCancel} />
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            {footer && footer.length ? (
              footer
            ) : (
              <>
                <Button variant="secondary" onClick={onCancel}>
                  Close
                </Button>
                <Button variant="primary" onClick={onConfirm}>
                  Save changes
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const backdrop = <div className="modal-backdrop" ref={backdropRef} />;

  const Combinaton = (
    <>
      {backdrop}
      {modal}
    </>
  );

  return ReactDOM.createPortal(Combinaton, document.body);
}

export default Modal;

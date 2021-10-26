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
      requestAnimationFrame(() => {
        backdropDom.style.visibility = 'visible';
        backdropDom.classList.add('show');
        modalDom.style.visibility = 'visible';
        modalDom.classList.add('show');
        setTimeout(() => {
          document.body.style.overflow = 'hidden';
          document.body.style.paddingRight = '15px';
          document.body.classList.add('modal-open');
        }, 0);
      });
    }
  }

  function removeDialog() {
    const modalDom = modalRef.current;
    const backdropDom = backdropRef.current;
    if (modalDom && backdropDom) {
      requestAnimationFrame(() => {
        modalDom.classList.remove('show');
        modalDom.style.visibility = 'hidden';
        backdropDom.classList.remove('show');
        setTimeout(() => {
          document.body.style.overflow = '';
          document.body.style.paddingRight = '';
          document.body.classList.remove('modal-open');
        }, 0);
      });
    }
  }

  function transitionEndHandler(e: any) {
    const modalDom = modalRef.current;
    const backdropDom = backdropRef.current;
    if (modalDom && backdropDom && e.target.classList.contains('modal')) {
      if (!visible) {
        modalDom.style.visibility = 'hidden';
        backdropDom.style.visibility = 'hidden';
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
    } else {
      removeDialog();
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

import React, { useCallback, useRef } from 'react';
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
  const dialogRef = useRef<HTMLDivElement>(null);

  const backdropRef = useCallback(
    (node) => {
      if (node) {
        if (visible) {
          node.style.display = 'block';
        } else {
          node.style.display = 'none';
        }
      }
    },
    [visible]
  );

  const modalRef = useCallback(
    (node) => {
      if (node) {
        if (visible) {
          node.style.display = 'block';
          node.addEventListener('click', onCancel);
        } else {
          node.style.display = 'none';
          node.removeEventListener('click', onCancel);
        }
      }
    },
    [visible]
  );

  function mouseEnterHandler() {
    const dialogDom = dialogRef.current;
    if (dialogDom && dialogDom.parentNode) {
      dialogDom.parentNode.removeEventListener('click', onCancel);
    }
  }

  function mouseLeaveHandler() {
    const dialogDom = dialogRef.current;
    if (dialogDom && dialogDom.parentNode) {
      dialogDom.parentNode.addEventListener('click', onCancel);
    }
  }

  const modal = (
    <div className="modal" ref={modalRef}>
      <div
        className={dialogClasses.join(' ')}
        ref={dialogRef}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
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

  if (visible) return ReactDOM.createPortal(Combinaton, document.body);
  return null;
}

export default Modal;

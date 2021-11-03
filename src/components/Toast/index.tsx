import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface PropsTypes {
  className?: string;
  animate?: boolean;
  children: ReactNode;
  show?: boolean;
}

Toast.defaultProps = {
  className: '',
  animate: false,
  show: false,
};

function Toast(props: PropsTypes) {
  const { children, className, animate, show } = props;
  const toastClasses: string[] = ['toast'];
  const toastRef = useRef<HTMLDivElement>(null);

  if (className) toastClasses.push(className);

  function transitionEndHandler() {
    const toastDom = toastRef.current;
    if (toastDom) {
      if (!show) {
        toastDom.classList.remove('show');
        toastDom.classList.add('hide');
      }
    }
  }

  function setup() {
    const toastDom = toastRef.current;
    if (toastDom) {
      if (toastDom.classList.contains('hide')) {
        toastDom.classList.remove('hide');
      }
      requestAnimationFrame(() => {
        if (animate) toastDom.classList.add('fade');
        toastDom.classList.add('show');
        toastDom.classList.add('showing');
        requestAnimationFrame(() => {
          toastDom.classList.remove('showing');
        });
      });
    }
  }

  function remove() {
    const toastDom = toastRef.current;
    if (toastDom) {
      requestAnimationFrame(() => {
        toastDom.classList.add('showing');
      });
    }
  }

  useEffect(() => {
    if (show) {
      setup();
    } else {
      remove();
    }
  }, [show]);

  return (
    <div
      className={toastClasses.join(' ')}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      onTransitionEnd={transitionEndHandler}
      ref={toastRef}
    >
      {children}
    </div>
  );
}

export default Toast;

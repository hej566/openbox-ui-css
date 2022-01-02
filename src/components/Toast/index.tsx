import React, { useEffect, useRef } from 'react';

interface PropsTypes {
  className?: string;
  animate?: boolean;
  children: React.ReactNode;
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
    const toastElement = toastRef.current;
    if (toastElement) {
      if (!show) {
        toastElement.classList.remove('show');
        toastElement.classList.add('hide');
      }
    }
  }

  function setup() {
    const toastElement = toastRef.current;
    if (toastElement) {
      if (toastElement.classList.contains('hide')) {
        toastElement.classList.remove('hide');
      }
      requestAnimationFrame(() => {
        if (animate) toastElement.classList.add('fade');
        toastElement.classList.add('show');
        toastElement.classList.add('showing');
        requestAnimationFrame(() => {
          toastElement.classList.remove('showing');
        });
      });
    }
  }

  function remove() {
    const toastElement = toastRef.current;
    if (toastElement) {
      requestAnimationFrame(() => {
        toastElement.classList.add('showing');
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

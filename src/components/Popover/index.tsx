import React, { useEffect, useRef } from 'react';
import tippy, { sticky, animateFill } from 'tippy.js';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/dist/tippy.css';

interface PropsTypes {
  children?: any;
  className?: string;
  template: any;
  placement: any;
}

Popover.defaultProps = {
  className: '',
  children: null,
};

function Popover(props: PropsTypes) {
  const { children, className, template, placement } = props;
  const popoverTargetRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const popoverTargetClasses: string[] = ['popover-target'];
  const popoverClasses: string[] = ['popover'];

  if (placement) popoverClasses.push(`popover-${placement}`);

  function setupTippy() {
    const popoverTargetDom = popoverTargetRef.current;
    const popoverDom = popoverRef.current;
    if (popoverTargetDom && popoverDom) {
      tippy(popoverTargetDom, {
        allowHTML: true,
        animateFill: false,
        interactive: true,
        arrow: true,
        content: popoverDom,
        trigger: 'click',
        appendTo: popoverTargetDom,
        plugins: [sticky, animateFill],
        maxWidth: 'none',
        theme: 'rb-popover',
        placement,
        sticky: true,
      });
    }
  }

  useEffect(() => {
    setupTippy();
  }, []);

  return (
    <>
      <div className={popoverTargetClasses.join('popover-target')} ref={popoverTargetRef}>
        {children}
      </div>
      <div ref={popoverRef} className={popoverClasses.join(' ')}>
        {template}
      </div>
    </>
  );
}

export default Popover;

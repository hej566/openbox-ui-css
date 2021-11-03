import React, { useEffect, useRef } from 'react';
import tippy, { sticky, animateFill } from 'tippy.js';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/dist/tippy.css';

interface PropsTypes {
  children?: any;
  className?: string;
  template: any;
  placement: any;
  trigger: string;
}

Tooltip.defaultProps = {
  className: '',
  children: null,
};

function Tooltip(props: PropsTypes) {
  const { children, className, template, placement, trigger } = props;
  const tooltipTargetRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const tooltipTargetClasses: string[] = ['tooltip-target'];
  const tooltipClasses: string[] = ['tooltip'];
  const triggerMethods: string[] = [''];

  if (trigger === 'click') {
    triggerMethods.push('click');
  } else if (trigger === 'hover') {
    triggerMethods.push('mouseenter');
  }

  if (placement) tooltipClasses.push(`tooltip-${placement}`);

  function setupTippy() {
    const tooltipTargetDom = tooltipTargetRef.current;
    const tooltipDom = tooltipRef.current;
    if (tooltipTargetDom && tooltipDom) {
      tippy(tooltipTargetDom, {
        allowHTML: true,
        animateFill: false,
        interactive: true,
        arrow: true,
        content: tooltipDom,
        trigger: triggerMethods.join(' '),
        appendTo: tooltipTargetDom,
        plugins: [sticky, animateFill],
        maxWidth: 'none',
        theme: 'rb-tooltip',
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
      <div className={tooltipTargetClasses.join('tooltip-target')} ref={tooltipTargetRef}>
        {children}
      </div>
      <div ref={tooltipRef} className={tooltipClasses.join(' ')}>
        {template}
      </div>
    </>
  );
}

export default Tooltip;

import React, { useLayoutEffect, useRef } from 'react';
import { createPopper } from '@popperjs/core';
import Arrow from '../../assets/icons/svg/sort-up-solid.svg';

interface PropsTypes {
  children?: any;
  className?: string;
  template: any;
  placement?: any;
  isDisabled?: boolean;
  offset?: [number, number];
  arrow?: boolean;
}

Popover.defaultProps = {
  className: '',
  children: null,
  isDisabled: false,
  offset: [0, 0],
  placement: 'auto',
  arrow: false,
};

function Popover(props: PropsTypes) {
  const { children, className, template, placement, isDisabled, offset, arrow } = props;
  const popoverTargetRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const popoverArrowRef = useRef<HTMLDivElement>(null);

  const popoverTargetClasses: string[] = ['popover-target'];
  const popoverClasses: string[] = ['popover'];

  const popperFlipModifier = {
    name: 'flip',
    enabled: true,
  };

  const popperOffsetModifier = {
    name: 'offset',
    options: {
      offset: (instance: any) => {
        const { placement } = instance;
        if (placement === 'right') {
          return [0, 8];
        }
        if (placement === 'left') {
          return [0, 8];
        }
        if (placement === 'top') {
          return [0, 8];
        }
        if (placement === 'bottom') {
          return [0, 8];
        }
        return [0, 0];
      },
    },
  };

  function setupPopper() {
    const popoverTargetElement = popoverTargetRef.current!;
    const popoverElement = popoverRef.current!;
    createPopper(popoverTargetElement, popoverElement, {
      placement,
      modifiers: [popperFlipModifier, popperOffsetModifier],
    });
    popoverElement.style.zIndex = '1';
  }

  function show() {
    popoverRef.current!.style.display = 'block';
    if (arrow) popoverArrowRef.current!.style.display = 'block';
    setupPopper();
  }

  function hide() {
    if (arrow) popoverArrowRef.current!.style.display = 'none';
    popoverRef.current!.style.display = 'none';
  }

  useLayoutEffect(() => {
    popoverRef.current!.style.display = 'none';
  }, []);

  return (
    <>
      <div
        className={popoverTargetClasses.join('popover-target')}
        ref={popoverTargetRef}
        onMouseEnter={isDisabled ? () => {} : show}
        onMouseLeave={isDisabled ? () => {} : hide}
      >
        {children}
      </div>
      <div ref={popoverRef} className={popoverClasses.join(' ')}>
        {arrow && (
          <div className="popover-arrow" ref={popoverArrowRef}>
            <Arrow />
          </div>
        )}
        {template}
      </div>
    </>
  );
}

export default Popover;

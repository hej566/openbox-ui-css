import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { createPopper } from '@popperjs/core';
import Arrow from '../../assets/icons/svg/sort-up-solid.svg';

interface PropsTypes {
  children?: any;
  className?: string;
  template: any;
  placement: any;
  isDisabled?: boolean;
}

Tooltip.defaultProps = {
  className: '',
  children: null,
  isDisabled: false,
};

function Tooltip(props: PropsTypes) {
  const { children, className, template, placement, isDisabled } = props;
  const tooltipTargetRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipArrowRef = useRef<HTMLDivElement>(null);

  const tooltipTargetClasses: string[] = ['tooltip-target'];
  const tooltipClasses: string[] = ['tooltip'];

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
    const tooltipTargetElement = tooltipTargetRef.current!;
    const tooltipElement = tooltipRef.current!;
    createPopper(tooltipTargetElement, tooltipElement, {
      placement,
      modifiers: [popperFlipModifier, popperOffsetModifier],
    });
    tooltipElement.style.zIndex = '1';
  }

  function show() {
    tooltipRef.current!.style.display = 'block';
    tooltipArrowRef.current!.style.display = 'block';
    setupPopper();
  }

  function hide() {
    tooltipArrowRef.current!.style.display = 'none';
    tooltipRef.current!.style.display = 'none';
  }

  const modifiedChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onFocus: show,
      onBlur: hide,
    });
  });

  useLayoutEffect(() => {
    tooltipRef.current!.style.display = 'none';
  }, []);

  return (
    <>
      <div
        className={tooltipTargetClasses.join('tooltip-target')}
        ref={tooltipTargetRef}
        onMouseEnter={isDisabled ? () => {} : show}
        onMouseLeave={isDisabled ? () => {} : hide}
        role="tooltip"
      >
        {modifiedChildren}
      </div>
      <div ref={tooltipRef} className={tooltipClasses.join(' ')}>
        <div className="tooltip-arrow" ref={tooltipArrowRef}>
          <Arrow />
        </div>
        <div className="tooltip-inner">{template}</div>
      </div>
    </>
  );
}

export default Tooltip;

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import Icon from '../Icon';
import ChervonDown from '../../assets/icons/svg/chevron-down-regular.svg';
import Button from '../Button';

const AccordionItem = (props: propTypes) => {
  const { title, children, AccordionIcon, onClick, isOpen, className } = props;
  const accordionItemClasses: Array<string> = [`${NS}-accordion-item`];
  const accordionItemButtonClasses: Array<string> = [`${NS}-accordion-item__button`];
  const accordionItemBodyClasses: Array<string> = [`${NS}-accordion-item__body`];
  const accordionItemHeaderClasses: Array<string> = [`${NS}-accordion-item__header`];
  const accordionItemBodyRef = useRef<HTMLDivElement>(null);

  if (className) accordionItemClasses.push(className);

  if (isOpen) {
    accordionItemButtonClasses.push(`${NS}-accordion-item__button--show`);
    accordionItemBodyClasses.push(`${NS}-accordion-item__body--show`);
  } else {
    accordionItemButtonClasses.push(`${NS}-accordion-item__button--collapsed`);
    accordionItemBodyClasses.push(`${NS}-accordion-item__body--collapsed`);
  }

  const openTransition = () => {
    const accordionItemBodyElm = accordionItemBodyRef.current;
    if (accordionItemBodyElm) {
      accordionItemBodyElm.classList.add('transitioning');
      requestAnimationFrame(() => {
        accordionItemBodyElm.style.height = `${accordionItemBodyElm.scrollHeight}px`;
      });
    }
  };

  const closeTransition = () => {
    const accordionItemBodyElm = accordionItemBodyRef.current;
    if (accordionItemBodyElm) {
      accordionItemBodyElm.classList.add('transitioning');
      requestAnimationFrame(() => {
        accordionItemBodyElm.style.height = `0px`;
      });
    }
  };

  const transitionEndHandler = (e: any) => {
    const accordionItemBodyElm = accordionItemBodyRef.current;
    if (accordionItemBodyElm) {
      if (isOpen) {
        accordionItemBodyElm.classList.remove('transitioning');
        accordionItemBodyElm.style.height = `auto`;
      } else {
        accordionItemBodyElm.classList.remove('transitioning');
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      openTransition();
    } else {
      closeTransition();
    }
  }, [isOpen]);

  return (
    <div className={accordionItemClasses.join(' ')}>
      <h2 className={accordionItemHeaderClasses.join(' ')}>
        <Button
          className={accordionItemButtonClasses.join(' ')}
          ariaExpanded={isOpen}
          onClick={onClick}
          SuffixIcon={AccordionIcon}
          variant="link"
          toggle
        >
          {title}
        </Button>
      </h2>
      <div
        className={accordionItemBodyClasses.join(' ')}
        ref={accordionItemBodyRef}
        onTransitionEnd={transitionEndHandler}
      >
        {children}
      </div>
    </div>
  );
};

type propTypes = {
  title: string;
  children: any;
  AccordionIcon?: React.ReactComponentElement<any>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  isOpen?: boolean;
  className?: string;
};

AccordionItem.defaultProps = {
  AccordionIcon: <Icon Component={ChervonDown} />,
  onClick: () => {},
  isOpen: false,
  className: '',
};

export default AccordionItem;

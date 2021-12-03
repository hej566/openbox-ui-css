import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
  const [isInit, setInitState] = useState<boolean>(true);

  if (className) accordionItemClasses.push(className);

  if (isOpen) {
    accordionItemButtonClasses.push(`${NS}-accordion-item__button--show`);
    accordionItemBodyClasses.push(`${NS}-accordion-item__body--show`);
  } else {
    accordionItemButtonClasses.push(`${NS}-accordion-item__button--collapsed`);
    accordionItemBodyClasses.push(`${NS}-accordion-item__body--collapsed`);
  }

  const openTransition = () => {
    if (!isInit) {
      const accordionItemBodyElm = accordionItemBodyRef.current;
      if (accordionItemBodyElm) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            accordionItemBodyElm.style.height = `${accordionItemBodyElm.scrollHeight}px`;
          });
        });
      }
    } else {
      const accordionItemBodyElm = accordionItemBodyRef.current;
      if (accordionItemBodyElm) {
        accordionItemBodyElm.style.height = `${accordionItemBodyElm.scrollHeight}px`;
      }
      setInitState(false);
    }
  };

  const closeTransition = () => {
    if (!isInit) {
      const accordionItemBodyElm = accordionItemBodyRef.current;
      if (accordionItemBodyElm) {
        requestAnimationFrame(() => {
          accordionItemBodyElm.style.height = `${accordionItemBodyElm.scrollHeight}px`;
          requestAnimationFrame(() => {
            accordionItemBodyElm.style.height = `0px`;
          });
        });
      }
    } else {
      const accordionItemBodyElm = accordionItemBodyRef.current;
      if (accordionItemBodyElm) {
        accordionItemBodyElm.style.height = `0px`;
      }
      setInitState(false);
    }
  };

  const transitionEndHandler = (e: any) => {
    const accordionItemBodyElm = accordionItemBodyRef.current;
    if (accordionItemBodyElm) {
      if (isOpen) {
        accordionItemBodyElm.style.height = `auto`;
      } else {
        accordionItemBodyElm.style.height = `0px`;
      }
    }
  };

  useEffect(() => {
    if (isOpen) openTransition();
    else closeTransition();
  }, [isOpen]);

  return (
    <div className={accordionItemClasses.join(' ')}>
      <h2 className={accordionItemHeaderClasses.join(' ')}>
        <Button
          className={accordionItemButtonClasses.join(' ')}
          onClick={onClick}
          suffixIcon={AccordionIcon}
          variant="link"
        >
          {title}
        </Button>
      </h2>
      <div
        className={accordionItemBodyClasses.join(' ')}
        ref={accordionItemBodyRef}
        onTransitionEnd={transitionEndHandler}
      >
        <div className={`${NS}-accordion-item__body__inner`}>{children}</div>
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

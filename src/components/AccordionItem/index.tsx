import React, { useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import ChervonDown from '../../assets/icons/svg/chevron-down-regular.svg';

interface PropsTypes {
  title: string;
  children: any;
  AccordionIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  open?: boolean;
  className?: string;
}

AccordionItem.defaultProps = {
  AccordionIcon: <Icon Component={ChervonDown} />,
  onClick: () => {},
  open: false,
  title: '',
  children: '',
  className: '',
} as PropsTypes;

function AccordionItem(props: PropsTypes) {
  const { title, children, AccordionIcon, onClick, open, className } = props;
  const [accordionBodyHeight, setAccordionHeight] = useState(0);
  const [initAccordionItemState, setInitAccordionItemState] = useState(true);
  const accordionCollapseRef = useRef<HTMLDivElement>(null);
  const accordionButtonClasses: Array<string> = ['accordion-button'];
  const accordionCollapseClasses: Array<string> = ['accordion-collapse'];
  const accordionItemClasses: Array<string> = ['accordion-item'];

  if (className) accordionItemClasses.push(className);

  if (open) {
    accordionCollapseClasses.push('collapse');
    accordionCollapseClasses.push('show');
  } else {
    accordionButtonClasses.push('collapsed');
    accordionCollapseClasses.push('collapse');
  }

  function transitionEndHandler() {
    const accordionCollapseDom = accordionCollapseRef.current;
    if (accordionCollapseDom) {
      if (open) {
        accordionCollapseDom.style.height = '';
        accordionCollapseDom.classList.remove('collapsing');
        accordionCollapseDom.classList.add('collapse', 'show');
      } else {
        accordionCollapseDom.style.height = '';
        accordionCollapseDom.classList.remove('collapsing');
        accordionCollapseDom.classList.add('collapse');
        accordionCollapseDom.style.display = 'none';
      }
    }
  }

  function initAccordionItemHandler() {
    if (initAccordionItemState) {
      setInitAccordionItemState(false);
    }
  }

  useEffect(() => {
    const accordionCollapseDom = accordionCollapseRef.current;
    if (accordionCollapseDom) {
      accordionCollapseDom.style.display = 'block';
      setAccordionHeight(accordionCollapseDom.clientHeight);
      if (!open) {
        accordionCollapseDom.style.display = 'none';
      }
    }
  }, []);

  useEffect(() => {
    const accordionCollapseDom = accordionCollapseRef.current;
    if (accordionCollapseDom && !initAccordionItemState) {
      if (open) {
        requestAnimationFrame(() => {
          accordionCollapseDom.style.display = 'block';
          accordionCollapseDom.style.height = `0px`;
          setTimeout(() => {
            if (accordionBodyHeight) {
              accordionCollapseDom.style.height = `${accordionBodyHeight}px`;
            }
          }, 0);
          accordionCollapseDom.classList.remove('collapse', 'show');
          accordionCollapseDom.classList.add('collapsing');
        });
      } else {
        requestAnimationFrame(() => {
          if (accordionBodyHeight) {
            accordionCollapseDom.style.height = `${accordionBodyHeight}px`;
          }
          setTimeout(() => {
            accordionCollapseDom.style.height = `0px`;
          }, 0);
          accordionCollapseDom.classList.remove('collapse');
          accordionCollapseDom.classList.add('collapsing');
        });
      }
    }
  }, [open]);

  return (
    <div className={accordionItemClasses.join(' ')}>
      <h2 className="accordion-header">
        <button
          className={accordionButtonClasses.join(' ')}
          type="button"
          data-toggle="collapse"
          aria-expanded={open}
          onClick={onClick}
          onClickCapture={initAccordionItemHandler}
        >
          {title}
        </button>
        {AccordionIcon}
      </h2>
      <div
        className={accordionCollapseClasses.join(' ')}
        onTransitionEnd={transitionEndHandler}
        ref={accordionCollapseRef}
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}

export default AccordionItem;

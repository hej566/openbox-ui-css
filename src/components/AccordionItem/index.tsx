import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Icon from '../Icon';
import ChervonDown from '../../assets/icons/svg/chevron-down-regular.svg';

interface PropsType {
  title: string;
  children: any;
  AccordionIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  show?: boolean;
}

AccordionItem.defaultProps = {
  AccordionIcon: <Icon Component={ChervonDown} />,
  onClick: () => {},
  show: false,
};

function AccordionItem(props: PropsType) {
  const { title, children, AccordionIcon, onClick, show } = props;
  const headerUUID = uuidv4();
  const bodyUUID = uuidv4();
  const [accordionBodyHeight, setAccordionHeight] = useState(0);
  const [initAccordionItemState, setInitAccordionItemState] = useState(true);
  const accordionCollapseRef = useRef<HTMLDivElement>(null);
  const accordionButton: Array<string> = ['accordion-button'];
  const accordionCollapse: Array<string> = ['accordion-collapse'];

  function transitionEndHandler() {
    const accordionCollapseDom = accordionCollapseRef.current;
    if (accordionCollapseDom) {
      if (show) {
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
    setInitAccordionItemState(false);
  }

  if (show) {
    accordionCollapse.push('collapse');
    accordionCollapse.push('show');
  } else {
    accordionButton.push('collapsed');
    accordionCollapse.push('collapse');
  }

  useEffect(() => {
    const accordionCollapseDom = accordionCollapseRef.current;
    if (accordionCollapseDom) {
      accordionCollapseDom.style.display = 'block';
      setAccordionHeight(accordionCollapseDom.clientHeight);
      if (!show) {
        accordionCollapseDom.style.display = 'none';
      }
    }
  }, []);

  useEffect(() => {
    const accordionCollapseDom = accordionCollapseRef.current;
    if (accordionCollapseDom && !initAccordionItemState) {
      if (show) {
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
  }, [show]);

  return (
    <div className={`${ns}-accordion-item`}>
      <h2 className="accordion-header" id={headerUUID}>
        <button
          className={accordionButton.join(' ')}
          type="button"
          data-toggle="collapse"
          data-target={`#${bodyUUID}`}
          aria-expanded={show}
          aria-controls={bodyUUID}
          onClick={onClick}
          onClickCapture={initAccordionItemHandler}
        >
          {title}
        </button>
        {AccordionIcon}
      </h2>
      <div
        id={bodyUUID}
        className={accordionCollapse.join(' ')}
        aria-labelledby={headerUUID}
        onTransitionEnd={transitionEndHandler}
        ref={accordionCollapseRef}
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}

export default AccordionItem;

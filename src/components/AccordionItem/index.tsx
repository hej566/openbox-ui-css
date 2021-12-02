import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import Icon from '../Icon';
import ChervonDown from '../../assets/icons/svg/chevron-down-regular.svg';

interface PropsTypes {
  title: string;
  children: any;
  AccordionIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  isOpen?: boolean;
  className?: string;
}

AccordionItem.defaultProps = {
  AccordionIcon: <Icon Component={ChervonDown} />,
  onClick: () => {},
  isOpen: false,
  title: '',
  children: '',
  className: '',
} as PropsTypes;

function AccordionItem(props: PropsTypes) {
  const { title, children, AccordionIcon, onClick, isOpen, className } = props;
  const accordionButtonClasses: Array<string> = ['accordion-button'];
  const accordionClasses: Array<string> = ['accordion-collapse'];
  const accordionItemClasses: Array<string> = ['accordion-item'];

  if (className) accordionItemClasses.push(className);

  if (isOpen) {
    accordionButtonClasses.push('show');
    accordionClasses.push('show');
  } else {
    accordionButtonClasses.push('collapsed');
    accordionClasses.push('collapsed');
  }

  return (
    <div className={accordionItemClasses.join(' ')}>
      <h2 className="accordion-header">
        <button
          className={accordionButtonClasses.join(' ')}
          type="button"
          data-toggle="collapse"
          aria-expanded={isOpen}
          onClick={onClick}
        >
          {title}
        </button>
        {AccordionIcon}
      </h2>
      <div
        className={accordionClasses.join(' ')}
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}

export default AccordionItem;

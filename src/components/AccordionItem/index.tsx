import React from 'react';
import Icon from '../Icon';
import ChervonDown from '../../assets/icons/svg/chevron-down-regular.svg';
import Button from '../Button';

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
  const accordionItemClasses: Array<string> = [`${NS}-accordion-item`];
  const accordionItemButtonClasses: Array<string> = [`${NS}-accordion-item__button`];
  const accordionItemBodyClasses: Array<string> = [`${NS}-accordion-item__body`];


  if (className) accordionItemClasses.push(className);

  if (isOpen) {
    accordionItemButtonClasses.push(`${NS}-accordion-item__button--show`);
    accordionItemBodyClasses.push(`${NS}-accordion-item__body--show`);
  } else {
    accordionItemButtonClasses.push(`${NS}-accordion-item__button--collapsed`);
    accordionItemBodyClasses.push(`${NS}-accordion-item__body--collapsed`);
  }

  return (
    <div className={accordionItemClasses.join(' ')}>
      <h2 className={`${NS}-accordion-item__header`}>
        <Button
          className={accordionItemButtonClasses.join(' ')}
          aria-expanded={isOpen}
          onClick={onClick}
          SuffixIcon={AccordionIcon}
          variant="link"
        >
          {title}
        </Button>
      </h2>
      <div className={accordionItemBodyClasses.join(' ')}>{children}</div>
    </div>
  );
}

export default AccordionItem;

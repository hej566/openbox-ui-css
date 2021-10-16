import React, { useRef, useEffect, useState, forwardRef } from 'react';
import Tippy from '@tippyjs/react';
import Button from '../Button';
import Icon from '../Icon';
import ButtonGroup from '../ButtonGroup';
import ChevronDown from '../../assets/icons/svg/chevron-down-regular.svg';
import 'tippy.js/animations/shift-away.css';

interface PropsTypes {
  children: React.ReactNode[];
  className?: string;
  SuffixIcon?: React.ComponentElement<any, any>;
  variant?: string;
  buttonName?: string;
  split?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  size?: string;
  theme?: string;
  disabled?: boolean;
  link?: boolean;
  open?: boolean;
}

Dropdown.defaultProps = {
  className: '',
  SuffixIcon: <Icon Component={ChevronDown} />,
  onClick: (): void => {},
  children: [],
  variant: 'secondary',
  buttonName: '',
  split: false,
  size: '',
  theme: '',
  disabled: false,
  link: false,
  open: false,
} as PropsTypes;

function Dropdown(props: PropsTypes) {
  const {
    children,
    SuffixIcon,
    variant,
    buttonName,
    split,
    size,
    theme,
    disabled,
    className,
    link,
    open,
  } = props;

  const dropdownMenuClasses: string[] = ['dropdown-menu'];
  const [isOpen, setOpenState] = useState(open);
  const ref = useRef<HTMLButtonElement>(null);

  let suffixIcon: any = null;

  if (theme === 'dark') {
    dropdownMenuClasses.push('dropdown-menu-dark');
  }

  if (className) dropdownMenuClasses.push(className);

  if (SuffixIcon) {
    suffixIcon = React.cloneElement(SuffixIcon, {
      size,
    });
  }

  const show = () => {
    console.log('click');
    setOpenState(true);
  };
  const hide = () => setOpenState(false);

  const content = <nav className={dropdownMenuClasses.join(' ')}>{children}</nav>;

  return (
    <div className="dropdown">
      {split ? (
        <>
          <ButtonGroup>
            <Button variant={variant} size={size} disabled={disabled}>
              {buttonName}
            </Button>
            <Button
              variant={variant}
              SuffixIcon={suffixIcon}
              size={size}
              disabled={disabled}
              onClick={isOpen ? hide : show}
              buttonRef={ref}
              link={link}
            />
          </ButtonGroup>
          <Tippy
            content={content}
            placement="bottom-start"
            visible={isOpen}
            reference={ref}
            onClickOutside={hide}
          />
        </>
      ) : (
        <>
          <Button
            variant={variant}
            SuffixIcon={suffixIcon}
            size={size}
            disabled={disabled}
            onClick={isOpen ? hide : show}
            buttonRef={ref}
            link={link}
          >
            {buttonName}
          </Button>
          <Tippy
            content={content}
            placement="bottom-start"
            visible={isOpen}
            reference={ref}
            onClickOutside={hide}
          />
        </>
      )}
    </div>
  );
}

export default Dropdown;

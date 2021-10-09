import React, { useRef, useEffect } from 'react';
import Button from '../Button';
import Icon from '../Icon';
import ButtonGroup from '../ButtonGroup';
import ChevronDown from '../../assets/icons/svg/chevron-down-regular.svg';
import tippy, { animateFill, sticky } from 'tippy.js';
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
} as PropsTypes;

function Dropdown(props: PropsTypes) {
  const { children, SuffixIcon, variant, buttonName, split, size, theme, disabled, className } =
    props;
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownMenuRef = useRef<HTMLUListElement>(null);
  const dropdownMenuClasses: string[] = ['dropdown-menu'];

  let suffixIcon = null;

  if (theme === 'dark') {
    dropdownMenuClasses.push('dropdown-menu-dark');
  }

  if (className) dropdownMenuClasses.push(className);

  if (SuffixIcon) {
    suffixIcon = React.cloneElement(SuffixIcon, {
      size,
    });
  }

  function setupTippy() {
    const dropdownButtonDom = dropdownButtonRef.current;
    const dropdownMenuDom = dropdownMenuRef.current;
    if (dropdownButtonDom && dropdownMenuDom) {
      tippy(dropdownButtonDom, {
        allowHTML: true,
        animateFill: true,
        interactive: true,
        arrow: false,
        content: dropdownMenuDom,
        hideOnClick: true,
        trigger: 'click',
        appendTo: dropdownButtonDom,
        plugins: [animateFill, sticky],
        maxWidth: 'none',
        offset: [0, 4],
        placement: 'bottom-start',
        sticky: true,
      });
    }
  }

  useEffect(() => {
    setupTippy();
  }, []);

  return (
    <div className="dropdown">
      {split ? (
        <ButtonGroup>
          <Button variant={variant} size={size} disabled={disabled}>
            {buttonName}
          </Button>
          <Button
            variant={variant}
            SuffixIcon={suffixIcon}
            refButton={dropdownButtonRef}
            size={size}
            disabled={disabled}
          />
        </ButtonGroup>
      ) : (
        <Button
          variant={variant}
          SuffixIcon={suffixIcon}
          refButton={dropdownButtonRef}
          size={size}
          disabled={disabled}
        >
          {buttonName}
        </Button>
      )}
      <ul className={dropdownMenuClasses.join(' ')} ref={dropdownMenuRef}>
        {children}
      </ul>
    </div>
  );
}

export default Dropdown;

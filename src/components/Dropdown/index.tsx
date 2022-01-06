import React, { useRef, useLayoutEffect, useState } from 'react';
import { createPopper } from '@popperjs/core';
import Button from '../Button';
import Icon from '../Icon';
import ButtonGroup from '../ButtonGroup';
import ChevronDown from '../../assets/icons/svg/chevron-down-regular.svg';
import DropdownContext from '../DropdownContext';

const Dropdown = React.forwardRef<HTMLDivElement, propTypes>((props: propTypes, ref) => {
  const {
    children,
    suffixIcon,
    variant,
    buttonName,
    split,
    size,
    theme,
    isDisabled,
    className,
    open,
    offset,
    type,
    onChange,
  } = props;

  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownMenuRef = useRef<HTMLUListElement>(null);
  const dropdownMenuWrapperRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpenState] = useState<boolean | undefined>(open);
  const [activeStateMap, setActiveStateMap] = useState<{ [key: string]: boolean }>({});
  const [disabledStateMap, setDisabledStateMap] = useState<{ [key: string]: boolean }>({});
  const dropdownMenuWrapperClasses: string[] = [`dropdown-menu__wrapper`];
  const dropdownMenuClasses: string[] = [`dropdown-menu`];
  const dropdownClasses: string[] = [`dropdown`];

  const popperFlipModifier = {
    name: 'flip',
    enabled: true,
  };

  const popperOffsetModifier = {
    name: 'offset',
    options: {
      offset,
    },
  };

  const popperApplyStylesModifier = {
    name: 'applyStyles',
    enabled: true,
    fn: (instance: any) => {
      const { popper } = instance.state.elements;
      popper.style.position = 'relative';
      const UListElement = popper.querySelector('ul');
      UListElement.style.marginTop = `${offset![1]}px`;
      UListElement.style.marginLeft = `${offset![0]}px`;
      popper.style.width = '100%';
      popper.style.zIndex = '1';
    },
  };

  let icon: any = null;

  if (theme === 'dark') {
    dropdownMenuClasses.push(`dropdown-menu--dark`);
  }

  if (className) dropdownClasses.push(className);

  if (suffixIcon) {
    icon = React.cloneElement(suffixIcon, {
      size,
    });
  }

  if (!Object.keys(activeStateMap).length) {
    setupStateMap();
  }

  function setupStateMap() {
    React.Children.forEach(children, (child) => {
      const { isActive, isDisabled, itemId } = child.props;
      if (itemId) {
        activeStateMap[itemId] = isActive;
        disabledStateMap[itemId] = isDisabled;
      }
    });
  }

  const clickHandler = (itemId: string, type: string) => (e: any) => {
    if (!disabledStateMap[itemId]) {
      Object.keys(activeStateMap).forEach((itemId) => {
        activeStateMap[itemId] = false;
      });
      activeStateMap[itemId] = true;

      setActiveStateMap(() => ({
        ...activeStateMap,
      }));

      setDisabledStateMap(() => ({
        ...disabledStateMap,
      }));
    }
    closeHandler(e);
  };

  const escHandler = (e: any) => {
    closeHandler(e);
    buttonFocus();
  };

  const keyDownHandler = (e: any) => {
    const dropdownMenuWrapperElement = dropdownMenuWrapperRef.current;
    const dropdownButtonElement = dropdownButtonRef.current;
    if (dropdownMenuWrapperElement && dropdownButtonElement) {
      if (e.keyCode === 40) {
        e.preventDefault();
        if (!isOpen) openHandler(e);
        else menuItemFocus();
      } else if (e.keyCode === 38) {
        e.preventDefault();
      } else if (e.keyCode === 27) {
        e.preventDefault();
        closeHandler(e);
        buttonFocus();
      } else if (e.keyCode === 13) {
        e.preventDefault();
        if (!isOpen) {
          openHandler(e);
        } else {
          closeHandler(e);
          buttonFocus();
        }
      }
    }
  };

  const initDropdown = () => {
    const dropdownMenuElement = dropdownMenuRef.current!;
    if (isOpen) {
      dropdownMenuElement.classList.add(`dropdown-menu--show`);
      requestAnimationFrame(() => {
        document.addEventListener('click', clickOutside);
      });
    } else {
      dropdownMenuElement.classList.add(`dropdown-menu--collapse`);
    }
  };

  const setupPopper = () => {
    const dropdownButtonElement = dropdownButtonRef.current!;
    const dropdownMenuWrapperElement = dropdownMenuWrapperRef.current!;
    if (type !== 'popper') {
      createPopper(dropdownButtonElement, dropdownMenuWrapperElement, {
        placement: 'bottom-start',
        modifiers: [popperFlipModifier, popperApplyStylesModifier, popperOffsetModifier],
      });
    } else {
      createPopper(dropdownButtonElement, dropdownMenuWrapperElement, {
        placement: 'bottom-start',
        modifiers: [popperFlipModifier, popperOffsetModifier],
      });
    }
  };

  const clickOutside = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      !dropdownMenuWrapperRef.current!.contains(e.target) &&
      !dropdownButtonRef.current!.contains(e.target)
    ) {
      closeHandler(e);
    } else {
      document.removeEventListener('click', clickOutside);
    }
  };

  const closeHandler = (e: any) => {
    const dropdownMenuElement = dropdownMenuRef.current!;
    requestAnimationFrame(() => {
      dropdownMenuElement.classList.replace(`dropdown-menu--show`, `dropdown-menu--collapse`);
      document.removeEventListener('click', clickOutside);
    });
    setOpenState(() => false);
  };

  const openHandler = (e: any) => {
    const dropdownMenuElement = dropdownMenuRef.current!;
    requestAnimationFrame(() => {
      document.addEventListener('click', clickOutside);
      requestAnimationFrame(() => {
        dropdownMenuElement.classList.replace(`dropdown-menu--collapse`, `dropdown-menu--show`);
        setupPopper();
      });
    });
    setOpenState(() => true);
  };

  const buttonFocus = () => {
    const dropdownButtonElement = dropdownButtonRef.current!;
    dropdownButtonElement.focus();
  };

  const menuItemFocus = () => {
    const dropdownMenuWrapperElement = dropdownMenuWrapperRef.current!;
    const nextFocus = dropdownMenuWrapperElement.querySelector<HTMLElement>(
      `.dropdown-item:not(.dropdown-item--disabled)`
    );
    if (nextFocus) nextFocus.focus();
  };

  useLayoutEffect(() => {
    initDropdown();
  }, []);

  const content = (
    <ul className={dropdownMenuClasses.join(' ')} ref={dropdownMenuRef} role="menu">
      {children}
    </ul>
  );

  return (
    <div className={dropdownClasses.join(' ')} ref={ref} role="navigation">
      {split ? (
        <ButtonGroup>
          <Button variant={variant} size={size} isDisabled={isDisabled}>
            {buttonName}
          </Button>
          <Button
            variant={variant}
            suffixIcon={icon}
            size={size}
            isDisabled={isDisabled}
            onClick={isOpen ? closeHandler : openHandler}
            ref={dropdownButtonRef}
            onKeyDown={keyDownHandler}
          />
        </ButtonGroup>
      ) : (
        <Button
          variant={variant}
          suffixIcon={icon}
          size={size}
          isDisabled={isDisabled}
          onClick={isOpen ? closeHandler : openHandler}
          ref={dropdownButtonRef}
          onKeyDown={keyDownHandler}
        >
          {buttonName}
        </Button>
      )}
      <DropdownContext.Provider
        value={{
          onClick: clickHandler,
          onESC: escHandler,
          activeStateMap,
          disabledStateMap,
        }}
      >
        <div className={dropdownMenuWrapperClasses.join(' ')} ref={dropdownMenuWrapperRef}>
          {content}
        </div>
      </DropdownContext.Provider>
    </div>
  );
});

type propTypes = {
  children: React.ComponentElement<any, any>[];
  className?: string;
  suffixIcon?: React.ComponentElement<any, any>;
  variant?: string;
  buttonName?: string;
  split?: boolean;
  onClick?: any;
  onChange?: any;
  size?: string;
  theme?: string;
  isDisabled?: boolean;
  open?: boolean;
  offset?: [number, number];
  type?: string;
};

Dropdown.defaultProps = {
  className: '',
  onClick: (): void => {},
  onChange: () => {},
  variant: 'secondary',
  buttonName: '',
  split: false,
  size: '',
  suffixIcon: <Icon component={ChevronDown} />,
  theme: '',
  isDisabled: false,
  open: false,
  offset: [0, 8],
  type: 'popper',
};

export default Dropdown;

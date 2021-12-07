import React, { useRef, useEffect, useState } from 'react';
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
    disabled,
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
  const [popperInstance, setPopperInstance] = useState<any>(null);
  const [activeStateMap, setActiveStateMap] = useState<{ [key: string]: boolean }>({});
  const [disabledStateMap, setDisabledStateMap] = useState<{ [key: string]: boolean }>({});
  const dropdownMenuWrapperClasses: string[] = [`${NS}-dropdown-menu__wrapper`];
  const dropdownMenuClasses: string[] = [`${NS}-dropdown-menu`];
  const dropdownClasses: string[] = [`${NS}-dropdown`];

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
    },
  };

  // const popperZindexModifier = {
  //   name: 'zIndex',
  //   enabled: true,
  //   phase: 'write',
  //   fn: (instance: any) => {
  //     const { popper } = instance.state.elements;
  //     console.log(popper);
  //     popper.style.zIndex = '1';
  //   },
  // };

  let icon: any = null;

  if (theme === 'dark') {
    dropdownMenuClasses.push(`${NS}-dropdown-menu--dark`);
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
      for (const id in activeStateMap) {
        activeStateMap[id] = false;
      }
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

  const transitionEndHandler = (e: any) => {
    const dropdownMenuWrapperElement = dropdownMenuWrapperRef.current!;
    if (!isOpen) {
      requestAnimationFrame(() => {
        dropdownMenuWrapperElement.classList.replace(
          `${NS}-dropdown-menu__wrapper--show`,
          `${NS}-dropdown-menu__wrapper--collapse`
        );
      });
    }
  };

  const initDropdown = () => {
    const dropdownMenuElement = dropdownMenuRef.current!;
    const dropdownMenuWrapperElement = dropdownMenuWrapperRef.current!;
    if (isOpen) {
      dropdownMenuWrapperElement.classList.add(`${NS}-dropdown-menu__wrapper--show`);
      dropdownMenuElement.classList.add(`${NS}-dropdown-menu--show`);
      requestAnimationFrame(() => {
        document.addEventListener('click', clickOutside);
      });
    } else {
      dropdownMenuElement.classList.add(`${NS}-dropdown-menu--collapse`);
      dropdownMenuWrapperElement.classList.add(`${NS}-dropdown-menu__wrapper--collapse`);
    }
  };

  const setupPopper = () => {
    const dropdownButtonElement = dropdownButtonRef.current!;
    const dropdownMenuWrapperElement = dropdownMenuWrapperRef.current!;
    if (type !== 'popper') {
      const instance = createPopper(dropdownButtonElement, dropdownMenuWrapperElement, {
        placement: 'bottom-start',
        modifiers: [popperFlipModifier, popperApplyStylesModifier, popperOffsetModifier],
      });
      setPopperInstance(() => instance);
    } else {
      const instance = createPopper(dropdownButtonElement, dropdownMenuWrapperElement, {
        placement: 'bottom-start',
        modifiers: [popperFlipModifier, popperOffsetModifier],
      });
      instance.state.styles.popper.zIndex = '1';
      setPopperInstance(() => instance);
    }
  };

  const clickOutside = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    const { popper, reference } = popperInstance.state.elements;
    if (!popper.contains(e.target) && !reference.contains(e.target)) {
      closeHandler(e);
    } else {
      document.removeEventListener('click', clickOutside);
    }
  };

  const closeHandler = (e: any) => {
    const dropdownMenuElement = dropdownMenuRef.current!;
    requestAnimationFrame(() => {
      dropdownMenuElement.classList.replace(
        `${NS}-dropdown-menu--show`,
        `${NS}-dropdown-menu--collapse`
      );
      document.removeEventListener('click', clickOutside);
    });
    setOpenState(() => false);
  };

  const openHandler = (e: any) => {
    const dropdownMenuElement = dropdownMenuRef.current!;
    const dropdownMenuWrapperElement = dropdownMenuWrapperRef.current!;

    requestAnimationFrame(() => {
      dropdownMenuWrapperElement.classList.replace(
        `${NS}-dropdown-menu__wrapper--collapse`,
        `${NS}-dropdown-menu__wrapper--show`
      );
      document.addEventListener('click', clickOutside);
      requestAnimationFrame(() => {
        dropdownMenuElement.classList.replace(
          `${NS}-dropdown-menu--collapse`,
          `${NS}-dropdown-menu--show`
        );
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
      `.${NS}-dropdown-item:not(.${NS}-dropdown-item--disabled)`
    );
    if (nextFocus) nextFocus.focus();
  };

  useEffect(() => {
    setupPopper();
    initDropdown();
  }, []);

  const content = (
    <ul
      className={dropdownMenuClasses.join(' ')}
      ref={dropdownMenuRef}
      onTransitionEnd={transitionEndHandler}
    >
      {children}
    </ul>
  );

  return (
    <div className={dropdownClasses.join(' ')} ref={ref}>
      {split ? (
        <ButtonGroup>
          <Button variant={variant} size={size} isDisabled={disabled}>
            {buttonName}
          </Button>
          <Button
            variant={variant}
            suffixIcon={icon}
            size={size}
            isDisabled={disabled}
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
          isDisabled={disabled}
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
  disabled?: boolean;
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
  disabled: false,
  open: false,
  offset: [0, 8],
  type: 'popper',
};

export default Dropdown;

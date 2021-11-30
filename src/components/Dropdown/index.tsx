import React, { useRef, useEffect, useState } from 'react';
import tippy, { animateFill, sticky } from 'tippy.js';
import Button from '../Button';
import Icon from '../Icon';
import ButtonGroup from '../ButtonGroup';
import ChevronDown from '../../assets/icons/svg/chevron-down-regular.svg';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/svg-arrow.css';

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
    offset,
    type,
    onChange,
  } = props;

  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownMenuRef = useRef<HTMLUListElement>(null);
  const [isOpen, setOpenState] = useState<boolean | undefined>(open);
  const [tippyInstance, setTippyInstance] = useState<any>(null);
  const [activeStateMap, setActiveStateMap] = useState<{ [key: string]: boolean }>({});
  const [disabledStateMap, setDisabledStateMap] = useState<{ [key: string]: boolean }>({});
  const dropdownMenuClasses: string[] = ['dropdown-menu'];
  const dropdownClasses: string[] = ['dropdown'];

  let suffixIcon: any = null;

  if (theme === 'dark') {
    dropdownMenuClasses.push('dropdown-menu-dark');
  }

  if (className) dropdownClasses.push(className);

  if (SuffixIcon) {
    suffixIcon = React.cloneElement(SuffixIcon, {
      size,
    });
  }

  function setupStateMap() {
    React.Children.forEach(children, (child) => {
      const { active, disabled } = child.props;
      const { key } = child;
      if (key) {
        activeStateMap[key] = active;
        disabledStateMap[key] = disabled;
        setActiveStateMap(() => ({ ...activeStateMap }));
        setDisabledStateMap(() => ({ ...disabledStateMap }));
      }
    });
  }

  function clickHandler(key: string) {
    return (e: any) => {
      if (!disabledStateMap[key]) {
        for (const id in activeStateMap) {
          activeStateMap[id] = false;
        }
        activeStateMap[key] = true;

        setActiveStateMap(() => ({
          ...activeStateMap,
        }));
      }

      setDisabledStateMap(() => ({
        ...disabledStateMap,
      }));

      if (typeof onChange === 'function') {
        onChange(key);
      }

      if (type === 'dropdown') dropdownHide();
      else tippyHide();
    };
  }

  function tippyShow() {
    if (tippyInstance) {
      tippyInstance.show();
    }
    setOpenState(true);
    requestAnimationFrame(() => {
      const dropdownMenuDom = dropdownMenuRef.current;
      if (dropdownMenuDom) {
        const nextFocus = dropdownMenuDom.querySelector<HTMLElement>(`.dropdown-item.active`);
        if (nextFocus) nextFocus.focus();
      }
    });
  }

  function tippyHide() {
    if (tippyInstance) {
      tippyInstance.hide();
    }
    const dropdownButtonDom = dropdownButtonRef.current;
    if (dropdownButtonDom) {
      dropdownButtonDom.focus();
    }
    setOpenState(false);
  }

  function dropdownShow() {
    const dropdownButtonDom = dropdownButtonRef.current;
    const dropdownMenuDom = dropdownMenuRef.current;
    if (dropdownButtonDom && dropdownMenuDom) {
      dropdownButtonDom.setAttribute('aria-expanded', 'true');
      dropdownMenuDom.style.display = 'block';
      requestAnimationFrame(() => {
        dropdownButtonDom.classList.add('show');
        dropdownMenuDom.classList.add('show');
        requestAnimationFrame(() => {
          const nextFocus = dropdownMenuDom.querySelector<HTMLElement>(`.dropdown-item.active`);
          if (nextFocus) nextFocus.focus();
        });
      });
      setOpenState(true);
    }
  }

  function dropdownHide() {
    const dropdownButtonDom = dropdownButtonRef.current;
    const dropdownMenuDom = dropdownMenuRef.current;
    if (dropdownButtonDom && dropdownMenuDom) {
      dropdownButtonDom.setAttribute('aria-expanded', 'false');
      requestAnimationFrame(() => {
        dropdownButtonDom.classList.remove('show');
        dropdownMenuDom.classList.remove('show');
      });
      setOpenState(false);
      dropdownButtonDom.focus();
    }
  }

  const keyDownHandler = (e: any) => {
    const dropdownMenuDom = dropdownMenuRef.current;
    const dropdownButtonDom = dropdownButtonRef.current;
    if (dropdownMenuDom && dropdownButtonDom) {
      if (e.keyCode === 40) {
        e.preventDefault();
        if (type === 'tippy') {
          if (!isOpen) tippyShow();
        } else {
          if (!isOpen) dropdownShow();
        }
      } else if (e.keyCode === 27) {
        e.preventDefault();
        if (type === 'tippy') {
          tippyHide();
        } else dropdownHide();
      } else if (e.keyCode === 38) {
        e.preventDefault();
      } else if (e.keyCode === 13) {
        if (e.currentTarget.tagName === 'A') {
          tippyShow();
        }
      }
    }
  };

  function transitionEndHandler() {
    const dropdownMenuDom = dropdownMenuRef.current;
    if (dropdownMenuDom) {
      if (!isOpen) {
        dropdownMenuDom.style.display = 'none';
      } else {
        dropdownMenuDom.style.display = 'block';
      }
    }
  }

  function setupNavDropdown() {
    const dropdownButtonDom = dropdownButtonRef.current;
    const dropdownMenuDom = dropdownMenuRef.current;
    if (dropdownMenuDom && dropdownButtonDom) {
      if (!isOpen) dropdownMenuDom.style.display = 'none';
      else {
        dropdownMenuDom.style.display = 'block';
        requestAnimationFrame(() => {
          dropdownButtonDom.classList.add('show');
          dropdownMenuDom.classList.add('show');
        });
        dropdownButtonDom.focus();
      }
    }
  }

  function setupTippy() {
    const dropdownButtonDom = dropdownButtonRef.current;
    const dropdownMenuDom = dropdownMenuRef.current;
    if (dropdownButtonDom && dropdownMenuDom) {
      const instance = tippy(dropdownButtonDom, {
        allowHTML: true,
        animateFill: true,
        interactive: true,
        arrow: false,
        content: dropdownMenuDom,
        trigger: 'manual',
        appendTo: dropdownButtonDom,
        plugins: [animateFill, sticky],
        maxWidth: 'none',
        offset,
        placement: 'bottom-start',
        sticky: true,
        theme: 'rb-dropdown',
        onClickOutside: tippyHide,
      });
      if (isOpen) {
        instance.show();
      } else {
        instance.hide();
      }
      setTippyInstance(() => instance);
    }
  }

  useEffect(() => {
    if (type === 'tippy') {
      setupTippy();
    } else {
      setupNavDropdown();
    }
    setupStateMap();
  }, []);

  const DropdownItemList = React.Children.map(children, (child) => {
    const { key } = child;
    if (key) {
      return React.cloneElement(child, {
        active: activeStateMap[key],
        disabled: disabledStateMap[key],
        onMouseDown: !disabledStateMap[key] ? clickHandler(String(key)) : null,
        onEsc: type === 'tippy' ? tippyHide : dropdownHide,
      });
    }
  });

  const content = (
    <ul
      className={dropdownMenuClasses.join(' ')}
      ref={dropdownMenuRef}
      onClick={type === 'tippy' ? tippyHide : () => {}}
      onTransitionEnd={transitionEndHandler}
    >
      {DropdownItemList}
    </ul>
  );

  let dropdown = null;

  if (type === 'tippy') {
    dropdown = (
      <div className={dropdownClasses.join(' ')}>
        {split ? (
          <ButtonGroup>
            <Button variant={variant} size={size} disabled={disabled}>
              {buttonName}
            </Button>
            <Button
              variant={variant}
              SuffixIcon={suffixIcon}
              size={size}
              disabled={disabled}
              onClick={isOpen ? tippyHide : tippyShow}
              buttonRef={dropdownButtonRef}
              link={link}
              onKeyDown={keyDownHandler}
            />
          </ButtonGroup>
        ) : (
          <Button
            variant={variant}
            SuffixIcon={suffixIcon}
            size={size}
            disabled={disabled}
            onClick={isOpen ? tippyHide : tippyShow}
            buttonRef={dropdownButtonRef}
            link={link}
            onKeyDown={keyDownHandler}
          >
            {buttonName}
          </Button>
        )}
        {content}
      </div>
    );
  } else if (type === 'dropdown') {
    dropdown = (
      <div className={dropdownClasses.join(' ')}>
        {split ? (
          <ButtonGroup>
            <Button variant={variant} size={size} disabled={disabled}>
              {buttonName}
            </Button>
            <Button
              variant={variant}
              SuffixIcon={suffixIcon}
              size={size}
              disabled={disabled}
              onClick={isOpen ? dropdownHide : dropdownShow}
              buttonRef={dropdownButtonRef}
              link={link}
              onKeyDown={keyDownHandler}
            />
          </ButtonGroup>
        ) : (
          <Button
            variant={variant}
            SuffixIcon={suffixIcon}
            size={size}
            disabled={disabled}
            onClick={isOpen ? dropdownHide : dropdownShow}
            buttonRef={dropdownButtonRef}
            link={link}
            onKeyDown={keyDownHandler}
          >
            {buttonName}
          </Button>
        )}
        <div className="dropdown-menu-wrapper">{content}</div>
      </div>
    );
  }

  return dropdown;
}

type PropsTypes = {
  children: React.ComponentElement<any, any>[];
  className?: string;
  SuffixIcon?: React.ComponentElement<any, any>;
  variant?: string;
  buttonName?: string;
  split?: boolean;
  onClick?: any;
  onChange?: any;
  size?: string;
  theme?: string;
  disabled?: boolean;
  link?: boolean;
  open?: boolean;
  offset?: [number, number];
  type?: string;
};

Dropdown.defaultProps = {
  className: '',
  SuffixIcon: <Icon Component={ChevronDown} />,
  onClick: (): void => {},
  onChange: () => {},
  variant: 'secondary',
  buttonName: '',
  split: false,
  size: '',
  theme: '',
  disabled: false,
  link: false,
  open: false,
  offset: [0, 4],
  type: 'tippy',
};

export default Dropdown;

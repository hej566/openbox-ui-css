import React, { useRef, useEffect, useState, forwardRef, Children, cloneElement } from 'react';
import tippy, { animateFill, sticky } from 'tippy.js';
import Button from '../Button';
import Icon from '../Icon';
import ButtonGroup from '../ButtonGroup';
import ChevronDown from '../../assets/icons/svg/chevron-down-regular.svg';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/svg-arrow.css';

interface PropsTypes {
  children: React.ComponentElement<any, any>[];
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
  offset?: [number, number];
  type?: string;
}

Dropdown.defaultProps = {
  className: '',
  SuffixIcon: <Icon Component={ChevronDown} />,
  onClick: (): void => {},
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
  } = props;

  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownMenuRef = useRef<HTMLUListElement>(null);
  const dropdownMenuClasses: string[] = ['dropdown-menu'];
  const [isOpen, setOpenState] = useState(open);
  const [tippyInstance, setTippyInstance]: [any, any] = useState(null);
  const activeMap: { [key: string]: boolean } = {};
  const disabledMap: { [key: string]: boolean } = {};
  const [activeStateMap, setActiveStateMap] = useState(activeMap);
  const [disabledStateMap, setDisabledStateMap] = useState(disabledMap);

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
    return () => {
      if (!disabledStateMap[key]) {
        for (const id in activeStateMap) {
          activeStateMap[id] = false;
        }
        activeStateMap[key] = true;

        setActiveStateMap(() => ({
          ...activeStateMap,
        }));
      }

      // if (tippyInstance) tippyInstance.hide();
      setDisabledStateMap(() => ({
        ...disabledStateMap,
      }));
    };
  }

  function tippyShow() {
    if (tippyInstance) {
      tippyInstance.show();
    }
    setOpenState(true);
  }

  function tippyHide() {
    if (tippyInstance) {
      tippyInstance.hide();
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
    }
  }

  function blurHandler() {
    const dropdownButtonDom = dropdownButtonRef.current;
    const dropdownMenuDom = dropdownMenuRef.current;
    if (dropdownButtonDom && dropdownMenuDom) {
      dropdownButtonDom.classList.remove('show');
      dropdownMenuDom.classList.remove('show');
      dropdownButtonDom.setAttribute('aria-expanded', 'false');
      setOpenState(false);
    }
  }

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

  const DropdownItemList = Children.map(children, (child) => {
    const { key } = child;
    if (key) {
      return cloneElement(child, {
        active: activeStateMap[key],
        disabled: disabledStateMap[key],
        onMouseDown: !disabledStateMap[key] ? clickHandler(String(key)) : null,
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
      <div className="dropdown">
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
          >
            {buttonName}
          </Button>
        )}
        {content}
      </div>
    );
  } else if (type === 'dropdown') {
    dropdown = (
      <div className="dropdown">
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
              onBlur={blurHandler}
              buttonRef={dropdownButtonRef}
              link={link}
            />
          </ButtonGroup>
        ) : (
          <Button
            variant={variant}
            SuffixIcon={suffixIcon}
            size={size}
            disabled={disabled}
            onClick={isOpen ? dropdownHide : dropdownShow}
            onBlur={blurHandler}
            buttonRef={dropdownButtonRef}
            link={link}
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

export default Dropdown;

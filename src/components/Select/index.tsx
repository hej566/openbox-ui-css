import React, { useRef, useEffect, useState } from 'react';
import tippy, { animateFill, sticky } from 'tippy.js';
import Button from '../Button';
import Icon from '../Icon';
import ButtonGroup from '../ButtonGroup';
import ChevronDown from '../../assets/icons/svg/chevron-down-regular.svg';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/svg-arrow.css';

const Select = React.forwardRef<HTMLDivElement, propTypes>((props: propTypes, ref) => {
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

  const selectButtonRef = useRef<HTMLButtonElement>(null);
  const selectMenuRef = useRef<HTMLUListElement>(null);
  const [isOpen, setOpenState] = useState<boolean | undefined>(open);
  const [tippyInstance, setTippyInstance] = useState<any>(null);
  const [activeStateMap, setActiveStateMap] = useState<{ [key: string]: boolean }>({});
  const [disabledStateMap, setDisabledStateMap] = useState<{ [key: string]: boolean }>({});
  const selectMenuClasses: string[] = ['select-menu'];
  const selectClasses: string[] = ['form-select'];

  let suffixIcon: any = null;

  if (theme === 'dark') {
    selectMenuClasses.push('select-menu-dark');
  }

  if (size) selectClasses.push(`form-select-${size}`);

  if (className) selectClasses.push(className);

  if (SuffixIcon) {
    suffixIcon = React.cloneElement(SuffixIcon, {
      size,
    });
  }

  const setupStateMap = () => {
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
  };

  const keyDownHandler = (e: any) => {
    const selectMenuDom = selectMenuRef.current;
    if (selectMenuDom) {
      if (e.keyCode === 40) {
        e.preventDefault();
        if (type === 'tippy') {
          if (!isOpen) tippyShow();
        } else {
          if (!isOpen) selectShow();
        }
      } else if (e.keyCode === 27) {
        e.preventDefault();
        if (type === 'tippy') {
          tippyHide();
        } else selectHide();
      } else if (e.keyCode === 38) {
        e.preventDefault();
      }
    }
  };

  const clickHandler = (key: any) => () => {
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
    if (type === 'select') selectHide();
    else tippyHide();
  };

  function tippyShow() {
    if (tippyInstance) {
      tippyInstance.show();
    }
    setOpenState(true);
    requestAnimationFrame(() => {
      const selectMenuDom = selectMenuRef.current;
      if (selectMenuDom) {
        const nextFocus = selectMenuDom.querySelector<HTMLElement>(`.select-item.active`);
        if (nextFocus) nextFocus.focus();
      }
    });
  }

  function tippyHide() {
    if (tippyInstance) {
      tippyInstance.hide();
    }
    setOpenState(false);
    requestAnimationFrame(() => {
      const selectButtonDom = selectButtonRef.current;
      if (selectButtonDom) {
        selectButtonDom.focus();
      }
    });
  }

  function selectShow() {
    const selectButtonDom = selectButtonRef.current;
    const selectMenuDom = selectMenuRef.current;
    if (selectButtonDom && selectMenuDom) {
      selectButtonDom.setAttribute('aria-expanded', 'true');
      selectMenuDom.style.display = 'block';
      requestAnimationFrame(() => {
        selectButtonDom.classList.add('show');
        selectMenuDom.classList.add('show');
        requestAnimationFrame(() => {
          const nextFocus = selectMenuDom.querySelector<HTMLElement>(`.select-item.active`);
          if (nextFocus) nextFocus.focus();
        });
      });
      setOpenState(true);
    }
  }

  function selectHide() {
    const selectButtonDom = selectButtonRef.current;
    const selectMenuDom = selectMenuRef.current;
    if (selectButtonDom && selectMenuDom) {
      selectButtonDom.setAttribute('aria-expanded', 'false');
      requestAnimationFrame(() => {
        selectButtonDom.classList.remove('show');
        selectMenuDom.classList.remove('show');
      });
      setOpenState(false);
      selectButtonDom.focus();
    }
  }

  function transitionEndHandler() {
    const selectMenuDom = selectMenuRef.current;
    if (selectMenuDom) {
      if (!isOpen) {
        selectMenuDom.style.display = 'none';
      } else {
        selectMenuDom.style.display = 'block';
      }
    }
  }

  function setupNavSelect() {
    const selectButtonDom = selectButtonRef.current;
    const selectMenuDom = selectMenuRef.current;
    if (selectMenuDom && selectButtonDom) {
      if (!isOpen) selectMenuDom.style.display = 'none';
      else {
        selectMenuDom.style.display = 'block';
        requestAnimationFrame(() => {
          selectButtonDom.classList.add('show');
          selectMenuDom.classList.add('show');
        });
        selectButtonDom.focus();
      }
    }
  }

  function setupTippy() {
    const selectButtonDom = selectButtonRef.current;
    const selectMenuDom = selectMenuRef.current;
    if (selectButtonDom && selectMenuDom) {
      const instance = tippy(selectButtonDom, {
        allowHTML: true,
        animateFill: true,
        interactive: true,
        arrow: false,
        content: selectMenuDom,
        trigger: 'manual',
        appendTo: 'parent',
        plugins: [animateFill, sticky],
        maxWidth: 'none',
        offset,
        placement: 'bottom-start',
        sticky: true,
        theme: 'rb-select',
        duration: 100,
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
      setupNavSelect();
    }
    setupStateMap();
  }, []);

  const SelectItemList = React.Children.map(children, (child) => {
    const { key } = child;
    if (key) {
      return React.cloneElement(child, {
        active: activeStateMap[key],
        disabled: disabledStateMap[key],
        onMouseDown: !disabledStateMap[key] ? clickHandler(String(key)) : null,
        onEsc: type === 'tippy' ? tippyHide : selectHide,
      });
    }
  });

  const content = (
    <ul
      className={selectMenuClasses.join(' ')}
      ref={selectMenuRef}
      onClick={type === 'tippy' ? tippyHide : () => {}}
      onTransitionEnd={transitionEndHandler}
    >
      {SelectItemList}
    </ul>
  );

  let select = null;

  if (type === 'tippy') {
    select = (
      <div className={selectClasses.join(' ')} ref={ref}>
        {split ? (
          <ButtonGroup>
            <Button variant={variant} size={size} disabled={disabled}>
              {buttonName}
            </Button>
            <Button
              variant={variant}
              suffixIcon={suffixIcon}
              size={size}
              disabled={disabled}
              onClick={isOpen ? tippyHide : tippyShow}
              ref={selectButtonRef}
              onKeyDown={keyDownHandler}
            />
          </ButtonGroup>
        ) : (
          <Button
            variant={variant}
            suffixIcon={suffixIcon}
            size={size}
            disabled={disabled}
            onClick={isOpen ? tippyHide : tippyShow}
            ref={selectButtonRef}
            onKeyDown={keyDownHandler}
          >
            {buttonName}
          </Button>
        )}
        {content}
      </div>
    );
  } else if (type === 'select') {
    select = (
      <div className={selectClasses.join(' ')}>
        {split ? (
          <ButtonGroup>
            <Button variant={variant} size={size} disabled={disabled}>
              {buttonName}
            </Button>
            <Button
              variant={variant}
              suffixIcon={suffixIcon}
              size={size}
              disabled={disabled}
              onClick={isOpen ? selectHide : selectShow}
              ref={selectButtonRef}
              onKeyDown={keyDownHandler}
            />
          </ButtonGroup>
        ) : (
          <Button
            variant={variant}
            suffixIcon={suffixIcon}
            size={size}
            disabled={disabled}
            onClick={isOpen ? selectHide : selectShow}
            ref={selectButtonRef}
            onKeyDown={keyDownHandler}
          >
            {buttonName}
          </Button>
        )}
        <div className="select-menu-wrapper">{content}</div>
      </div>
    );
  }

  return select;
});

type propTypes = {
  children: React.ComponentElement<any, any>[];
  className?: string;
  SuffixIcon?: React.ComponentElement<any, any>;
  variant?: string;
  buttonName?: string;
  split?: boolean;
  onClick?: () => void;
  size?: string;
  theme?: string;
  disabled?: boolean;
  link?: boolean;
  open?: boolean;
  offset?: [number, number];
  type?: string;
  onChange?: (itemKey: any) => void;
};

Select.defaultProps = {
  className: '',
  SuffixIcon: <Icon Component={ChevronDown} />,
  onClick: () => {},
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

export default Select;

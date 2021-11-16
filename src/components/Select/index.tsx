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
  onClick?: any;
  size?: string;
  theme?: string;
  disabled?: boolean;
  link?: boolean;
  open?: boolean;
  offset?: [number, number];
  type?: string;
  onChange?: any;
}

Select.defaultProps = {
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

function Select(props: PropsTypes) {
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
    onClick,
  } = props;

  const selectButtonRef = useRef<HTMLButtonElement>(null);
  const selectMenuRef = useRef<HTMLUListElement>(null);
  const selectMenuClasses: string[] = ['select-menu'];
  const selectClasses: string[] = ['form-select'];
  const [isOpen, setOpenState] = useState(open);
  const [tippyInstance, setTippyInstance]: [any, any] = useState(null);
  const activeMap: { [key: string]: boolean } = {};
  const disabledMap: { [key: string]: boolean } = {};
  const [activeStateMap, setActiveStateMap] = useState(activeMap);
  const [disabledStateMap, setDisabledStateMap] = useState(disabledMap);

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

  function clickHandler(key: any) {
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
      setDisabledStateMap(() => ({
        ...disabledStateMap,
      }));

      if (typeof onChange === 'function') {
        onChange(key);
      }
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

  function selectShow() {
    const selectButtonDom = selectButtonRef.current;
    const selectMenuDom = selectMenuRef.current;
    if (selectButtonDom && selectMenuDom) {
      selectButtonDom.setAttribute('aria-expanded', 'true');
      selectMenuDom.style.display = 'block';
      requestAnimationFrame(() => {
        selectButtonDom.classList.add('show');
        selectMenuDom.classList.add('show');
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
    }
  }

  function blurHandler() {
    const selectButtonDom = selectButtonRef.current;
    const selectMenuDom = selectMenuRef.current;
    if (selectButtonDom && selectMenuDom) {
      selectButtonDom.classList.remove('show');
      selectMenuDom.classList.remove('show');
      selectButtonDom.setAttribute('aria-expanded', 'false');
      setOpenState(false);
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

  const SelectItemList = Children.map(children, (child) => {
    const { key } = child;
    if (key) {
      return cloneElement(child, {
        active: activeStateMap[key],
        disabled: disabledStateMap[key],
        onFocus: !disabledStateMap[key] ? clickHandler(String(key)) : null,
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
      <div className={selectClasses.join(' ')}>
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
              buttonRef={selectButtonRef}
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
            buttonRef={selectButtonRef}
            link={link}
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
              SuffixIcon={suffixIcon}
              size={size}
              disabled={disabled}
              onClick={isOpen ? selectHide : selectShow}
              onBlur={blurHandler}
              buttonRef={selectButtonRef}
              link={link}
            />
          </ButtonGroup>
        ) : (
          <Button
            variant={variant}
            SuffixIcon={suffixIcon}
            size={size}
            disabled={disabled}
            onClick={isOpen ? selectHide : selectShow}
            onBlur={blurHandler}
            buttonRef={selectButtonRef}
            link={link}
          >
            {buttonName}
          </Button>
        )}
        <div className="select-menu-wrapper">{content}</div>
      </div>
    );
  }

  return select;
}

export default Select;

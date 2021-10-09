import React, { useState } from 'react';
import Icon from '../Icon';
import Spinner from '../../assets/icons/svg/spinner-third-duotone.svg';

interface PropsTypes {
  loading?: boolean;
  toggle?: boolean;
  SpinnerIcon?: React.ReactNode;
  size?: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: string;
  disabled?: boolean;
  PrefixIcon?: React.ReactNode;
  SuffixIcon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  refButton: React.Ref<HTMLButtonElement>;
}

Button.defaultProps = {
  ButtonSpinner: null,
  PrefixIcon: null,
  SuffixIcon: null,
  loading: false,
  size: '',
  toggle: false,
  type: 'button',
  variant: 'primary',
  disabled: false,
  children: null,
  onClick: () => {},
  className: '',
  refButton: null,
} as PropsTypes;

function Button(props: PropsTypes) {
  const [pressed, setPressedState] = useState(false);
  const {
    loading,
    SpinnerIcon,
    size,
    type,
    toggle,
    variant,
    disabled,
    PrefixIcon,
    SuffixIcon,
    children,
    onClick,
    className,
    refButton,
  } = props;

  let prefixIcon = PrefixIcon;
  let suffixIcon = SuffixIcon;
  let defaultSpinner = null;
  let normalOrToggleButton = null;
  const buttonClasses: Array<String> = [`btn`];

  if (size) buttonClasses.push(`btn-${size}`);
  if (!SpinnerIcon) defaultSpinner = <Icon Component={Spinner} rotating size={size} />;
  if (variant) buttonClasses.push(`btn-${variant}`);
  if (!children) buttonClasses.push(`btn-icon`);
  if (className) buttonClasses.push(className);
  if (loading && SpinnerIcon) {
    prefixIcon = SpinnerIcon;
  } else if (loading && !SpinnerIcon) {
    prefixIcon = defaultSpinner;
  }

  function clickInnerHandler() {
    setPressedState((curState) => !curState);
  }

  if (toggle && pressed && buttonClasses.indexOf('active') === -1) {
    buttonClasses.push('active');
  } else if (toggle && !pressed && buttonClasses.indexOf('active') !== -1) {
    buttonClasses.pop();
  }

  if (toggle) {
    normalOrToggleButton = (
      <button
        className={buttonClasses.join(' ')}
        disabled={disabled}
        onClick={onClick}
        onClickCapture={clickInnerHandler}
        type={type}
        aria-pressed={pressed}
        data-toggle="button"
        aria-autocomplete="none"
        ref={refButton}
      >
        <div className="btn__inner">
          {prefixIcon && <span className="btn__icon">{prefixIcon}</span>}
          {children && <span className="btn__content">{children}</span>}
          {suffixIcon && <span className="btn__icon">{suffixIcon}</span>}
        </div>
      </button>
    );
  } else {
    normalOrToggleButton = (
      <button
        className={buttonClasses.join(' ')}
        disabled={disabled}
        onClick={onClick}
        type={type}
        ref={refButton}
      >
        <div className="btn__inner">
          {prefixIcon && <span className="btn__icon">{prefixIcon}</span>}
          {children && <span className="btn__content">{children}</span>}
          {suffixIcon && <span className="btn__icon">{suffixIcon}</span>}
        </div>
      </button>
    );
  }

  return normalOrToggleButton;
}

export default Button;

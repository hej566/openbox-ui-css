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
  ButtonIcon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
}

Button.defaultProps = {
  ButtonSpinner: null,
  loading: false,
  size: '',
  toggle: false,
  type: 'button',
  variant: 'primary',
  disabled: false,
  children: null,
  onClick: () => {},
  className: '',
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
    ButtonIcon,
    children,
    onClick,
    className,
  } = props;

  let buttonIcon = ButtonIcon;
  let defaultSpinner = null;
  let normalOrToggleButton = null;
  const buttonClasses: Array<String> = [`${ns}-button`];

  if (size) buttonClasses.push(`${ns}-button-${size}`);
  if (!SpinnerIcon) defaultSpinner = <Icon Component={Spinner} rotating size={size} />;
  if (variant) buttonClasses.push(`${ns}-button-${variant}`);
  if (!children) buttonClasses.push(`${ns}-button-icon`);
  if (className) buttonClasses.push(className);
  if (loading && SpinnerIcon) {
    buttonIcon = SpinnerIcon;
  } else if (loading && !SpinnerIcon) {
    buttonIcon = defaultSpinner;
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
      >
        <div className={`${ns}-button__inner`}>
          {buttonIcon && <span className={`${ns}-button__icon`}>{buttonIcon}</span>}
          {children && <span className={`${ns}-button__content`}>{children}</span>}
        </div>
      </button>
    );
  } else {
    normalOrToggleButton = (
      <button className={buttonClasses.join(' ')} disabled={disabled} onClick={onClick} type={type}>
        <div className={`${ns}-button__inner`}>
          {buttonIcon && <span className={`${ns}-button__icon`}>{buttonIcon}</span>}
          {children && <span className={`${ns}-button__content`}>{children}</span>}
        </div>
      </button>
    );
  }

  return normalOrToggleButton;
}

export default Button;

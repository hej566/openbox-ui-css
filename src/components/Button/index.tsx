import React from 'react';
import Icon from '../Icon';
import Spinner from '../../assets/icons/svg/spinner-third-duotone.svg';

const Button = React.forwardRef<HTMLButtonElement, propTypes>((props: propTypes, ref) => {
  const {
    loading,
    spinnerIcon,
    size,
    type,
    variant,
    disabled,
    prefixIcon,
    suffixIcon,
    children,
    onClick,
    onBlur,
    className,
    onKeyDown,
    onMouseDown,
    onFocus,
  } = props;

  // let prefixIcon = PrefixIcon;
  // const suffixIcon = SuffixIcon;
  const defaultSpinner = spinnerIcon || <Icon component={Spinner} rotating size={size} />;
  const buttonClasses: string[] = [`${NS}-btn`];
  const buttonInnerClasses: string[] = [`${NS}-btn__inner`];
  if (variant) buttonClasses.push(`${NS}-btn--${variant}`);
  if (size) buttonClasses.push(`${NS}-btn--${size}`);
  if (!children) buttonClasses.push(`${NS}-btn__icon`);
  if (className) buttonClasses.push(className);

  if (loading) buttonInnerClasses.push(`${NS}-btn__inner--loading`);

  // if (loading && SpinnerIcon) {
  //   prefixIcon = SpinnerIcon;
  // } else if (loading && !SpinnerIcon) {
  //   prefixIcon = defaultSpinner;
  // }

  return (
    <button
      className={buttonClasses.join(' ')}
      disabled={disabled}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      onKeyDown={onKeyDown}
      type={type}
      ref={ref}
    >
      <div className={buttonInnerClasses.join(' ')}>
        {prefixIcon && <span className={`${NS}-btn__prefix-icon`}>{prefixIcon}</span>}
        {children && <span className={`${NS}-btn__content`}>{children}</span>}
        {suffixIcon && <span className={`${NS}-btn__suffix-icon`}>{suffixIcon}</span>}
      </div>
      {loading && <span className={`${NS}-btn__loading-icon`}>{defaultSpinner}</span>}
    </button>
  );
});

type propTypes = {
  loading?: boolean;
  spinnerIcon?: React.ReactNode;
  size?: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: string;
  disabled?: boolean;
  component?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  className?: string;
};

Button.defaultProps = {
  prefixIcon: null,
  suffixIcon: null,
  spinnerIcon: null,
  component: null,
  loading: false,
  size: '',
  type: 'button',
  variant: 'primary',
  disabled: false,
  children: null,
  onClick: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onMouseDown: () => {},
  onKeyDown: () => {},
  className: '',
};

export default Button;

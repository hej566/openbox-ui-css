import React from 'react';
import Icon from '../Icon';
import Spinner from '../../assets/icons/svg/spinner-third-duotone.svg';

const Button = React.forwardRef<HTMLButtonElement, propTypes>((props: propTypes, ref) => {
  const {
    isLoading,
    spinnerIcon,
    size,
    type,
    variant,
    isDisabled,
    prefixIcon,
    suffixIcon,
    children,
    onClick,
    onBlur,
    onKeyDown,
    className,
    onFocus,
    expanded,
    controls,
    label,
  } = props;

  const defaultSpinner = spinnerIcon || <Icon component={Spinner} isRotating size={size} />;
  const buttonClasses: string[] = [`btn`];
  const buttonInnerClasses: string[] = [`btn__inner`];

  if (variant) buttonClasses.push(`btn--${variant}`);
  if (size) buttonClasses.push(`btn--${size}`);
  if (!children) buttonClasses.push(`btn__icon`);
  if (className) buttonClasses.push(className);
  if (isLoading) buttonInnerClasses.push(`btn__inner--loading`);

  return (
    <button
      className={buttonClasses.join(' ')}
      disabled={isDisabled}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      type={type}
      ref={ref}
      aria-expanded={expanded}
      aria-controls={controls}
      aria-disabled={isDisabled}
      aria-label={label || 'icon'}
    >
      <div className={buttonInnerClasses.join(' ')}>
        {prefixIcon && <span className={`btn__prefix-icon`}>{prefixIcon}</span>}
        {children && <span className={`btn__content`}>{children}</span>}
        {suffixIcon && <span className={`btn__suffix-icon`}>{suffixIcon}</span>}
      </div>
      {isLoading && <span className={`btn__loading-icon`}>{defaultSpinner}</span>}
    </button>
  );
});

type propTypes = {
  isLoading?: boolean;
  spinnerIcon?: React.ReactNode;
  size?: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: string;
  isDisabled?: boolean;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onFocus?: React.FocusEventHandler<HTMLElement>;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLElement>;
  className?: string;
  expanded?: boolean;
  controls?: string;
  label?: string;
};

Button.defaultProps = {
  prefixIcon: null,
  suffixIcon: null,
  spinnerIcon: null,
  isLoading: false,
  size: 'base',
  type: 'button',
  variant: 'primary',
  isDisabled: false,
  children: null,
  onClick: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  className: '',
  expanded: false,
  controls: '',
  label: '',
};

export default Button;

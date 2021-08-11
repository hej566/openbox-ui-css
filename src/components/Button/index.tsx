import React from 'react';

interface PropsTypes {
  loading?: boolean;
  size?: string;
  type?: string;
  variant?: string;
  prefix?: string;
  suffix?: string;
  disabled?: boolean;
  icon?: string;
  children?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

Button.defaultProps = {
  loading: false,
  size: 'normal',
  type: 'button',
  variant: 'primary',
  prefix: '',
  suffix: '',
  disabled: false,
  icon: '',
  children: '',
  onClick: () => {},
};

function Button(props: PropsTypes) {
  const { loading, size, type, variant, prefix, suffix, disabled, icon, children, onClick } = props;

  // @ts-ignore
  const btnClasses: Array<String> = [`${ns}-button`];
  const btnInnerClasses: Array<String> = ['inner'];
  const loadingClasses: Array<String> = ['loading'];
  const loadedPrefixClasses: Array<String> = ['prefix'];
  const loadedContentClasses: Array<String> = ['content'];
  const loadedSuffixClasses: Array<String> = ['suffix'];

  if (loading) {
    loadedPrefixClasses.push('hide');
    loadedContentClasses.push('hide');
    loadedSuffixClasses.push('hide');
  } else {
    loadingClasses.push('hide');
  }
  if (size) {
    btnClasses.push(`${size}`);
  }
  if (variant) {
    btnClasses.push(`${variant}`);
  }
  if (type) {
    btnClasses.push(`${type}`);
  }
  if (prefix) {
    btnClasses.push(`hasPrefix`);
  }
  if (suffix) {
    btnClasses.push(`hasSuffix`);
  }

  return (
    <button className={btnClasses.join(' ')} disabled={disabled} onClick={onClick} type="button">
      {icon ? (
        <div className={btnInnerClasses.join(' ')}>
          <div className={loadingClasses.join(' ')}>
            <svg className="loader" />
          </div>
          <div className={loadedPrefixClasses.join(' ')}>
            <svg className="icon" />
          </div>
        </div>
      ) : (
        <div className={btnInnerClasses.join(' ')}>
          <div className={loadingClasses.join(' ')}>
            <svg className="loader" />
          </div>
          {prefix ? (
            <div className={loadedPrefixClasses.join(' ')}>
              <svg className="prefix" />
            </div>
          ) : null}
          <div className={loadedContentClasses.join(' ')}>{children}</div>
          {suffix ? (
            <div className={loadedSuffixClasses.join(' ')}>
              <svg className="suffix" />
            </div>
          ) : null}
        </div>
      )}
    </button>
  );
}

export default Button;

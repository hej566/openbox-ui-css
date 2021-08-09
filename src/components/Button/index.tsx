import React, { useEffect } from 'react';

interface PropsTypes {
  loading?: boolean;
  size?: string;
  type?: string;
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
  type: 'primary',
  prefix: '',
  suffix: '',
  disabled: false,
  icon: '',
  children: '',
  onClick: () => {},
};

function Button(props: PropsTypes) {
  const { loading, size, type, prefix, suffix, disabled, icon, children, onClick } = props;

  // @ts-ignore
  const btnClasses: Array<String> = [`${ns}-button`];
  const btnInnerClasses: Array<String> = ['inner'];
  const loadingClasses: Array<String> = ['loading'];
  const loadedPrefixClasses: Array<String> = ['prefix'];
  const loadedContentClasses: Array<String> = ['content'];
  const loadedSuffixClasses: Array<String> = ['suffix'];

  if (loading) {
    btnClasses.push('loading');
    loadingClasses.push('show');
    loadedPrefixClasses.push('hide');
    loadedContentClasses.push('hide');
    loadedSuffixClasses.push('hide');
  } else {
    loadingClasses.push('hide');
    loadedPrefixClasses.push('show');
    loadedContentClasses.push('show');
    loadedSuffixClasses.push('show');
  }
  if (size) {
    btnClasses.push(`${size}`);
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
            <svg className="prefix" />
          </div>
        </div>
      ) : (
        <div className={btnInnerClasses.join(' ')}>
          <div className={loadingClasses.join(' ')}>
            <svg className="loader" />
          </div>
          <div className={loadedPrefixClasses.join(' ')}>
            <svg className="prefix" />
          </div>
          <div className={loadedContentClasses.join(' ')}>{children}</div>
          <div className={loadedSuffixClasses.join(' ')}>
            <svg className="suffix" />
          </div>
        </div>
      )}
    </button>
  );
}

export default Button;

import React from 'react';
import { configure } from 'fork-ts-checker-webpack-plugin/lib/reporter/reporter-rpc/ReporterRpcProcedure';

interface PropsTypes {
  name?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  src: string;
  caption?: string;
}

Figure.defaultProps = {
  name: '',
  onClick: () => {},
  className: '',
  caption: '',
};

function Figure(props: PropsTypes) {
  const { name, onClick, className, src, caption } = props;
  const figureClasses: Array<string> = ['figure'];

  if (name) figureClasses.push(`${name}`);
  if (className) figureClasses.push(className);

  return (
    <figure>
      <img
        className={figureClasses.join(' ')}
        onClick={onClick}
        src={src}
        style={{ width: '200px', height: 'auto' }}
      />
      <figcaption className="figure-caption">{caption}</figcaption>
    </figure>
  );
}

export default Figure;

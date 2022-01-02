import React from 'react';
import Tooltip from '../components/Tooltip';
import Button from '../components/Button';
import Template from './Template';

function Tooltips() {
  const content = <Template>And some amazing content. Very engaging. Right?</Template>;

  return (
    <div className="rb-tooltips">
      <section className="rb-tooltip-basic">
        <h1 className="rb-title">Tooltips</h1>
        <div className="rb-group">
          <div className="rb-tooltip-wrapper">
            <Tooltip template={content} placement="left">
              <Button>left</Button>
            </Tooltip>
          </div>
          <div className="rb-tooltip-wrapper">
            <Tooltip template={content} placement="top">
              <Button>top</Button>
            </Tooltip>
          </div>
          <div className="rb-tooltip-wrapper">
            <Tooltip template={content} placement="bottom">
              <Button>bottom</Button>
            </Tooltip>
          </div>
          <div className="rb-tooltip-wrapper">
            <Tooltip template={content} placement="right">
              <Button>right</Button>
            </Tooltip>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tooltips;

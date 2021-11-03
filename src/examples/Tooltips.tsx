import React from 'react';
import Tooltip from '../components/Tooltip';
import Button from '../components/Button';
import Template from './Template';

function Tooltips() {
  const content = <Template>And here's some amazing content. It's very engaging. Right?</Template>;

  return (
    <div className="rc-navbars">
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic toast</div>
        <div className="rc-group">
          <div className="rc-item">
            <Tooltip template={content} placement="top" trigger="hover">
              <Button>right</Button>
            </Tooltip>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tooltips;

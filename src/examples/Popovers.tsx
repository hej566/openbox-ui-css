import React from 'react';
import Popover from '../components/Popover';
import Button from '../components/Button';
import Template from './Template';

function Popovers() {
  const content = (
    <Template>
      <div className="popover-header">Popover title</div>
      <div className="popover-body">
        And here's some amazing content. It's very engaging. Right?
      </div>
    </Template>
  );
  return (
    <div className="rc-popover">
      <section className="rc-popover-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <div className="rc-item">
            <Popover template={content} placement="right">
              <Button>right</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="top">
              <Button>top</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="left">
              <Button>left</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="bottom">
              <Button>bottom</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="top-start">
              <Button>top-start</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="top-end">
              <Button>top-end</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="right-start">
              <Button>right-start</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="right-end">
              <Button>right-end</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="bottom-start">
              <Button>bottom-start</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="bottom-end">
              <Button>bottom-end</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="left-start">
              <Button>left-start</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="left-end">
              <Button>left-end</Button>
            </Popover>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Popovers;

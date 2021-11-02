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
            <Popover template={content} placement="right" trigger="hover">
              <Button>right</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="top" trigger="hover">
              <Button>top</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="left" trigger="hover">
              <Button>left</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="bottom" trigger="click">
              <Button>bottom</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="top-start" trigger="click">
              <Button>top-start</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="top-end" trigger="click">
              <Button>top-end</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="right-start" trigger="click">
              <Button>right-start</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="right-end" trigger="click">
              <Button>right-end</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="bottom-start" trigger="click">
              <Button>bottom-start</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="bottom-end" trigger="click">
              <Button>bottom-end</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="left-start" trigger="click">
              <Button>left-start</Button>
            </Popover>
          </div>
          <div className="rc-item">
            <Popover template={content} placement="left-end" trigger="click">
              <Button>left-end</Button>
            </Popover>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Popovers;

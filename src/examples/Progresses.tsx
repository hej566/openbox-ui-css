import React from 'react';
import Progress from '../components/Progress';
import ProgressBar from '../components/ProgressBar';

function Progresses() {
  return (
    <div className="rc-navbars">
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic progress</div>
        <div className="rc-group">
          <div className="rc-item">
            <Progress>
              <ProgressBar value={50} />
            </Progress>
          </div>
          <div className="rc-item">
            <Progress>
              <ProgressBar value={30} className="bg-success" />
            </Progress>
          </div>
          <div className="rc-item">
            <Progress>
              <ProgressBar value={30} className="bg-warning" />
            </Progress>
          </div>
          <div className="rc-item">
            <Progress>
              <ProgressBar value={30} className="bg-danger" />
              <ProgressBar value={30} className="bg-warning" />
              <ProgressBar value={30} className="bg-success" />
            </Progress>
          </div>
          <div className="rc-item">
            <Progress>
              <ProgressBar value={50} striped />
            </Progress>
          </div>
          <div className="rc-item">
            <Progress>
              <ProgressBar value={75} striped animate />
            </Progress>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Progresses;

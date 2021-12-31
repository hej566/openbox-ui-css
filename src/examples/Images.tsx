import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image from '../components/Image';

import poster1 from '../assets/img/Post-1.png';
import poster2 from '../assets/img/Post-2.png';
import poster3 from '../assets/img/Post-3.png';
import poster4 from '../assets/img/Post-4.png';
import poster5 from '../assets/img/Post-5.png';

function Uploads() {
  return (
    <section className="rc-navbar-basic">
      <div className="rc-title">Basic toast</div>
      <div className="rc-group">
        <div className="rc-item">
          <Image src={poster1} className="img-fluid" />
        </div>
        <div className="rc-item">
          <Image src={poster2} className="img-thumbnail" />
        </div>
        <div className="rc-item">
          <Image src={poster3} className="rounded float-start" />
          <div style={{ clear: 'both' }} />
        </div>
        <div className="rc-item">
          <Image src={poster4} className="rounded float-end" />
          <div style={{ clear: 'both' }} />
        </div>
        <div className="rc-item">
          <Image src={poster5} className="rounded mx-auto d-block" />
        </div>
      </div>
    </section>
  );
}

export default Uploads;

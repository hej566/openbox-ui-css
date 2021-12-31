import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Figure from '../components/Figure';

import poster1 from '../assets/img/Post-1.png';
import poster2 from '../assets/img/Post-2.png';
import poster3 from '../assets/img/Post-3.png';

function Uploads() {
  return (
    <section className="rc-navbar-basic">
      <div className="rc-title">Basic toast</div>
      <div className="rc-group">
        <div className="rc-item">
          <Figure
            src={poster1}
            className="img-fluid figure-img"
            caption="A caption for the above image."
          />
        </div>
      </div>
    </section>
  );
}

export default Uploads;

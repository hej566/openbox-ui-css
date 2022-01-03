import React from 'react';
import Button from '../components/Button';

function Home() {
  return (
    <div className="home">
      <h1 style={{ marginBottom: '2rem' }}>React Bootstrap UI</h1>
      <div>
        <a href="/react-ui/accordions">
          <Button>Get started</Button>
        </a>
      </div>
    </div>
  );
}

export default Home;

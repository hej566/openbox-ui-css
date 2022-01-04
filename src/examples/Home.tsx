import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
  return (
    <div className="home">
      <h1 style={{ marginBottom: '2rem' }}>React Bootstrap UI</h1>
      <div>
        <Link to="/accordions">
          <Button>Get started</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

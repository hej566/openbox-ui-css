import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PaginationItem from '../components/PaginationItem';
import Pagination from '../components/Pagination';

function Paginations() {
  return (
    <div className="rc-navbars">
      <section className="rc-navbar-basic">
        <div className="rc-title">Basic pagination</div>
        <div className="rc-group">
          <Pagination>
            <PaginationItem key={uuidv4()} disabled>
              <span>Previous</span>
            </PaginationItem>
            <PaginationItem key={uuidv4()}>1</PaginationItem>
            <PaginationItem key={uuidv4()}>2</PaginationItem>
            <PaginationItem key={uuidv4()}>3</PaginationItem>
            <PaginationItem key={uuidv4()}>
              <span>Next</span>
            </PaginationItem>
          </Pagination>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Size pagination</div>
        <div className="rc-group">
          <Pagination size="lg">
            <PaginationItem key={uuidv4()}>
              <span>Previous</span>
            </PaginationItem>
            <PaginationItem key={uuidv4()}>1</PaginationItem>
            <PaginationItem key={uuidv4()}>2</PaginationItem>
            <PaginationItem key={uuidv4()}>3</PaginationItem>
            <PaginationItem key={uuidv4()}>
              <span>Next</span>
            </PaginationItem>
          </Pagination>
          <Pagination size="sm">
            <PaginationItem key={uuidv4()}>
              <span aria-label="Previous">Previous</span>
            </PaginationItem>
            <PaginationItem key={uuidv4()}>1</PaginationItem>
            <PaginationItem key={uuidv4()}>2</PaginationItem>
            <PaginationItem key={uuidv4()}>3</PaginationItem>
            <PaginationItem key={uuidv4()}>
              <span>Next</span>
            </PaginationItem>
          </Pagination>
        </div>
      </section>
      <section className="rc-navbar-basic">
        <div className="rc-title">Alignment pagination</div>
        <div className="rc-group">
          <Pagination position="center">
            <PaginationItem key={uuidv4()}>
              <span>Previous</span>
            </PaginationItem>
            <PaginationItem key={uuidv4()}>1</PaginationItem>
            <PaginationItem key={uuidv4()}>2</PaginationItem>
            <PaginationItem key={uuidv4()}>3</PaginationItem>
            <PaginationItem key={uuidv4()}>
              <span>Next</span>
            </PaginationItem>
          </Pagination>
          <Pagination position="end">
            <PaginationItem key={uuidv4()}>
              <span>Previous</span>
            </PaginationItem>
            <PaginationItem key={uuidv4()}>1</PaginationItem>
            <PaginationItem key={uuidv4()}>2</PaginationItem>
            <PaginationItem key={uuidv4()}>3</PaginationItem>
            <PaginationItem key={uuidv4()}>
              <span>Next</span>
            </PaginationItem>
          </Pagination>
        </div>
      </section>
    </div>
  );
}

export default Paginations;

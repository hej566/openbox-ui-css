import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import PaginationItem from '../components/PaginationItem';
import Pagination from '../components/Pagination';

function Paginations() {
  const basic = `
    import PaginationItem from '../components/PaginationItem';
    import Pagination from '../components/Pagination';
    
    <Pagination>
      <PaginationItem itemId="1" isDisabled>
        <span>Previous</span>
      </PaginationItem>
      <PaginationItem itemId="2">1</PaginationItem>
      <PaginationItem itemId="3">2</PaginationItem>
      <PaginationItem itemId="4">3</PaginationItem>
      <PaginationItem itemId="5">
        <span>Next</span>
      </PaginationItem>
    </Pagination>
  `;

  const sizing = `
    import PaginationItem from '../components/PaginationItem';
    import Pagination from '../components/Pagination';
    
    <Pagination size="lg">
      <PaginationItem itemId="1">
        <span>Previous</span>
      </PaginationItem>
      <PaginationItem itemId="2">1</PaginationItem>
      <PaginationItem itemId="3">2</PaginationItem>
      <PaginationItem itemId="4">3</PaginationItem>
      <PaginationItem itemId="5">
        <span>Next</span>
      </PaginationItem>
    </Pagination>
    <Pagination size="sm">
      <PaginationItem itemId="1">
        <span aria-label="Previous">Previous</span>
      </PaginationItem>
      <PaginationItem itemId="2">1</PaginationItem>
      <PaginationItem itemId="3">2</PaginationItem>
      <PaginationItem itemId="4">3</PaginationItem>
      <PaginationItem itemId="5">
        <span>Next</span>
      </PaginationItem>
    </Pagination>
  `;

  const alignment = `
    import PaginationItem from '../components/PaginationItem';
    import Pagination from '../components/Pagination';
    
    <Pagination>
      <PaginationItem itemId="1">
        <span>Previous</span>
      </PaginationItem>
      <PaginationItem itemId="2">1</PaginationItem>
      <PaginationItem itemId="3">2</PaginationItem>
      <PaginationItem itemId="4">3</PaginationItem>
      <PaginationItem itemId="5">
        <span>Next</span>
      </PaginationItem>
    </Pagination>

    <Pagination position="center">
      <PaginationItem itemId="1">
        <span>Previous</span>
      </PaginationItem>
      <PaginationItem itemId="2">1</PaginationItem>
      <PaginationItem itemId="3">2</PaginationItem>
      <PaginationItem itemId="4">3</PaginationItem>
      <PaginationItem itemId="5">
        <span>Next</span>
      </PaginationItem>
    </Pagination>
    
    <Pagination position="end">
      <PaginationItem itemId="1">
        <span>Previous</span>
      </PaginationItem>
      <PaginationItem itemId="2">1</PaginationItem>
      <PaginationItem itemId="3">2</PaginationItem>
      <PaginationItem itemId="4">3</PaginationItem>
      <PaginationItem itemId="5">
        <span>Next</span>
      </PaginationItem>
    </Pagination>
  `;

  return (
    <div className="rb-paginations">
      <section className="rb-pagination-basic">
        <h1 className="rb-title">Pagination</h1>
        <div className="rb-group">
          <div className="rb-pagination-wrapper">
            <Pagination>
              <PaginationItem itemId="1" isDisabled>
                <span>Previous</span>
              </PaginationItem>
              <PaginationItem itemId="2">1</PaginationItem>
              <PaginationItem itemId="3">2</PaginationItem>
              <PaginationItem itemId="4">3</PaginationItem>
              <PaginationItem itemId="5">
                <span>Next</span>
              </PaginationItem>
            </Pagination>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {basic}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-pagination-basic">
        <h1 className="rb-title">Sizing</h1>
        <div className="rb-group">
          <div className="rb-pagination-wrapper">
            <Pagination size="lg">
              <PaginationItem itemId="1">
                <span>Previous</span>
              </PaginationItem>
              <PaginationItem itemId="2">1</PaginationItem>
              <PaginationItem itemId="3">2</PaginationItem>
              <PaginationItem itemId="4">3</PaginationItem>
              <PaginationItem itemId="5">
                <span>Next</span>
              </PaginationItem>
            </Pagination>
            <Pagination size="sm">
              <PaginationItem itemId="1">
                <span aria-label="Previous">Previous</span>
              </PaginationItem>
              <PaginationItem itemId="2">1</PaginationItem>
              <PaginationItem itemId="3">2</PaginationItem>
              <PaginationItem itemId="4">3</PaginationItem>
              <PaginationItem itemId="5">
                <span>Next</span>
              </PaginationItem>
            </Pagination>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {sizing}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-pagination-basic">
        <h1 className="rb-title">Alignment</h1>
        <div className="rb-group">
          <div className="rb-pagination-wrapper">
            <Pagination>
              <PaginationItem itemId="1">
                <span>Previous</span>
              </PaginationItem>
              <PaginationItem itemId="2">1</PaginationItem>
              <PaginationItem itemId="3">2</PaginationItem>
              <PaginationItem itemId="4">3</PaginationItem>
              <PaginationItem itemId="5">
                <span>Next</span>
              </PaginationItem>
            </Pagination>
            <Pagination position="center">
              <PaginationItem itemId="1">
                <span>Previous</span>
              </PaginationItem>
              <PaginationItem itemId="2">1</PaginationItem>
              <PaginationItem itemId="3">2</PaginationItem>
              <PaginationItem itemId="4">3</PaginationItem>
              <PaginationItem itemId="5">
                <span>Next</span>
              </PaginationItem>
            </Pagination>
            <Pagination position="end">
              <PaginationItem itemId="1">
                <span>Previous</span>
              </PaginationItem>
              <PaginationItem itemId="2">1</PaginationItem>
              <PaginationItem itemId="3">2</PaginationItem>
              <PaginationItem itemId="4">3</PaginationItem>
              <PaginationItem itemId="5">
                <span>Next</span>
              </PaginationItem>
            </Pagination>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {alignment}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default Paginations;

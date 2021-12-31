import React from 'react';
// @ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter';
// @ts-ignore
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ListGroup from '../components/ListGroup';
import ListGroupItem from '../components/ListGroupItem';
import Badge from '../components/Badge';

function ListGroups() {
  const basic = `
    import ListGroup from '../components/ListGroup';
    import ListGroupItem from '../components/ListGroupItem';
    
    <ListGroup>
      <ListGroupItem isActive itemId="1">
        An item
      </ListGroupItem>
      <ListGroupItem isDisabled itemId="2">
        A second item
      </ListGroupItem>
      <ListGroupItem itemId="3">A third item</ListGroupItem>
      <ListGroupItem itemId="4">A fourth item</ListGroupItem>
      <ListGroupItem itemId="5">And a fifth one</ListGroupItem>
    </ListGroup>
  `;

  const flush = `
    import ListGroup from '../components/ListGroup';
    import ListGroupItem from '../components/ListGroupItem';
    
    <ListGroup flush>
      <ListGroupItem isActive itemId="1">
        An item
      </ListGroupItem>
      <ListGroupItem isDisabled itemId="2">
        A second item
      </ListGroupItem>
      <ListGroupItem itemId="3">A third item</ListGroupItem>
      <ListGroupItem itemId="4">A fourth item</ListGroupItem>
      <ListGroupItem itemId="5">And a fifth one</ListGroupItem>
    </ListGroup>
  `;

  const numbered = `
    import ListGroup from '../components/ListGroup';
    import ListGroupItem from '../components/ListGroupItem';
    import Badge from '../components/Badge';
    
    <ListGroup numbered>
      <ListGroupItem isActive itemId="1">
        An item
      </ListGroupItem>
      <ListGroupItem isDisabled itemId="2">
        A second item
      </ListGroupItem>
      <ListGroupItem itemId="3">A third item</ListGroupItem>
      <ListGroupItem itemId="4">A fourth item</ListGroupItem>
      <ListGroupItem itemId="5">And a fifth one</ListGroupItem>
    </ListGroup>
    
    <ListGroup numbered>
      <ListGroupItem
        itemId="1"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Content for list item
        </div>
        <Badge className="bg-primary rounded-pill">4</Badge>
      </ListGroupItem>
      <ListGroupItem
        itemId="2"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Content for list item
        </div>
        <Badge className="bg-primary rounded-pill">4</Badge>
      </ListGroupItem>
      <ListGroupItem
        itemId="3"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Subheading</div>
          Content for list item
        </div>
        <Badge className="bg-primary rounded-pill">4</Badge>
      </ListGroupItem>
    </ListGroup>
  `;

  const horizontal = `
    import ListGroup from '../components/ListGroup';
    import ListGroupItem from '../components/ListGroupItem';
    
    <ListGroup horizontal>
      <ListGroupItem isActive itemId="1">
        An item
      </ListGroupItem>
      <ListGroupItem isDisabled itemId="2">
        A second item
      </ListGroupItem>
      <ListGroupItem itemId="3">A third item</ListGroupItem>
      <ListGroupItem itemId="4">A fourth item</ListGroupItem>
      <ListGroupItem itemId="5">And a fifth one</ListGroupItem>
    </ListGroup>
  `;

  const contextual = `
    import ListGroup from '../components/ListGroup';
    import ListGroupItem from '../components/ListGroupItem';
    
    <ListGroup>
      <ListGroupItem isActive itemId="1">
        A simple default list group item
      </ListGroupItem>
      <ListGroupItem variant="primary" itemId="2">
        A simple primary list group item
      </ListGroupItem>
      <ListGroupItem isDisabled itemId="3">
        A simple disabled list group item
      </ListGroupItem>
      <ListGroupItem variant="secondary" itemId="4">
        A simple secondary list group item
      </ListGroupItem>
      <ListGroupItem variant="success" itemId="5">
        A simple success list group item
      </ListGroupItem>
      <ListGroupItem variant="danger" itemId="6">
        A simple danger list group item
      </ListGroupItem>
      <ListGroupItem variant="warning" itemId="7">
        A simple warning list group item
      </ListGroupItem>
      <ListGroupItem variant="info" itemId="8">
        A simple info list group item
      </ListGroupItem>
      <ListGroupItem variant="dark" itemId="9">
        A simple dark list group item
      </ListGroupItem>
    </ListGroup>
  `;

  const badges = `
    import ListGroup from '../components/ListGroup';
    import ListGroupItem from '../components/ListGroupItem';
    import Badge from '../components/Badge';
    
    <ListGroup>
      <ListGroupItem
        itemId="1"
        className="d-flex justify-content-between align-items-center"
      >
        A list item
        <Badge className="bg-primary rounded-pill">14</Badge>
      </ListGroupItem>
      <ListGroupItem
        itemId="2"
        className="d-flex justify-content-between align-items-center"
      >
        A second list item
        <Badge className="bg-primary rounded-pill">4</Badge>
      </ListGroupItem>
      <ListGroupItem
        itemId="3"
        className="d-flex justify-content-between align-items-center"
      >
        A third list item
        <Badge className="bg-primary rounded-pill">4</Badge>
      </ListGroupItem>
    </ListGroup>    
  `;

  const customize = `
    import ListGroup from '../components/ListGroup';
    import ListGroupItem from '../components/ListGroupItem';
    
    <ListGroup>
      <ListGroupItem itemId="1">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </ListGroupItem>
      <ListGroupItem itemId="2">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small className="text-muted">And some muted small print.</small>
      </ListGroupItem>
      <ListGroupItem itemId="3">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small className="text-muted">3 days ago</small>
        </div>
        <p className="mb-1">Some placeholder content in a paragraph.</p>
        <small className="text-muted">And some muted small print.</small>
      </ListGroupItem>
    </ListGroup>
  `;

  return (
    <div className="rb-list-groups">
      <section className="rb-list-group-basic">
        <h1 className="rb-title">Basic</h1>
        <div className="rb-group">
          <div className="rb-list-group-wrapper">
            <ListGroup>
              <ListGroupItem isActive itemId="1">
                An item
              </ListGroupItem>
              <ListGroupItem isDisabled itemId="2">
                A second item
              </ListGroupItem>
              <ListGroupItem itemId="3">A third item</ListGroupItem>
              <ListGroupItem itemId="4">A fourth item</ListGroupItem>
              <ListGroupItem itemId="5">And a fifth one</ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {basic}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-list-group-flush">
        <h1 className="rb-title">Flush</h1>
        <div className="rb-group">
          <div className="rb-list-group-wrapper">
            <ListGroup flush>
              <ListGroupItem isActive itemId="1">
                An item
              </ListGroupItem>
              <ListGroupItem isDisabled itemId="2">
                A second item
              </ListGroupItem>
              <ListGroupItem itemId="3">A third item</ListGroupItem>
              <ListGroupItem itemId="4">A fourth item</ListGroupItem>
              <ListGroupItem itemId="5">And a fifth one</ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {flush}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-list-group-numbered">
        <h1 className="rb-title">Numbered</h1>
        <div className="rb-group">
          <div className="rb-list-group-wrapper">
            <ListGroup numbered>
              <ListGroupItem isActive itemId="1">
                An item
              </ListGroupItem>
              <ListGroupItem isDisabled itemId="2">
                A second item
              </ListGroupItem>
              <ListGroupItem itemId="3">A third item</ListGroupItem>
              <ListGroupItem itemId="4">A fourth item</ListGroupItem>
              <ListGroupItem itemId="5">And a fifth one</ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div className="rb-group">
          <div className="rb-list-group-wrapper">
            <ListGroup numbered>
              <ListGroupItem
                itemId="1"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <Badge className="bg-primary rounded-pill">4</Badge>
              </ListGroupItem>
              <ListGroupItem
                itemId="2"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <Badge className="bg-primary rounded-pill">4</Badge>
              </ListGroupItem>
              <ListGroupItem
                itemId="3"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Content for list item
                </div>
                <Badge className="bg-primary rounded-pill">4</Badge>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {numbered}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rc-list-group-horizontal">
        <h1 className="rc-title">Horizontal</h1>
        <div className="rc-group">
          <div className="rb-list-group-wrapper">
            <ListGroup horizontal>
              <ListGroupItem isActive itemId="1">
                An item
              </ListGroupItem>
              <ListGroupItem isDisabled itemId="2">
                A second item
              </ListGroupItem>
              <ListGroupItem itemId="3">A third item</ListGroupItem>
              <ListGroupItem itemId="4">A fourth item</ListGroupItem>
              <ListGroupItem itemId="5">And a fifth one</ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {horizontal}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rc-list-group-contextual">
        <h1 className="rc-title">Contextual</h1>
        <div className="rc-group">
          <div className="rb-list-group-wrapper">
            <ListGroup>
              <ListGroupItem isActive itemId="1">
                A simple default list group item
              </ListGroupItem>
              <ListGroupItem variant="primary" itemId="2">
                A simple primary list group item
              </ListGroupItem>
              <ListGroupItem isDisabled itemId="3">
                A simple disabled list group item
              </ListGroupItem>
              <ListGroupItem variant="secondary" itemId="4">
                A simple secondary list group item
              </ListGroupItem>
              <ListGroupItem variant="success" itemId="5">
                A simple success list group item
              </ListGroupItem>
              <ListGroupItem variant="danger" itemId="6">
                A simple danger list group item
              </ListGroupItem>
              <ListGroupItem variant="warning" itemId="7">
                A simple warning list group item
              </ListGroupItem>
              <ListGroupItem variant="info" itemId="8">
                A simple info list group item
              </ListGroupItem>
              <ListGroupItem variant="dark" itemId="9">
                A simple dark list group item
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {contextual}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-list-group-badges">
        <h1 className="rb-title">Badges</h1>
        <div className="rb-group">
          <div className="rb-list-group-wrapper">
            <ListGroup>
              <ListGroupItem
                itemId="1"
                className="d-flex justify-content-between align-items-center"
              >
                A list item
                <Badge className="bg-primary rounded-pill">14</Badge>
              </ListGroupItem>
              <ListGroupItem
                itemId="2"
                className="d-flex justify-content-between align-items-center"
              >
                A second list item
                <Badge className="bg-primary rounded-pill">4</Badge>
              </ListGroupItem>
              <ListGroupItem
                itemId="3"
                className="d-flex justify-content-between align-items-center"
              >
                A third list item
                <Badge className="bg-primary rounded-pill">4</Badge>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {badges}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="rb-list-group-custom">
        <h1 className="rb-title">Customize</h1>
        <div className="rb-group">
          <div className="rb-list-group-wrapper">
            <ListGroup>
              <ListGroupItem itemId="1">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small>3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small>And some small print.</small>
              </ListGroupItem>
              <ListGroupItem itemId="2">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small>3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small>And some muted small print.</small>
              </ListGroupItem>
              <ListGroupItem itemId="3">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">List group item heading</h5>
                  <small>3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small>And some muted small print.</small>
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div className="rb-code">
          <SyntaxHighlighter language="javascript" style={docco}>
            {customize}
          </SyntaxHighlighter>
        </div>
      </section>
    </div>
  );
}

export default ListGroups;

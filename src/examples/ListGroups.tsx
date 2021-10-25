import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListGroup from '../components/ListGroup';
import ListGroupItem from '../components/ListGroupItem';
import Badge from '../components/Badge';

function ListGroups() {
  return (
    <div className="rc-list-groups">
      <section className="rc-list-group-basic">
        <div className="rc-title">Basic list group</div>
        <div className="rc-group">
          <ListGroup>
            <ListGroupItem active key={uuidv4()}>
              An item
            </ListGroupItem>
            <ListGroupItem disabled key={uuidv4()}>
              A second item
            </ListGroupItem>
            <ListGroupItem key={uuidv4()}>A third item</ListGroupItem>
            <ListGroupItem key={uuidv4()}>A fourth item</ListGroupItem>
            <ListGroupItem key={uuidv4()}>And a fifth one</ListGroupItem>
          </ListGroup>
        </div>
      </section>
      <section className="rc-list-group-flush">
        <div className="rc-title">Flush list group</div>
        <div className="rc-group">
          <ListGroup flush>
            <ListGroupItem active key={uuidv4()}>
              An item
            </ListGroupItem>
            <ListGroupItem disabled key={uuidv4()}>
              A second item
            </ListGroupItem>
            <ListGroupItem key={uuidv4()}>A third item</ListGroupItem>
            <ListGroupItem key={uuidv4()}>A fourth item</ListGroupItem>
            <ListGroupItem key={uuidv4()}>And a fifth one</ListGroupItem>
          </ListGroup>
        </div>
      </section>
      <section className="rc-list-group-numbered">
        <div className="rc-title">Numbered list group</div>
        <div className="rc-group">
          <ListGroup numbered>
            <ListGroupItem active key={uuidv4()}>
              An item
            </ListGroupItem>
            <ListGroupItem disabled key={uuidv4()}>
              A second item
            </ListGroupItem>
            <ListGroupItem key={uuidv4()}>A third item</ListGroupItem>
            <ListGroupItem key={uuidv4()}>A fourth item</ListGroupItem>
            <ListGroupItem key={uuidv4()}>And a fifth one</ListGroupItem>
          </ListGroup>
        </div>
        <div className="rc-group">
          <ListGroup numbered>
            <ListGroupItem
              key={uuidv4()}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Content for list item
              </div>
              <Badge className="bg-primary rounded-pill">4</Badge>
            </ListGroupItem>
            <ListGroupItem
              key={uuidv4()}
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Subheading</div>
                Content for list item
              </div>
              <Badge className="bg-primary rounded-pill">4</Badge>
            </ListGroupItem>
            <ListGroupItem
              key={uuidv4()}
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
      </section>
      <section className="rc-list-group-horizontal">
        <div className="rc-title">Horizontal list group</div>
        <div className="rc-group">
          <ListGroup horizontal>
            <ListGroupItem active key={uuidv4()}>
              An item
            </ListGroupItem>
            <ListGroupItem disabled key={uuidv4()}>
              A second item
            </ListGroupItem>
            <ListGroupItem key={uuidv4()}>A third item</ListGroupItem>
            <ListGroupItem key={uuidv4()}>A fourth item</ListGroupItem>
            <ListGroupItem key={uuidv4()}>And a fifth one</ListGroupItem>
          </ListGroup>
        </div>
      </section>
      <section className="rc-list-group-contextual">
        <div className="rc-title">Contextual list group</div>
        <div className="rc-group">
          <ListGroup>
            <ListGroupItem active key={uuidv4()}>
              A simple default list group item
            </ListGroupItem>
            <ListGroupItem variant="primary" key={uuidv4()}>
              A simple primary list group item
            </ListGroupItem>
            <ListGroupItem disabled key={uuidv4()}>
              A simple disabled list group item
            </ListGroupItem>
            <ListGroupItem variant="secondary" key={uuidv4()}>
              A simple secondary list group item
            </ListGroupItem>
            <ListGroupItem variant="success" key={uuidv4()}>
              A simple success list group item
            </ListGroupItem>
            <ListGroupItem variant="danger" key={uuidv4()}>
              A simple danger list group item
            </ListGroupItem>
            <ListGroupItem variant="warning" key={uuidv4()}>
              A simple warning list group item
            </ListGroupItem>
            <ListGroupItem variant="info" key={uuidv4()}>
              A simple info list group item
            </ListGroupItem>
            <ListGroupItem variant="dark" key={uuidv4()}>
              A simple dark list group item
            </ListGroupItem>
          </ListGroup>
        </div>
      </section>
      <section className="rc-list-group-badges">
        <div className="rc-title">Badges list group</div>
        <div className="rc-group">
          <ListGroup>
            <ListGroupItem
              key={uuidv4()}
              className="d-flex justify-content-between align-items-center"
            >
              A list item
              <Badge className="bg-primary rounded-pill">14</Badge>
            </ListGroupItem>
            <ListGroupItem
              key={uuidv4()}
              className="d-flex justify-content-between align-items-center"
            >
              A second list item
              <Badge className="bg-primary rounded-pill">4</Badge>
            </ListGroupItem>
            <ListGroupItem
              key={uuidv4()}
              className="d-flex justify-content-between align-items-center"
            >
              A third list item
              <Badge className="bg-primary rounded-pill">4</Badge>
            </ListGroupItem>
          </ListGroup>
        </div>
      </section>
      <section className="rc-list-group-custom">
        <div className="rc-title">Custom list group</div>
        <div className="rc-group">
          <ListGroup>
            <ListGroupItem key={uuidv4()}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small>And some small print.</small>
            </ListGroupItem>
            <ListGroupItem key={uuidv4()}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-muted">And some muted small print.</small>
            </ListGroupItem>
            <ListGroupItem key={uuidv4()}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Some placeholder content in a paragraph.</p>
              <small className="text-muted">And some muted small print.</small>
            </ListGroupItem>
          </ListGroup>
        </div>
      </section>
    </div>
  );
}

export default ListGroups;

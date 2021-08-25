import React, { Fragment, useState, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AccordionItem from '../components/AccordionItem';
import AccordionGroup from '../components/AccordionGroup';
import Icon from '../components/Icon';
import Acorn from '../assets/icons/svg/acorn-duotone.svg';

function Accordion() {
  return (
    <div className="accordions">
      <div className="accordion only">
        <AccordionGroup only>
          <AccordionItem
            title=" Accordion Item #1"
            open={false}
            key={uuidv4()}
            AccordionIcon={<Icon Component={Acorn} />}
          >
            <strong>This is the first item's accordion body.</strong> It is shown by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionItem>
          <AccordionItem title="Accordion Item #2" open={false} key={uuidv4()}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default,*/
            until the collapse plugin adds the appropriate classes that we use to style each
            element. These classes control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or overriding our
            default variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionItem>
          <AccordionItem title="Accordion Item #3" open={false} key={uuidv4()}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionItem>
        </AccordionGroup>
      </div>

      <div className="accordion flush only">
        <AccordionGroup only flush>
          <AccordionItem
            title=" Accordion Item #1"
            open={false}
            key={uuidv4()}
            AccordionIcon={<Icon Component={Acorn} />}
          >
            <strong>This is the first item's accordion body.</strong> It is shown by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionItem>
          <AccordionItem title="Accordion Item #2" open={false} key={uuidv4()}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default,*/
            until the collapse plugin adds the appropriate classes that we use to style each
            element. These classes control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or overriding our
            default variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionItem>
          <AccordionItem title="Accordion Item #3" open={false} key={uuidv4()}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionItem>
        </AccordionGroup>
      </div>

      <div className="accordion always open">
        <AccordionGroup>
          <AccordionItem
            title=" Accordion Item #1"
            open={false}
            key={uuidv4()}
            AccordionIcon={<Icon Component={Acorn} />}
          >
            <strong>This is the first item's accordion body.</strong> It is shown by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionItem>
          <AccordionItem title="Accordion Item #2" open={false} key={uuidv4()}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default,*/
            until the collapse plugin adds the appropriate classes that we use to style each
            element. These classes control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or overriding our
            default variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionItem>
          <AccordionItem title="Accordion Item #3" open={false} key={uuidv4()}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until
            the collapse plugin adds the appropriate classes that we use to style each element.
            These classes control the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within the{' '}
            <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionItem>
        </AccordionGroup>
      </div>
    </div>
  );
}

export default Accordion;

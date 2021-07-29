import React from 'react';

interface Greeting {
  name: string;
  firstName: string;
  lastName: string;
}

function Hello(props: Greeting) {
  const { name, firstName, lastName } = props;
  return (
    <h1>
      hello world {name}, {firstName}, {lastName}
    </h1>
  );
}

export default Hello;

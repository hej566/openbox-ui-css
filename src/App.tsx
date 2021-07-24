import React, { Component } from 'react';

interface Greeting {
  name: string;
  firstName: string;
  lastName: string;
}

interface State {
  active: boolean;
}
//
// const App = ({ name, firstName, lastName }: Greeting) => (
//   <h1>
//     hello {name} {firstName} {lastName}
//   </h1>
// );
//
// export default App;
class Hello extends Component<Greeting, State> {
  state: State = {
    active: false
  };

  static defaultProps = {
    name: '',
    firstName: 'Jin',
    lastName: 'He'
  };

  render() {
    const { name, firstName, lastName } = this.props;
    return (
      <h1>
        hello {name}, {firstName}, {lastName}
      </h1>
    );
  }
}

export default Hello;

/* eslint-disable react/prefer-stateless-function */
/* Disabling react/prefer-stateless-function because hot reloading won't work
   with a stateless func */

import React from 'react';
import HelloWorld from './components/hello-world';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      planet: 'world'
    };
  }
  render() {
    return <HelloWorld planet={this.state.planet} />;
  }
}

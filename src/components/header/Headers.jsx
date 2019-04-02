import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import './Headers.scss'

class Headers extends Component {
  render() {
    return (
      <header>
        <Header className="lisa-ferrier" size='huge'>Lisa Ferrier</Header>
        <Header size="medium" className="subtitle-header">
          Dév junior front-end
            </Header>
      </header>
    );
  }
}

export default Headers;
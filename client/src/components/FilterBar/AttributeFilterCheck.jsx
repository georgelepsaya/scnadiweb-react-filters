import React, { Component } from 'react';
import { AttributeTitle, AttributeContainer } from './styles.js';
import CheckBox from './CheckBox/CheckBox.jsx';

class AttributeFilterCheck extends Component {
  render() {
    return (
      <AttributeContainer>
        <AttributeTitle>{this.props.title}</AttributeTitle>
        <CheckBox attr={this.props.attr} title={this.props.title} />
      </AttributeContainer>
    )
  }
}

export default AttributeFilterCheck;
import React, { Component } from 'react';
import { CheckWrapper, CheckInput, CheckLabel, SwitchText, Container } from './styles';

class CheckBox extends Component {
  render() {
    return (
    <Container>
      <CheckWrapper>
        <CheckInput />
        <CheckLabel>No</CheckLabel>
        {/* <CheckInput onChange={checkHandler} id={id} />
        <CheckLabel for={}>{text}</CheckLabel> */}
      </CheckWrapper>
      {/* <SwitchText>{isChecked ? "Yes" : "No"}</SwitchText> */}
    </Container>
  )
  }
}


export default CheckBox
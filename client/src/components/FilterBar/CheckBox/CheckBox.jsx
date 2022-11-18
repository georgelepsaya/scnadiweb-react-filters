import React, { Component } from 'react';
import { CheckWrapper, CheckInput, CheckLabel, Container } from './styles';
import { updateParams } from '../../../features/set_filters/setFiltersSlice';
import withParams from '../../withParams';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  checkHandler() {
    const newParam = {};
    newParam[this.props.title.toLowerCase().replaceAll(' ', '_')] = !this.state.isChecked;
    this.props.setSearchParams({...this.props.setFilters.paramsObj, ...newParam});
    this.props.dispatch(updateParams(newParam));
    this.setState(prevState => {
      return {...prevState, isChecked: !prevState.isChecked};
    })
  }

  render() {
    const title = this.props.title.toLowerCase().replaceAll(' ', '_');
    return (
    <Container>
      <CheckWrapper>
          <CheckInput onClick={() => this.checkHandler()} checked={this.props.setFilters.paramsObj[title] ? true : false} />
          <CheckLabel>{this.props.setFilters.paramsObj[title] ? this.props.attr[1][0].value : this.props.attr[1][1].value}</CheckLabel>
      </CheckWrapper>
    </Container>
  )
  }
}


export default withParams(CheckBox, ["setFilters"], [])
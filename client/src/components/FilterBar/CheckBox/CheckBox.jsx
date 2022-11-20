import React, { Component } from 'react';
import { CheckWrapper, CheckInput, CheckLabel, Container } from './styles';
import { updateParams } from '../../../features/set_filters/setFiltersSlice';
import withParams from '../../withParams';
import { removeParam } from '../../../features/set_filters/setFiltersSlice';

class CheckBox extends Component {
  checkHandler() {
    const title = this.props.title.toLowerCase().replaceAll(' ', '_');
    // if (!this.props.setFilters.paramsObj[title]) {
    //   const newParam = {};
    //   newParam[this.props.title.toLowerCase().replaceAll(' ', '_')] = !this.state.isChecked;
    //   this.props.setSearchParams({...this.props.setFilters.paramsObj, ...newParam});
    //   this.props.dispatch(updateParams(newParam));
    //   this.setState(prevState => {
    //     return {...prevState, isChecked: !prevState.isChecked};
    //   })
    // }
    const value = this.props.attr.value;
    const paramsCheck = this.props.setFilters.paramsObj[title];
    if (!paramsCheck) {
      const newParam = {};
      newParam[title] = value;
      this.props.setSearchParams({ ...this.props.setFilters.paramsObj, ...newParam });
      this.props.dispatch(updateParams(newParam));
    } else if (paramsCheck && value === paramsCheck) {
      const delParams = { ...this.props.setFilters.paramsObj };
      this.props.dispatch(removeParam(title));
      delete delParams[title];
      this.props.setSearchParams(delParams);
    } else if (paramsCheck && value !== paramsCheck) {
      const newParam = {};
      let newVal = paramsCheck + value;
      if ((paramsCheck === "YesNo") || (paramsCheck === "NoYes")) {
        newVal = "YesNo".replace(value, "");
      }
      newParam[title] = newVal;
      this.props.setSearchParams({ ...this.props.setFilters.paramsObj, ...newParam });
      this.props.dispatch(updateParams(newParam));
    }
  }

  render() {
    const title = this.props.title.toLowerCase().replaceAll(' ', '_');
    console.log(this.props.setFilters.paramsObj[title]);
    return (
      <Container id={this.props.attr.value}>
      <CheckWrapper>
          <CheckInput onClick={() => this.checkHandler()} checked={(this.props.setFilters.paramsObj[title] === this.props.attr.value) || (this.props.setFilters.paramsObj[title] === "YesNo") || (this.props.setFilters.paramsObj[title] === "NoYes") ? true : false} />
          {/* <CheckInput onClick={() => this.checkHandler()} checked={this.props.setFilters.paramsObj[title] ? true : false} /> */}
          <CheckLabel>{this.props.attr.value}</CheckLabel>
      </CheckWrapper>
    </Container>
  )
  }
}


export default withParams(CheckBox, ["setFilters"], [])
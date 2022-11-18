import React, { Component } from 'react';
import arrow from "../../icons/arrow-down.svg";
import { AttributeSelect, AttributeOption, SelectFilter, SelectIcon, AttributeTitle, AttributeContainer } from './styles.js';
import { updateParams } from '../../features/set_filters/setFiltersSlice';
import withParams from '../withParams';

class AttributeFilterText extends Component {

  handleSelectAttr(e) {
    const updObj = {};
    updObj[this.props.title.toLowerCase().replaceAll(' ', '_')] = e.target.value;
    this.props.dispatch(updateParams(updObj));
    this.props.setSearchParams({ ...this.props.setFilters.paramsObj, ...updObj });
  }

  render() {
    return (
      <AttributeContainer key={this.props.key}>
        <AttributeTitle>{this.props.title}</AttributeTitle>
          <SelectFilter>
            <AttributeSelect onChange={(e) => this.handleSelectAttr(e)}>
              {
                this.props.attr[1].map(atr => {
                  return (
                    <AttributeOption key={atr.id}>{atr.displayValue}</AttributeOption>
                  )
                })
              }
          </AttributeSelect>
          <SelectIcon src={arrow} />
        </SelectFilter>
      </AttributeContainer>
    )
  }
}

export default withParams(AttributeFilterText, ["setFilters"], []);
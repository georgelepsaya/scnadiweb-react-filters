import React, { Component } from 'react';
import { FilterContainer, FilterTitle, SetFiltersContainer, AttributeTitle, AttributeContainer } from './styles.js';
import AttributeFilterText from './AttributeFilterText.jsx';
import AttributeFilterColor from "./AttributeFilterColor.jsx";
import AttributeFilterCheck from './AttributeFilterCheck.jsx';
import withParams from '../withParams.jsx';

class FilterBar extends Component {
  render() {
    // getting attributes from HOC
    const products = this.props.attributes.category.products;
    // adding them in a readable way in a new object
    const attributes = {};
    products.forEach(attrs => {
      attrs.attributes.forEach(attr => {
        attributes[attr.name] = [attr.type, attr.items];
      })
    });
    return (
      <FilterContainer>
        <FilterTitle>Filter Products</FilterTitle>
        <SetFiltersContainer>
          {
            Object.keys(attributes).map((key, i) => {
              const attr = attributes[key];
              if (attr[0] === "text" && attr[1][0].value !== "Yes") {
                return (
                  <AttributeFilterText updateParamsObj={this.updateParamsObj} key={i} title={key} attr={attr} />
                )
              } else if (attr[0] === "swatch") {
                return (
                  <AttributeFilterColor key={i} title={key} attr={attr}/>
                )
              } else if (attr[0] === "text" && attr[1][0].value === "Yes") {
                return (
                  <AttributeFilterCheck title={key} attr={attr} />
                )
              }
            })
          }
        </SetFiltersContainer>
      </FilterContainer>
    )
  }
}

export default withParams(FilterBar, [], ["attributes"]);
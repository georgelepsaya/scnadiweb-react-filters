import React, { Component } from 'react';
import { FilterContainer, FilterTitle, AttributeSelect, AttributeOption, SetFiltersContainer, SelectFilter, SelectIcon, AttributeTitle, AttributeContainer, ColorOption, ColorsPick } from './styles.js';
import CheckBox from './CheckBox/CheckBox.jsx';
import arrow from "../../icons/arrow-down.svg";
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
    for (const key in attributes) {
      console.log(key, attributes[key]);
    }
    console.log(products);
    return (
      <FilterContainer>
        <FilterTitle>Filter Products</FilterTitle>
        <SetFiltersContainer>
          {
            Object.keys(attributes).map((key, i) => {
              const attr = attributes[key];
              if (attr[0] === "text" && attr[1][0].value !== "Yes") {
                return (
                  <AttributeContainer key={i}>
                    <AttributeTitle>{key}</AttributeTitle>
                    <SelectFilter>
                      <AttributeSelect>
                      {
                        attr[1].map(atr => {
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
              } else if (attr[0] === "swatch") {
                return (
                  <AttributeContainer>
                    <AttributeTitle>{key}</AttributeTitle>
                    <ColorsPick>
                      {
                        attr[1].map(atr => {
                          return (
                            <ColorOption key={atr.id} bg={atr.value} isWhite={atr.displayValue === "White"} />
                          )
                        })
                      }
                    </ColorsPick>
                  </AttributeContainer>
                )
              } else if (attr[0] === "text" && attr[1][0].value === "Yes") {
                return (
                  <AttributeContainer>
                    <AttributeTitle>{key}</AttributeTitle>
                    <CheckBox/>
                  </AttributeContainer>
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
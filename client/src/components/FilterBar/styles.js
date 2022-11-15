import styled from "styled-components";

// Filter Bar Styles

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 20%;
  min-width: 350px;
  z-index: 2;
  background-color: #fff;
  box-shadow: 2px 2px 10px 1px rgba(100, 100, 100, 0.1);
`;

export const FilterTitle = styled.span`
  color: #000;
  font-size: 22px;
  font-weight: 600;
  margin-top: 20px;
`;

// Select Filter Styles

export const SelectFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(100, 100, 100, 0.4);
  width: 120px;
  cursor: pointer;
`;

export const AttributeSelect = styled.select`
  background-color: #fff;
  border: none;
  outline: none;
  padding: 10px;
  padding-left: 15px;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  cursor: pointer;
`;

export const AttributeOption = styled.option``;

export const SetFiltersContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const SelectIcon = styled.img`
  width: 14px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  pointer-events: none;
`;

export const AttributeTitle = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const AttributeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

export const ColorOption = styled.div`
  height: 25px;
  width: 25px;
  border: 1px solid #1d1f22;
  box-sizing: border-box;
  margin-right: 12px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  background-color: ${(props) => props.bg};
  border: none;

  ${(props) =>
    props.isWhite &&
    `
    border: 1px solid #1D1F22;
  `}

  &:last-of-type {
    margin-right: 0;
  }
`;

export const ColorsPick = styled.div`
  display: flex;
`;

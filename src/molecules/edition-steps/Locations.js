import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SelectLocation from "../SelectLocation";

const MainContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow-y: scroll;
`;

export default function Locations(props) {
  const handleChange = (index) => {
    const temp = [
      ...props.locations.slice(0, index),
      {
        ...props.locations[index],
        selected: !props.locations[index].selected,
      },
      ...props.locations.slice(index + 1, props.locations.length + 1),
    ];

    //Save on parent component
    if (props.handleChange) {
      props.handleChange(temp);
    }
  };

  return (
    <MainContainer>
      {props.locations.map((e, index) => (
        <SelectLocation
          key={index}
          source={e.source}
          name={e.name}
          address={e.address}
          selected={e.selected}
          id={e.id}
          handleChange={() => handleChange(index)}
        ></SelectLocation>
      ))}
    </MainContainer>
  );
}

Locations.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape(SelectLocation.propTypes)),
  locationsPreviouslySelected: PropTypes.arrayOf(
    PropTypes.shape(SelectLocation.propTypes)
  ),
  newLocations: PropTypes.arrayOf(PropTypes.shape(SelectLocation.propTypes)),
  handleChange: PropTypes.func.isRequired,
};

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SelectLocation from "../../SelectLocation";

const MainContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow-y: scroll;
`;

export default function Locations(props) {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const filtered = props.articleLocations?.oldLocations?.filter(
      (f) => !props.articleLocations?.removedLocations?.includes(f.id)
    );
    const currentSelected = [
      ...(props.articleLocations?.newLocations || []),
      ...(filtered?.map((e) => e.id) || []),
    ];
    setSelected(currentSelected);
  }, [props]);

  const changeSelected = (index, checked) => {
    props.handleChange &&
      props.handleChange({
        type: "changeLocations",
        value: props.locations[index].id,
        checked,
      });
  };

  return (
    <MainContainer>
      {props.locations.map((e, index) => {
        const isSelected = selected.find((f) => f === e.id) !== undefined;
        return (
          <SelectLocation
            key={index}
            source={e.source}
            name={e.name}
            address={e.address}
            selected={isSelected}
            id={e.id}
            handleChange={() => changeSelected(index, !isSelected)}
            isNew={props.articleLocations?.newLocations?.includes(e.id)}
            isRemoved={props.articleLocations?.removedLocations?.includes(e.id)}
          />
        );
      })}
    </MainContainer>
  );
}

Locations.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.shape(SelectLocation.propTypes)),
  articleLocations: PropTypes.arrayOf(
    PropTypes.shape(SelectLocation.propTypes)
  ),
  handleChange: PropTypes.func.isRequired,
};

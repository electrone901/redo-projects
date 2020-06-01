import React from 'react';

export const CampusList = (props) => {
  return (
    <ul>
      {props.campuses.map((campus) => {
        return <li>{campus.name}</li>;
      })}
    </ul>
  );
};

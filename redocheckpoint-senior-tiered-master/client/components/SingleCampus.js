import React from 'react';
import SingleStudent from './SingleStudent';

const SingleCampus = (props) => {
  const { students, campus } = props;
  return (
    <div>
      <h2>{campus.name}</h2>
      {students.map((student) => {
        return <SingleStudent student={student} />;
      })}
    </div>
  );
};

export default SingleCampus;

import React from 'react';
import { Link } from 'react-router-dom';

const Robot = (props) => {
  console.log('from props robot', props);
  const { robot, deleteProp, editProp, unassign } = props;

  const unassignBtn = (
    <div className="d-flex">
      <button
        // onClick={() => handleMarkComplete(robot.id)}
        type="button"
        className="btn btn-success mr-2"
      >
        Mark Complete
      </button>

      <button
        // onClick={() => handleUnassign(robot.id)}
        type="button"
        className="btn btn-primary"
      >
        Unassign
      </button>
    </div>
  );
  const deleteBtn = (
    <button // onClick={() => destroyRobot(robot.id)}
      className="btn btn-danger btn-sm custom-btn"
      type="button"
    >
      Delete
    </button>
  );
  const editBtn = (
    <button // onClick={() => destroyRobot(robot.id)}
      className="btn btn-success btn-sm custom-btn"
      type="button"
    >
      Edit
    </button>
  );

  let displayBtn;
  if (deleteProp) displayBtn = deleteBtn;
  else if (editProp) displayBtn = editBtn;
  else if (unassign) displayBtn = unassignBtn;

  return (
    <div className="col-6">
      <div className="card mb-3">
        <div className="d-flex">
          <div>
            <img src={robot.imageUrl} alt="" className="img-fluid" />
          </div>
          <div className="col-6">
            <Link className="mb-0" to={`/robots/${robot.id}`}>
              {robot.name}
            </Link>
            <p className="mb-0">
              {robot.projects.length ? robot.projects.length : 0} projects
            </p>
            <p className="mb-0">Type: {robot.fuelType}</p>
            <p className="mb-2">Level: {robot.fuelLevel}</p>
          </div>
        </div>

        <div className="relative-div">{displayBtn}</div>
      </div>
    </div>
  );
};

export default Robot;

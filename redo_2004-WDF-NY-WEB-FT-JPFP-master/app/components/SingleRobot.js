import React from 'react';
import { connect } from 'react-redux';
import { fetchRobot } from '../redux/singleRobot';
import Robot from './Robot';

class SingleRobot extends React.Component {
  componentDidMount() {
    console.log('what props', this.props);
    this.props.fetchRobot(1);
  }

  render() {
    const { robot } = this.props;

    return (
      <div className="container mt-5">
        <div className="align-center">
          {robot.projects ? (
            <Robot editProp="true" robot={robot} />
          ) : (
            <h2>Loading...</h2>
          )}
        </div>

        <div className="mt-5">
          <h4 className="text-center">Projects assigned to {robot.name}</h4>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return { robot: state.robot };
};

const mapDispatch = (dispatch) => {
  return {
    fetchRobot: (id) => dispatch(fetchRobot(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleRobot);

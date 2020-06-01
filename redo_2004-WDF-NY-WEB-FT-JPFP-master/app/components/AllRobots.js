import React from 'react';
import { connect } from 'react-redux';
import { fetchRobots } from '../redux/robots';
import Robot from './Robot';

// Notice that we're exporting the AllRobots component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllRobots extends React.Component {
  componentDidMount() {
    this.props.getRobots();
  }
  render() {
    const { robots } = this.props;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-6">
            <h3>All Robots</h3>
          </div>
          <div className="col-6">AddRobot</div>
        </div>

        <div className="mt-4">
          {robots.length ? (
            <div className="row">
              {robots.map((robot) => {
                return <Robot deleteProp="true" robot={robot} key={robot.id} />;
              })}
            </div>
          ) : (
            <h1>No Robots....</h1>
          )}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    robots: state.robots,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getRobots: () => dispatch(fetchRobots()),
  };
};

export default connect(mapState, mapDispatch)(AllRobots);

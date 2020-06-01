import React from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../redux/projects';

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: '',
    };
  }

  componentDidMount() {
    this.props.getProjects();
    // this.props.getProjects(this.state.selectValue);
  }
  render() {
    const { projects } = this.props;
    return projects.length ? (
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <p>{project.title}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    ) : (
      <h1>No Projects....</h1>
    );
  }
}

const mapState = (state) => {
  return {
    projects: state.projects,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getProjects: () => dispatch(fetchProjects()),
  };
};

export default connect(mapState, mapDispatch)(AllProjects);

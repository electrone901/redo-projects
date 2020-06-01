import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <br />
      <div className="jumbotron">
        <h1 className="display-4"> Welcome to StackBot!</h1>
        <p className="lead">
          StackBot is a Project Management tool: your robot employees are
          awaiting assignments!
        </p>
        <hr className="my-4" />
        <p className="lead">
          <Link to="/robots" className="btn btn-primary btn-lg">
            Get Started Today!
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Home;

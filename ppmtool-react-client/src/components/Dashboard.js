import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
//import the conector for provider
import { connect } from "react-redux";
//import the get projects reducer
import { getProjects } from "../actions/projectActions";
//import the properties
import PropTypes from "prop-types";

class Dashboard extends Component {
  //another lifecycle hook for when we mount the component
  //setting state here will trigger re rendering
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    //  <!-- Dashboard Component -->
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              {/*this is the CreateProjectButton.js constant */}
              <CreateProjectButton />
              <br />
              <hr />
              {/* route to the project item */}
              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//set the properties
Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};

//map it up to the project in index.js
const mapStateToProps = state => ({
  project: state.project
});

//connect to the store
export default connect(
  mapStateToProps,
  { getProjects }
)(Dashboard);

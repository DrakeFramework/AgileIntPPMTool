import React, { Component } from "react";
import ProjectItem from "./project/ProjectItem";
import CreateProjectButton from "./project/CreateProjectButton";
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
    //###### example #######
    // create a project object from props
    // const projectObject = {
    //   projectName: "ProjectName PROPS",
    //   projectIdentifier: "IDPRO",
    //   description: "Discription coming from props"
    // };
    // #####################

    //get the projects list from props and map it onto the dashboard component
    const projects = this.props.project.projects;

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
              {/*<ProjectItem />*/}
              {/* we want to pass props from dashboard to the project item so we can add them to state and display */}
              {/* pull project from props */}
              {/*<ProjectItem project={projectObject} />*/}
              {projects.map(project => (
                //add a key to the map using the actual database id
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//set the properties
Dashboard.propTypes = {
  //these allow us to map project state to properties (react -> redux)
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};

//map it up to the project in index.js
const mapStateToProps = state => ({
  //these allow us to map project properties to state (redux -> react)
  project: state.project
});

//connect to the store
export default connect(
  mapStateToProps,
  { getProjects }
)(Dashboard);

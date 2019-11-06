import React, { Component } from "react";
//import the get project action to fill out the data
import { getProject, createProject } from "../../actions/projectActions";
//get the proptypes package to handle props
import PropTypes from "prop-types";
//get connect from react redux so we can wire routes
import { connect } from "react-redux";
//get the classnames  package for form validation (error fields)
import classnames from "classnames";

//rcc tab to auto create and then separate out the export
//this component has to fetch and then route to update
class UpdateProject extends Component {
  // set the state
  //create constructor
  constructor() {
    super();
    this.state = {
      id: "",
      projectIdentifier: "",
      projectName: "",
      description: "",
      startDate: "",
      endDate: ""
    };
    //bind the event
    this.onChange = this.onChange.bind(this);
    //bind the submit
    this.onSubmit = this.onSubmit.bind(this);
  }

  //add life cycle hook for mounting the state
  componentWillReceiveProps(nextProps) {
    //create a const for the new props
    const {
      id,
      projectIdentifier,
      projectName,
      description,
      startDate,
      endDate
    } = nextProps.project;
    //set the current state to the new props
    this.setState({
      id,
      projectIdentifier,
      projectName,
      description,
      startDate,
      endDate
    });
  }

  //add the life cycle hook
  componentDidMount() {
    //extract the id from the params passed in through the "get" api call for fetch
    const { id } = this.props.match.params;
    //pass the id from fetch and the history into the getProject
    //now we can see our project object in the state (redux)
    this.props.getProject(id, this.props.history);
  }

  //on change event
  onChange(e) {
    //use the naming convention to wire it up
    this.setState({ [e.target.name]: e.target.value });
    //
  }
  //submit event
  onSubmit(e) {
    e.preventDefault();
    const updateProject = {
      id: this.state.id,
      projectIdentifier: this.state.projectIdentifier,
      projectName: this.state.projectName,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    //pass on to createproject function
    this.props.createProject(updateProject, this.props.history);
  }

  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Project form</h5>
              <hr />
              {/* bind  */}
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  {/* this is wired from state to value of the field for updating */}
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Project Name"
                    name="projectName"
                    value={this.state.projectName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    disabled
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                  />
                </div>
                {/*<!-- disabled for Edit Only!! remove "disabled" for the Create operation -->*/}
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Project Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange}
                  ></textarea>
                </div>
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="startDate"
                    value={this.state.startDate}
                    onChange={this.onChange}
                  />
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="endDate"
                    value={this.state.endDate}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add proptypes
UpdateProject.propTypes = {
  //get project function mapped to proptype
  getProject: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

//map the state to props
const mapStateToProps = state => ({
  project: state.project.project
});

//connect to getProject
export default connect(
  mapStateToProps,
  { getProject, createProject }
)(UpdateProject);

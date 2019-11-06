import React, { Component } from "react";
//import the get project action to fill out the data
import { getProject } from "../../actions/projectActions";
//get the proptypes package to handle props
import PropTypes from "prop-types";
//get connect from react redux so we can wire routes
import { connect } from "react-redux";
//get the classnames  package for form validation (error fields)
import classnames from "classnames";

//rcc tab to auto create and then separate out the export
//this component has to fetch and then route to update
class UpdateProject extends Component {
  //add the life cycle hook
  componentDidMount() {
    //extract the id from the params passed in through the "get" api call for fetch
    const { id } = this.props.match.params;
    //pass the id from fetch and the history into the getProject
    //now we can see our project object in the state (redux)
    this.props.getProject(id, this.props.history);
  }

  render() {
    return (
      <div className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">Update Project form</h5>
              <hr />
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    placeholder="Project Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    disabled
                  />
                </div>
                {/*<!-- disabled for Edit Only!! remove "disabled" for the Create operation -->*/}
                <div className="form-group">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Project Description"
                  ></textarea>
                </div>
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="start_date"
                  />
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control form-control-lg"
                    name="end_date"
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
  project: PropTypes.object.isRequired
};

//map the state to props
const mapStateToProps = state => ({
  project: state.project.project
});

//connect to getProject
export default connect(
  mapStateToProps,
  { getProject }
)(UpdateProject);

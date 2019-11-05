import React, { Component } from "react";
//the props are used to hold page information properties
//the router is what passes the props
import PropTypes from "prop-types";
//how we connect to the state
import { connect } from "react-redux";
//import the action component
import { createProject } from "../../actions/projectActions";
//import the new classnames for error handling
import classnames from "classnames";

class AddProject extends Component {
  //create a constructor so the component can set default values
  constructor() {
    //constructor of components must call super() so it has the Component constructor functionality
    super();

    //sets the initial state for the input fields to blanks  (match the back end json attributes passed between js and java)
    this.state = {
      projectIdentifier: "",
      projectName: "",
      description: "",
      startDate: "",
      endDate: "",
      errors: {}
    };

    //instead of binding it at every line do it int he constuctor
    this.onChange = this.onChange.bind(this);
    //onsubmit must be bound to the form
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   *  //~~~~~//life cycle hooks//~~~~~//
   * Called when the component may be receiving new props.
   * React may call this even if props have not changed,
   * so be sure to compare new and existing props if you only want to handle changes.
   * @param {*} nextProps
   */
  componentWillReceiveProps(nextProps) {
    //if the parameter has the errors property
    if (nextProps.errors) {
      //set the errors property to the current state
      this.setState({ errors: nextProps.errors });
    }
  }

  //page sending features

  /**
   * when values are set via initial state on change events are required
   * @param {event parm} e
   */
  onChange(e) {
    //single example this.setState({ projectName: e.target.value });
    //use generics so it doesn't need to be done every time
    this.setState({ [e.target.name]: e.target.value });
  }

  /**
   * on submit calls the rest service to get the json object
   * @param {event parm} e
   */
  onSubmit(e) {
    //we do not want the page to refresh which is default for submit
    e.preventDefault();

    //create a new project json object using the state (current) values
    //this object will be passed on to the server
    const newProject = {
      projectIdentifier: this.state.projectIdentifier,
      projectName: this.state.projectName,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };

    //pass the new json object and the history so we can route
    this.props.createProject(newProject, this.props.history);
  }
  render() {
    //on render set the errors constant to the state
    //accessible from erros.projectName etc
    const { errors } = this.state;

    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">
                  Create / Edit Project form
                </h5>
                <hr />
                {/* set up the on submit for the form and define above --remember to use "this." when binding the functions to this one*/}
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    {/*the value of name must match the name of the field in the DAO so it can marshal json */}
                    {/*check the state in the constructor to get initial value for a field */}
                    {/*on change events are bound with --> onChange={this.onChange.bind(this)}*/}
                    {/*use constructor for onchange*/}
                    {/*first surround the bootstrap classes with {( xxx )} */}
                    {/*this is cool because it can check for invalid and sets the browser field error */}
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.projectName
                      })}
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                    {/*add the bootstrap invalid feedback when the errors projectName is there*/}
                    {errors.projectName && (
                      <div className="invalid-feedback">
                        {errors.projectName}
                      </div>
                    )}
                  </div>
                  {/* idk why this was disabled */}
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.projectIdentifier
                      })}
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                    />
                    {/*add the bootstrap invalid feedback when the errors projectIdentifier is there*/}
                    {errors.projectIdentifier && (
                      <div className="invalid-feedback">
                        {errors.projectIdentifier}
                      </div>
                    )}
                  </div>
                  {/*<!-- disabled for Edit Only!! remove "disabled" for the Create operation -->*/}
                  <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.description
                      })}
                      placeholder="Project Description"
                      name="description"
                      onChange={this.onChange}
                      value={this.state.description}
                    ></textarea>
                    {/*add the bootstrap invalid feedback when the errors projectIdentifier is there*/}
                    {errors.description && (
                      <div className="invalid-feedback">
                        {errors.description}
                      </div>
                    )}
                  </div>
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.startDate
                      })}
                      name="startDate"
                      onChange={this.onChange}
                      value={this.state.startDate}
                    />
                    {/*add the bootstrap invalid feedback when the errors projectIdentifier is there*/}
                    {errors.startDate && (
                      <div className="invalid-feedback">{errors.startDate}</div>
                    )}
                  </div>
                  <h6>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.endDate
                      })}
                      className="form-control form-control-lg"
                      name="endDate"
                      value={this.state.endDate}
                      onChange={this.onChange}
                    />
                    {/*add the bootstrap invalid feedback when the errors projectIdentifier is there*/}
                    {errors.endDate && (
                      <div className="invalid-feedback">{errors.endDate}</div>
                    )}
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
      </div>
    );
  }
}

// //setup the prop types for the action
AddProject.propTypes = {
  //the create project function is a required function of the proptypes
  createProject: PropTypes.func.isRequired,
  //map the errors object to the props when addproject is going
  errors: PropTypes.object.isRequired
};

//create a map from the state in the class to the props in the reducer (reducer/index.js)
const mapStateToProps = state => ({
  errors: state.errors
});

//change the state to use the connector
//export default AddProject;
//
//this allows connecting to the state
//TODO replace null with parameters
//wire the action to the component
export default connect(
  //add this in
  mapStateToProps,
  { createProject }
)(AddProject);

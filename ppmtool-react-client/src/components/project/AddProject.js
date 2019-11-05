import React, { Component } from "react";

export default class AddProject extends Component {
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
      endDate: ""
    };

    //instead of binding it at every line do it int he constuctor
    this.onChange = this.onChange.bind(this);
    //onsubmit must be bound to the form
    this.onSubmit = this.onSubmit.bind(this);
  }

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

    //
  }
  render() {
    return (
      <div>
        {
          // check name attribute input fields
          // create constructor
          // set value on input fields
          // create onchange function //set onchange on each input field
          // bind on constructor
          // check state change in the react extension
        }
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
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.onChange}
                    />
                  </div>
                  {/* idk why this was disabled */}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                    />
                  </div>
                  {/*<!-- disabled for Edit Only!! remove "disabled" for the Create operation -->*/}
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Project Description"
                      name="description"
                      onChange={this.onChange}
                      value={this.state.description}
                    ></textarea>
                  </div>
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="startDate"
                      onChange={this.onChange}
                      value={this.state.startDate}
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
      </div>
    );
  }
}

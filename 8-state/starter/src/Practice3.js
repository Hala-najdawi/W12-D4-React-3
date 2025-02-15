import React from "react";

/* 
  1. Setup UserForm to accept props
  2. Display the proper values from props where needed
*/
const UserForm = (props) => (
  <p>
    <label htmlFor={props.label}>{props.label}</label>:
    <input id={props.id} type="text" onChange={props.onChange} />
  </p>
);

class Practice3 extends React.Component {
  state = {
    first: "First",
    last: "Last"
  };

  handleFirst = e => {
    this.setState({ first: e.target.value });
  };
  handleLast = e => {
    this.setState({ last: e.target.value });
  };
  /* 
    3. Create a handler function called handleLast    
    4. Have the function update last in state to e.target.value
  */

  render() {
    return (
      <>
        <h2>
          {this.state.first} {this.state.last}
        </h2>
        <UserForm  id = "firstName"
              label = {this.state.first}
              onChange = {this.handleFirst}/>
              <UserForm
              id = "lastName"
              label = {this.state.last}
              onChange = {this.handleLast} />
        {/*
          3. Call <UserForm /> and pass in the following prop values
              id = "firstName"
              label = "First Name"
              onChange = handleFirst
          4. Call <UserForm /> again and pass in the following prop values
              id = "lastName"
              label = "Last Name"
              onChange = handleLast              
        */}
      </>
    );
  }
}

export default Practice3;

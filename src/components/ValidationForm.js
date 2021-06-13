import React from "react";

const initialState = {
  name: "",
  email: "",
  contact: "",
  address: "",
  nameError: "",
  emailError: "",
  contactError: "",
  addressError: ""
};

class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let contactError = "";
    let emailError = "";
    

    let value=this.state.contact;
    if (value.length!==10) {
      contactError = "It should contain 10 digits";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || contactError) {
      this.setState({ emailError, contactError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form p-4 mb-2">
        <div>
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />          
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div>
          <input            
            name="contact"
            placeholder="contact"
            value={this.state.contact}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.contactError}
          </div>
        </div>
        <div>
          <input
            name="address"
            placeholder="address"
            value={this.state.address}
            onChange={this.handleChange}
          />          
        </div>
        </div>
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default ValiationForm;


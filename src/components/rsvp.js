import React from "react";

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.reloadForm = this.reloadForm.bind(this)    
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
    .then(() => this.setState({submitted: true}))
    .catch(error => alert(error));

    e.preventDefault();
  };

  reloadForm() {
      this.setState({submitted: false});
  }

  render(state) {
    if(this.state.submitted != true) {
        return (
            <form
                id="contact-form"
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >

                  <div className="form__row">
                      <input type="text" name="name" placeholder="Name *" required onChange={this.handleChange} />
                      <label htmlFor="name">Name</label>
                  </div>

                  <div className="form__row">
                      <select name="rsvp" required onChange={this.handleChange}>
                        <option value="" disabled selected>Select your option</option>
                        <option value="attending">Delightfully attending</option>
                        <option value="declining">Regretfully declining</option>
                      </select>
                  </div>

                  <div className="form__row">
                      <input name="bot-field" hidden />
                      <input className="button" type="submit" value="Send" />
                  </div>
              </form>
          );
    } else {
        return(
            <div className="contact-form__message">
                Message sent!
                <a onClick={this.reloadForm}>Send Another?</a>
            </div>
        );
    }
  }
}
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
                      <input type="text" name="names" placeholder="Names *" required onChange={this.handleChange} />
                      <label htmlFor="names">Names</label>
                  </div>

                  <div className="form__row">
                      <input type="email" name="email" placeholder="Email *" required onChange={this.handleChange} />
                      <label htmlFor="email">Email</label>
                  </div>

                  <div className="form__row">
                    <div className="rsvp" required onChange={this.handleChange}>
                      <input type="radio"
                      name="rsvp" value="Attending" />
                      <label htmlFor="rsvp1">Delightfully attending</label>

                      <input type="radio" 
                      name="rsvp" value="Declining" />
                      <label htmlFor="rsvp2">Regretfully declining</label>
                    </div>
                  </div>

                  <div className="form__row">
                      <select name="adults" required onChange={this.handleChange}>
                        <option value="" disabled selected>Number of adults</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                      </select>
                  </div>

                  <div className="form__row">
                      <select name="children" required onChange={this.handleChange}>
                        <option value="" disabled selected>Number of children</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">hree</option>
                      </select>
                  </div>

                  <div className="form__row">
                      <input name="bot-field" hidden />
                      <input className="button" type="submit" value="RSVP" />
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
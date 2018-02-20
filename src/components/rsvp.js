import React from "react";
import styled from 'styled-components';
import styles from '../config/styles.js';

const Form = styled.form`
    width: 100%;
    max-width: 60rem;
    box-sizing: border-box;
    padding: 2rem;
`

const Row = styled.div`
    display: flex;

    margin-bottom: 2rem;

    &:last-child {
        margin-bottom: 0;
    }

    > * {
        flex: 1;
        margin-right: 2rem;

        &:last-child {
            margin-right: 0;
        }
    }
`

const Field = styled.div`
    display: flex;
    flex-direction: column;
    height: 3rem;

    input {
        font-family: ${styles.sansSerif};
        padding: .5rem;
        border: 2px solid transparent;
        border-radius: 0;
        -webkit-appearence: none;
        transition: .2s;
        flex: 1;
        order: 1;

        &:focus {
            outline: none;
            border: 2px solid $color-gray;
            margin: 0;

            &::-webkit-input-placeholder {
                transition: .2;
                color: transparent;
            }
            &::-moz-placeholder {
                transition: .2s;
                color: transparent;
            }
            + label {
                max-height: 2rem;
            }
        }
    }

    label {
        max-height: 0;
        font-weight: bold;
        overflow: hidden;
        font-size: .6em;
        padding-left: 0.5rem;
        flex: 1;
        order: 2;
        display: flex;
        align-items: center;
        transition: .2s;
    }
`

const Radio = styled.div`
    flex: 2;
    div {
        display: flex;
        align-items: center;

        input {
            margin-right: 1rem;
        }

        label {
            font-family: ${styles.sansSerif};
            font-size: 1.25rem;
            margin-right: 2rem;

            &:last-child {
                margin-right: 0;
            }
        }
    }
`

const Dropdown = styled.div`
    select {
        height: 3rem;
        width: 100%;
        border-radius: 0;
        border: none;
        background-color: white;    
    }
`

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class RSVP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};  
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

  render(state) {
    if(this.state.submitted != true) {
        return (
            <Form
                id="contact-form"
                name="RSVP"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
            >

                <Row>
                    <Field>
                        <input type="text" name="names" placeholder="Names *" required onChange={this.handleChange} />
                        <label htmlFor="names">Names</label>                                            
                    </Field>

                    <Field>
                        <input type="email" name="email" placeholder="Email *" required onChange={this.handleChange} />
                        <label htmlFor="email">Email</label>                                            
                    </Field>
                </Row>

                <Row>
                    <Radio>
                        <div className="rsvp" required onChange={this.handleChange}>
                            <input type="radio"
                            name="rsvp" value="Attending" />
                            <label htmlFor="rsvp1">Delightfully<br/>attending</label>

                            <input type="radio" 
                            name="rsvp" value="Declining" />
                            <label htmlFor="rsvp2">Regretfully<br/>declining</label>
                        </div>
                    </Radio>

                    <Dropdown>
                        <select name="adults" required onChange={this.handleChange}>
                            <option value="" disabled selected>Number of adults</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                        </select>
                    </Dropdown>

                    <Dropdown>
                        <select name="children" required onChange={this.handleChange}>
                            <option value="" disabled selected>Number of children</option>
                            <option value="0">None</option>                        
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </Dropdown>
                </Row>

                <Row>
                    <Field>
                        <input name="bot-field" hidden />
                        <input className="button" type="submit" value="RSVP" />
                    </Field>
                </Row>

              </Form>
          );
    } else {
        return(
            <div className="contact-form__message">
                Thank you! We will let you know by email if any detail change.
            </div>
        );
    }
  }
}
import React from "react";
import styled from 'styled-components';
import styles from '../config/styles.js';
import { CSSTransitionGroup } from 'react-transition-group'

const Form = styled.form`
    width: 100%;
    max-width: 60rem;
    box-sizing: border-box;
    padding: 2rem;
    margin: 0 auto;
`

const Row = styled.div`
    display: flex;

    margin-bottom: 2rem;

    @media (max-width: ${styles.bigBreak}) {
        display: block;
    }

    &:last-child {
        margin-bottom: 0;
    }

    > * {
        flex: 1;
        margin-right: 2rem;

        @media (max-width: ${styles.bigBreak}) {
            margin-right: 0;
        }

        &:last-child {
            margin-right: 0;
        }
    }
`

const Field = styled.div`
    display: flex;
    flex-direction: column;
    height: 3rem;

    @media (max-width: ${styles.bigBreak}) {
        margin-bottom: 2rem;
    }

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
        font-size: .5em;
        padding-left: 0.5rem;
        flex: 1;
        order: 2;
        display: flex;
        align-items: center;
        transition: .2s;
        background: ${styles.black};
        color: white;
        font-family: ${styles.sansSerif};
    }
`

const Radio = styled.div`
    div {
        display: flex;
        align-items: center;
        height: 100%;

        input {
            margin-right: 1rem;
        }

        label {
            font-family: ${styles.serif};
            font-size: 1.25rem;
            margin-right: 2rem;
            display: inline-flex;
            align-items: center;

            &:last-child {
                margin-right: 0;
            }

            span {
                display: inline-block;
                font-size: 1em;
            }

            @media (max-width: ${styles.smallBreak}) {
                display: block;
                margin-right: 0;
                margin-bottom: 2rem;

                &:last-child {
                    margin-right: 0;
                    margin-bottom: 0;                
                }
            }
        }
    }

    @media (max-width: ${styles.bigBreak}) {
        div {
            display: block;
            text-align: center;
            margin-bottom: 2rem;
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

    @media (max-width: ${styles.bigBreak}) {
        margin-bottom: 2rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const Button = styled.button`
    font-family: ${styles.serif};
    font-size: .75em;
    background: white;
    padding: .33em;
    border: .05em solid ${styles.black};
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: .125em;
    width: 75%;
    margin: 0 auto;

    &:before, &:after {
        content: '';
        display: block;
        flex: 1;
        height: 1.5em;
        background-size: 22.5%;
        background-repeat: no-repeat;
        transition: .2s;
    }

    &:before {
        margin-right: .25em;
        background-image: url('../images/fern1.png');
        background-position: right;
    }

    &:after {
        margin-left: .25em;
        background-image: url('../images/fern2.png');
        background-position: left;
    }

    &:hover, &:focus {
        cursor: pointer;

        &:before, &:after {
            background-size: 25%;
        }
    }
`

const ThankYou = styled.div`
    font-family: ${styles.serif};
    padding: 2rem;
    text-align: center;
    font-size: 1.5em;
`

const Fade = ({ children }) => (
    <CSSTransitionGroup
      transitionName='fade'
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={500}
      >
      { children }
    </CSSTransitionGroup>
  )


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
                            
                            <label htmlFor="rsvp1">
                                <input type="radio" name="rsvp" value="Attending" />
                                <span>Delightfully attending</span>
                            </label>

                            <label htmlFor="rsvp2">
                                <input type="radio" name="rsvp" value="Declining" />
                                <span>Regretfully declining</span>
                            </label>
                        </div>
                    </Radio>

                    <Row>
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
                </Row>

                <Row>
                    <Field>
                        <input name="bot-field" hidden />
                        <Button type="submit" form="contact-form" value="RSVP">
                            <span>RSVP</span>
                        </Button>
                    </Field>
                </Row>

              </Form>
          );
    } else {
        return(
            <ThankYou>
                Thank you! We will let you know by email if any detail change.
            </ThankYou>
        );
    }
  }
}
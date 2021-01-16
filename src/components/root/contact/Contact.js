import React, { Fragment, useState } from 'react';
import './contact.css'
import { Link, useHistory } from "react-router-dom";

const MyFormSubElement = (props) => {
    const [formElement, setFormElement] = useState("");
    const [formElementError, setFormElementError] = useState(false);
    React.useEffect(() => {
      if (formElement === "") {
        return;
      }
  
      if (formElement.match(props.regex_logic)) {
        setFormElementError(false);
      } else {
        setFormElementError(true);
      }
    }, [formElement]);
  
    return (<div>

        <div className="child-container">
        <label className="child-label" for={props.name}>
          {props.children}
        </label>
        <input
          className="child-input"
          value={formElement}
          onChange={(e) => {
            setFormElement(e.target.value);
          }}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
        />
            {formElementError === true ? (
            <span style={{ color: "red" }}>{props.regexErrorMessage}</span>
          ) : (
            " "
          )}
        </div>

      </div>
    );
  };
  
  class MyRegisterForm extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
          <Fragment>
        <div className="contact">
        
                <h1>Contact Us</h1>
                <label className="child-label"><h4>First Name</h4></label>
              <MyFormSubElement
                name="name-field"
                type="text"
                placeholder="Enter your name"
                regex_logic={/^[a-zA-Z]+$/}
                regexErrorMessage="It must only contain letters"
              >
              </MyFormSubElement>
              <h4>LastName</h4>
              <MyFormSubElement
                name="lastname"
                type="text"
                placeholder="Enter your lastname"
                regex_logic={/^[a-zA-Z]+$/}
                regexErrorMessage="It must only contain letters"
              >
              </MyFormSubElement>
              <h4>E-mail</h4>
              <MyFormSubElement
                name="email"
                type="email"
                placeholder="Enter your e-mail"
                regex_logic={
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                }
                regexErrorMessage="Please provide a valid email address"
              >
              </MyFormSubElement>
              <h4>Mobile</h4>
              <MyFormSubElement
                name="mobile"
                type="text"
                placeholder="example: +995 555 23 23 23"
                regex_logic={/^[0-9]*$/}
                regexErrorMessage="It must only contain digits"
              >
              </MyFormSubElement>
            
              <br />
              <label className="child-label"><h2>Subject</h2></label>
                    <input className="child-input" id="subject" name="subject" placeholder="Enter your subject" required="required" />

                    <label className="child-label"><h2>Message</h2></label>
                    <textarea className="message" id="message" name="message" rows="4" cols="50" placeholder="Enter your message" required="required" />
                    <button className="submit-button">Submit</button>
                    <br/>
              <div style={{ textAlign: "center" }}>
               
              </div>
            </div>
    
          </Fragment>
      );
    }
  }

  export default MyRegisterForm;
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import { FormattedMessage } from 'react-intl';

const Login = (props) => {


  const [emailProvided, setEmailProvided] = useState(false);
  const [email, setEmail] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const navigate = useNavigate();

  const intl = useIntl();
  const LG_email_placeholder = intl.formatMessage({ id: "LG-email-placeholder" });
  const LG_password_placeholder = intl.formatMessage({ id: "LG-password-placeholder" });
  const LG_notvalid_email = intl.formatMessage({ id: "LG-Notvalid-email" });
  const LG_password_show = intl.formatMessage({ id: "LG-password-show" });

  const isValidEmail = (name) => {
    return /\S+@\S+\.\S+/.test(name);
  }

  const handleInputEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handleInputPasswrdChange = () => {

  };

  const handleSiguienteEmail = () => {
    if(inputEmail !== "" && isValidEmail(inputEmail)) {
        setEmail(inputEmail);
        setEmailProvided(true);
    } else {
        alert(LG_notvalid_email)
    }
  };

  const handleSiguientePasswrd = () => {
    navigate("/parts");
  };

  return (
    <div>
      {!emailProvided && (
        <Col>
          <Row>
            <h1><FormattedMessage id="LG-Title"/>
            </h1>
          </Row>
          <Row>
            <h3><FormattedMessage id="LG-Subtitle"/></h3>
          </Row>
          <Row>
            <input
              type="text"
              id="email"
              placeholder={LG_email_placeholder}
              className="USR-inputBox"
              onChange={(event) => handleInputEmailChange(event)}
            ></input>
          </Row>
          <Row>
            <Link to="/signup" className="USR-signUp">
              <h3><FormattedMessage id="LG-Notauser"/></h3>
            </Link>
          </Row>
          <Row>
            <Col>
              <Link to="/signup" className="USR-signUp">
                <h3><FormattedMessage id="LG-Signup"/></h3>
              </Link>
            </Col>
            <Col>
              <Button variant="primary" onClick={handleSiguienteEmail}><FormattedMessage id="LG-Button"/></Button>
            </Col>
          </Row>
        </Col>
      )}
      {emailProvided && (
        <Col>
          <Row>
            <h1>{email}</h1>
          </Row>
          <Row>
            <input
              type="text"
              id="Password"
              placeholder={LG_password_placeholder}
              className="USR-inputBox"
              onChange={(event) => handleInputPasswrdChange(event)}
            ></input>
          </Row>
          <Row>
          <Form.Check  type="checkbox" id="checkbox" label={LG_password_show} />
          </Row>
          <Row>
            <Col>
              <Button variant="primary" onClick={handleSiguientePasswrd}><FormattedMessage id="LG-Button"/></Button>
            </Col>
          </Row>
        </Col>
      )}
    </div>
  );
};

export default Login;

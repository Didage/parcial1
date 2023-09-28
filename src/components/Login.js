import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = (props) => {


  const [emailProvided, setEmailProvided] = useState(false);
  const [email, setEmail] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const navigate = useNavigate();

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
        alert("Formato no válido de email.")
    }
  };

  const handleSiguientePasswrd = () => {
    navigate("/home");
  };

  return (
    <div>
      {!emailProvided && (
        <Col>
          <Row>
            <h1>Acceder</h1>
          </Row>
          <Row>
            <h3>Usa tu cuenta de UniAlpes</h3>
          </Row>
          <Row>
            <input
              type="text"
              id="email"
              placeholder="Correo electrónico"
              className="USR-inputBox"
              onChange={(event) => handleInputEmailChange(event)}
            ></input>
          </Row>
          <Row>
            <Link to="/signup" className="USR-signUp">
              <h3>¿No eres usuario? Crea un perfil ahora</h3>
            </Link>
          </Row>
          <Row>
            <Col>
              <Link to="/signup" className="USR-signUp">
                <h3>Crear perfil</h3>
              </Link>
            </Col>
            <Col>
              <Button variant="primary" onClick={handleSiguienteEmail}>Siguiente</Button>
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
              placeholder="Ingresa tu contraseña"
              className="USR-inputBox"
              onChange={(event) => handleInputPasswrdChange(event)}
            ></input>
          </Row>
          <Row>
          <Form.Check  type="checkbox" id="checkbox" label="Mostrar contraseña" />
          </Row>
          <Row>
            <Col>
              <Button variant="primary" onClick={handleSiguientePasswrd}>Siguiente</Button>
            </Col>
          </Row>
        </Col>
      )}
    </div>
  );
};

export default Login;

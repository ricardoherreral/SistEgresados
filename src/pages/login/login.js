import React, { useState } from "react";
import "./login.css";

import Title from "./components/title/title";
//import Label from "./components/label/label";
import Input from "./components/input/input";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  function handleChange(name, value) {
    if (name === "usuario") {
      //GUARDAR EN VARIABLE O BASE DE DATOS
      //HACE FALTA LA VARIABLE DONDE GUARDAR
      //HOOKS
      setUser(value);
    } else {
      setPassword(value);
      //Validacion de password mayor a 6 digitos
      if (value.length < 6) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setPassword(value);
      }
    }
  }
  // console.log('usuario: ', user); //Recibe cada cambio
  // console.log('password: ', password);

  function handleSubmit() {
    let account = { user, password };
    if (account) {
      console.log("account", account);
      //Hacer el select con la base de datos.
      ifMatch(account);
    }
  }

  function ifMatch(param) {
    //Hacer conexion y select en la base de datos
  }

  return (
    <div>
      <Title text="Sistema de Egresados" />
      <div className="center">
        <div className="login-container">
          <Input
            attribute={{
              id: "usuario",
              name: "usuario",
              type: "text",
              placeholder: "Usuario",
            }}
            handleChange={handleChange}
          />
          <Input
            attribute={{
              id: "contra",
              name: "contra",
              type: "password",
              placeholder: "Contraseña",
            }}
            handleChange={handleChange}
            param={passwordError}
          />

          {passwordError && (
            <label className="label-error">
              Usuario o contraseña incorrectos.
            </label>
          )}
          <br></br>
          <button className="btnStyle" onClick={handleSubmit}>
            Iniciar Sesión
          </button>


          <button className="btnStyle">Registrate</button>
        </div>
      </div>
    </div>
  );
};
export default Login;

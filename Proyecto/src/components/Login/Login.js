import React, { Component } from 'react'
import './Login.css';
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
}
from 'mdb-react-ui-kit';

class Login extends Component {
    state = {  } 
    render() { 
        return (
            <MDBContainer className='registro'>
                <MDBInput wrapperClass='textito' label='Usuario' id='form1' type='email'/>
                <MDBInput wrapperClass='textito' label='Contraseña' id='form2' type='password'/>
                <MDBBtn className="boton-ingreso">Iniciar Sesion</MDBBtn>
                <div className="boton-ingreso">
                    <p>¿No eres un miembro?<a href="#!">Registrate</a></p>
                </div>
            </MDBContainer>
        );
    }
}
export default Login;


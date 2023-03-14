import axios from "axios";
import swAlert from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const history = useNavigate();

  console.log(history)

  const submitHandler = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    console.log(emailRegex.test(email))
    
    
    if(email === "" || password === ""){
      
      swAlert(<h2>Los campos no pueden estar vacios</h2>)
        return;
    }

    if(email !== "" && !emailRegex.test(email)){
        swAlert(<h2>Se necesita un formato de correo valido</h2>)
        return;
    }

    if(email !== "challenge@alkemy.org" || password !== "react"){
        swAlert(<h2>Credenciales Invalidas</h2>)
        return;
    }

    console.log("Todo ok!");
    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then(res => {
        swAlert(<h2>Perfecto, ingresaste correctamente</h2>);
        const tokenRecibido = res.data.token;
        localStorage.setItem('token', tokenRecibido);
        history('/listado')
      })
   }

  return (
    <>
    <h2>Formulario</h2>
    <form onSubmit={submitHandler}>
        <label>
          <span>Correo Electronico:</span><br/>
          <input type="text" name='email'/>
        </label>
        <br/>
        <label>
          <span>Contraseña:</span><br/>
          <input type="password" name='password'/>
        </label>
        <br/>
        <button type="submit">Ingresar</button>
    </form>
    </>
  )
}

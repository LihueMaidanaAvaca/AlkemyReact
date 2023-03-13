import axios from "axios";
import swAlert from '@sweetalert/with-react'

export default function Login() {

   swAlert(
     <h2>This will work!</h2>
   )

   const submitHandler = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log(emailRegex.test(email))


    if(email === "" || password === ""){
        console.log("Los campos no pueden estar vacios")
        return;
    }

    if(email !== "" && !emailRegex.test(email)){
        console.log("Se necesita un formato de correo valido")
        return;
    }

    if(email !== "challenge@alkemy.org" || password !== "react"){
        console.log("Se necesita un formato de correo valido")
        return;
    }

    console.log("Todo ok!");
    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then(res => {
        console.log(res.data)
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

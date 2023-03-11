import React from 'react'

export default function Login() {

   const submitHandler = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if(email === "" || password === ""){
        console.log("Los campos no pueden estar vacios")
    }
   }

  return (
    <>
    <h2>Formulario</h2>
    <form onSubmit={submitHandler}>
        <label>
          <span>Correo Electronico:</span><br/>
          <input type="email" name='email'/>
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

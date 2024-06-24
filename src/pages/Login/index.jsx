import { useState } from "react";

import http from "../../services/api";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";
import arrowImg from "../../assets/arrow.svg";
import logoImg from "../../assets/logo.png";
import { auth } from "../../services/firebaseConfig";
import "./styles.css";
import { toast, ToastContainer } from 'react-toastify';

export function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  const navigaToListagem=()=>{
    navigate('/Listagem');
  }
  
  async function submit(e){
    e.preventDefault();
    
    console.log(email)
    console.log(password)
    try{
      const csrf = await http.get('/sanctum/csrf-cookie');

      const login= await http.post('/api/v1/login',{
        email:email,
        password:password
      })
      
      if(login.status===200){
        localStorage.setItem('authToken', login.data.data.access_token);
        localStorage.setItem('paroquia_id', login.data.data.paroquia_id);

        navigaToListagem();
      }
    }
    catch(error){
      console.log(error)
      toast.error(error.response.data.message);
    }
  }


  if (loading) {
    return <p>carregando...</p>;
  }
  if (user) {
    return console.log(user);
  }
  return (
    <div className="container">
       <ToastContainer />
      <header className="header">
        <img src={logoImg} alt="Workflow" className="logoImg" />
        <span>Por favor digite suas informações de login</span>
      </header>

      <form>
        <div className="inputContainer">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputContainer">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********************"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        <button className="button" onClick={submit}>
          Entrar <img src={arrowImg} alt="->" />
        </button>
      </form>
    </div>
  );
}

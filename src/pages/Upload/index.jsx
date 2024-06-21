import React, { useState } from 'react';
import Logo from "../../img/logo.png"
import Perfil from "../../img/p2.png"
import './style.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { Link } from 'react-router-dom';
import http from '../../services/api';

function Upload() {

 

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }


  return (
    <div className='upload'>
        <div className="container-fluid">
        <ToastContainer />

        <nav className="navbar">
        <div className="logo">
            <img src={Logo} alt="Certidões Católicas" />
        </div>
        </nav>
        <div className="row justify-content-center">
            <div className="col-md-8">
            <div className="card mt-4 " >
                <div className="card-header">
                <h3>Certidão de Batismo</h3>
                </div>
                <div className="card-body" >
                <form >
                    <input type="file" onChange={handleChange}/>
                  <div className="upload-container">
                    <div className="wrapper">
                      <a href="" className='link-certidao'><span>Enviar Certidão</span></a>
                    </div>
                  </div>
                  </form>
                </div>

                <div className="card-header">
              <a href="/Listagem"><span>Voltar</span></a>
            </div>

            </div>
            </div>
        </div>
        </div>
    </div>

  );
}
export default Upload;
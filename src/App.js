import React, { useState } from 'react';
import Logo from "./img/logo.png"
import Perfil from "./img/p2.png"
import axios from 'axios';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

function Formulario() {
  const [nome_completo, setnome_completo] = useState('');
  const [nome_mae, setnome_mae] = useState('');
  const [email, setemail] = useState('');
  const [data_nascimento, setdata_nascimento] = useState('');
  const [data_batismo, setdata_batismo] = useState('');
  const [finalidade, setfinalidade] = useState('');

  
  const [mensagem, setMensagem]=useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try{
        const response = await axios.post('https://api.certidaocatolica.com.br/api/v1/pedido/store',{
          nome_completo: nome_completo,
          nome_mae: nome_mae,
          email: email,
          data_nascimento: data_nascimento,
          data_batismo: data_batismo,
          finalidade: finalidade,
          diocese_id:null,
          cidade_id:null,
          paroquia_id:null
      });

      if (response.status === 200) {
        setMensagem(response.data.message);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }

    }catch(error){
      console.error('Erro:', error);
      toast.error('Erro ao fazer a solicitação');
    }

  
  };

  return (
    <div className="container-fluid">
      <ToastContainer />

      <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Certidões Católicas" />
      </div>
      <div className="user-actions">
        <img src={Perfil} alt="Acesso Restrito"  />
      </div>
    </nav>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mt-4">
            <div className="card-header">
              <h3>Certidão de Batismo</h3>
            </div>
            <div className="card-body">
              <form >
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-6">
                      <label htmlFor="nomeCompleto" className="form-label">Nome Completo</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nome_completo"
                        value={nome_completo}
                        onChange={(e) => setnome_completo(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="nome_mae" className="form-label">Nome da mãe</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nome_mae"
                        value={nome_mae}
                        onChange={(e) => setnome_mae(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="data_batismo" className="form-label">Data do Batismo</label>
                      <input
                        type="date"
                        className="form-control"
                        id="data_batismo"
                        value={data_batismo}
                        onChange={(e) => setdata_batismo(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">E-mail</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="finalidade" className="form-label">Finalidade</label>
                      <select className="form-select" id="finalidade" value={finalidade} onChange={(e) => setfinalidade(e.target.value)}>
                        <option value="1">Batismo</option>
                      </select>
                      
                    </div>
                    <div className="mb-3">
                      <label htmlFor="data_nascimento" className="form-label">Data de Nascimento</label>
                      <input
                        type="date"
                        className="form-control"
                        id="data_nascimento"
                        value={data_nascimento}
                        onChange={(e) => setdata_nascimento(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div class="container">
                <div class="wrapper">
                  <a href="#" onClick={handleSubmit}><span>Solicitar</span></a>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Formulario;
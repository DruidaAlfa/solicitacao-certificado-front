import React, { useState } from 'react';
import Logo from "./img/logo.png"
import Perfil from "./img/p2.png"

function Formulario() {
  const [nome_completo, setnome_completo] = useState('');
  const [nome_mae, setnome_mae] = useState('');
  const [email, setemail] = useState('');
  const [data_nascimento, setdata_nascimento] = useState('');
  const [data_batismo, setdata_batismo] = useState('');
  const [finalidade, setfinalidade] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Processar os dados do formulário
    console.log('Nome completo:', nome_completo);
    console.log('Data de nascimento:', nome_mae);
    console.log('E-mail:', email);
    console.log('data_nascimento:', data_nascimento);
    console.log('data_batismo:', data_batismo);
    console.log('finalidade:', finalidade);
  
  };

  return (
    <div className="container-fluid">
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
              <form onSubmit={handleSubmit}>
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
                  <a href="#"><span>Solicitar</span></a>
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
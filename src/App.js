import React, { useState } from 'react';

function Formulario() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [naturalidade, setNaturalidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [sexo, setSexo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Processar os dados do formulário
    console.log('Nome completo:', nomeCompleto);
    console.log('Data de nascimento:', dataNascimento);
    console.log('Celular:', celular);
    console.log('E-mail:', email);
    console.log('Naturalidade:', naturalidade);
    console.log('Telefone:', telefone);
    console.log('Endereço:', endereco);
    console.log('Cidade:', cidade);
    console.log('Sexo:', sexo);
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Certidões Catolicas - Formulário</a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Ajuda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Quem Somos</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mt-4">
            <div className="card-header">
              <h3>Formulário</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="nomeCompleto" className="form-label">Nome Completo</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nomeCompleto"
                        value={nomeCompleto}
                        onChange={(e) => setNomeCompleto(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                      <input
                        type="date"
                        className="form-control"
                        id="dataNascimento"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="celular" className="form-label">Celular</label>
                      <input
                        type="text"
                        className="form-control"
                        id="celular"
                        value={celular}
                        onChange={(e) => setCelular(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="endereco" className="form-label">Endereço</label>
                      <input
                        type="text"
                        className="form-control"
                        id="endereco"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
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
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="naturalidade" className="form-label">Naturalidade</label>
                      <input
                        type="text"
                        className="form-control"
                        id="naturalidade"
                        value={naturalidade}
                        onChange={(e) => setNaturalidade(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="telefone" className="form-label">Telefone</label>
                      <input
                        type="text"
                        className="form-control"
                        id="telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="cidade" className="form-label">Cidade</label>
                      <input
                        type="text"
                        className="form-controlform-control"
                        id="cidade"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="sexo" className="form-label">Sexo</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sexo"
                      id="masculino"
                      value="masculino"
                      checked={sexo === 'masculino'}
                      onChange={(e) => setSexo(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="masculino">
                      Masculino
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sexo"
                      id="feminino"
                      value="feminino"
                      checked={sexo === 'feminino'}
                      onChange={(e) => setSexo(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="feminino">
                      Feminino
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sexo"
                      id="outro"
                      value="outro"
                      checked={sexo === 'outro'}
                      onChange={(e) => setSexo(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="outro">
                      Outro
                    </label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Formulario;
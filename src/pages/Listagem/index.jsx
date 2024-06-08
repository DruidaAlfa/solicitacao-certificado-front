import React, { useState } from 'react';
import Logo from "../../img/logo.png"
import Perfil from "../../img/p2.png"
import './style.css'

function Listagem() {
 
  return (
    <div className='listagem'>
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
            <div className="col-md-12">
            <div className="card mt-4">
                <div className="card-header">
                <h3>Solicitações</h3>
                </div>
                <div className="card-body">
                <div class="style-tabela">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                
                    <tbody>
                    
                        <tr>
                        <td class="top center"><i class="icofont-users-alt-4"></i>Id</td>
                        <td class="top center"><strong>Nome Completo</strong></td>
                        <td class="top center"><strong>Nome da mãe</strong></td>
                        <td class="top center"><strong>E-mail</strong></td>
                        <td class="top center"><strong>Data de Nasc.</strong></td>
                        <td class="top center"><strong>Data de Batismo</strong></td>
                        <td class="top center"><strong>Finalidade</strong></td>
                        <td class="top center"><strong>Status</strong></td>
                        <td class="top center"><strong>Diocese</strong></td>
                        <td class="top center"><strong>Cidade</strong></td>
                        <td class="top center"><strong>Paróquia</strong></td>
                        <td class="top center" colspan="2" width="1"><strong>Ações</strong></td>
                        </tr>
                    
                    </tbody>

                    <tbody>
            
                        <tr> 

                            <td align="center">1</td>
                            <td align="center">Rafael Igor</td>
                            <td align="center">Debora</td>
                            <td align="center">rafaeligor.gui@gmail.com</td>
                            <td align="center">25/04/2021</td>
                            <td align="center">21/06/2028</td>
                            <td align="center">Batismo</td>
                            <td align="center">Pendente</td>
                            <td align="center">Januária</td>
                            <td align="center">Minas Gerais</td>
                            <td align="center">Santo Deus</td>
                            <td align="center"> <a href="#" class="editar fa fa-fa fa-check-circle" title="Editar">Aprovar</a>  </td>
                            <td align="center"> <a href="#" class="deletar fa fa-times-circle" title="Deletar">Recusar</a>  </td>
                    
                        </tr>

                        <tr> 

                            <td align="center">2</td>
                            <td align="center">Ricardo Magalhães</td>
                            <td align="center">Fernanda</td>
                            <td align="center">ricardao@gmail.com</td>
                            <td align="center">01/12/1500</td>
                            <td align="center">22/10/2024</td>
                            <td align="center">Batismo</td>
                            <td align="center">Pendente</td>
                            <td align="center">Roseiral</td>
                            <td align="center">São Paulo</td>
                            <td align="center">Milagres</td>
                            <td align="center"> <a href="#" class="editar fa fa-fa fa-check-circle" title="Editar">Aprovar</a>  </td>
                            <td align="center"> <a href="#" class="deletar fa fa-times-circle" title="Deletar">Recusar</a>  </td>
                    
                        </tr>

                    
                    </tbody>

                </table>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    
  );
}
export default Listagem;
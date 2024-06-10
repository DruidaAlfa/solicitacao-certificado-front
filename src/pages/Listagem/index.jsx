import React, { useState,useEffect } from 'react';
import Logo from "../../img/logo.png"
import Perfil from "../../img/p2.png"
import './style.css'
import http from '../../services/api';
import { useNavigate } from 'react-router-dom';



function Listagem() {

    const navigate = useNavigate();
    const [logged, setLogged]=useState(false);
    const [isLoading, setLoading] = useState(true)
    
    const [pedidos,setPedidos]=useState([]);

    const navigaToHome=()=>{
        navigate('/');
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const token = localStorage.getItem('authToken');
            const response = await http.get('/api/v1/pedido/list-all',{
                headers: {
                    Authorization: `Bearer ${token}`
                  }
            });
          setLogged(true);
          
          setPedidos(response.data.data)
          setLoading(false);
          } catch (error) {
            if(error.response.status===401){

            }
            console.log(error.response)
            navigaToHome();
          }
        };
    
        fetchData();
      }, []);
      useEffect(()=>{console.log(pedidos)},pedidos)
      if (!logged) {
        navigaToHome();
        return '';
      }

      
 
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
                {isLoading &&
                <tr>
                  <td colSpan={6}>
                    <p>Carregando...</p>
                  </td>
                </tr>
                }
                    <thead>
                    
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
                    
                    </thead>

                    <tbody>
                    {  
                    
                    pedidos.map((pedido)=>(
                        <tr> 

                            <td align="center">{pedido.id}</td>
                            <td align="center">{pedido.nome_completo}</td>
                            <td align="center">{pedido.nome_mae}</td>
                            <td align="center">{pedido.nome_completo}</td>
                            <td align="center">{pedido.data_nascimento}</td>
                            <td align="center">{pedido.data_batismo}</td>
                            <td align="center">{pedido.finalidade}</td>
                            <td align="center">{pedido.status}</td>
                            <td align="center">{pedido.diocese_id}</td>
                            <td align="center">{pedido.cidade_id}</td>
                            <td align="center">{pedido.paroquia_id}</td>
                            <td align="center"> <a href="#" class="editar fa fa-fa fa-check-circle" title="Editar">Aprovar</a>  </td>
                            <td align="center"> <a href="#" class="deletar fa fa-times-circle" title="Deletar">Recusar</a>  </td>
                    
                        </tr>

                        ))}
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
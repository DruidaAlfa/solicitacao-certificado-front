import React, { useState,useEffect } from 'react';
import Logo from "../../img/logo.png"
import Perfil from "../../img/p2.png"
import './style.css'
import http from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';


function Listagem() {

    const navigate = useNavigate();
    const [logged, setLogged]=useState(false);
    const [isLoading, setLoading] = useState(true)
    const [pedidos,setPedidos]=useState([]);
    



    const navigaToHome=()=>{
        navigate('/');
    }

    const formatarData = (data) => {
      const d = new Date(data);
      return d.toISOString().split('T')[0];
   };
  

    const editStatus=(id, newStatus)=>{
      const updatedPedidos=pedidos.map(pedido =>
        pedido.id === id ? { ...pedido, status: newStatus } : pedido
      );
      setPedidos(updatedPedidos);
    }

      const enviar=async(pedido)=>{
      
          try{
           
            const token = localStorage.getItem('authToken');
            
              const response = await http.put('/api/v1/pedido/update/'+pedido.id,
              {
                nome_completo: pedido.nome_completo,
                nome_mae: pedido.nome_mae,
                email: pedido.email,
                status:pedido.status,
                data_nascimento: formatarData(pedido.data_nascimento),
                data_batismo: formatarData(pedido.data_batismo),
                finalidade: pedido.finalidade,
                diocese_id:null,
                cidade_id:null,
                paroquia_id:null
              },
              {
                headers:{
                  Authorization: `Bearer ${token}`
                },
              });
              toast.success(response.data.message);
          }catch(error){
            
            let errors=error.response.data.errors;
            
            Object.entries(errors).forEach(([key, value]) => { 
              toast.error(value[0] || 'Erro desconhecido');
          });
           
          }
    
      }

      useEffect(() => {
          const fetchData = async () => {
            try {
              const token = localStorage.getItem('authToken');
              const paroquia=localStorage.getItem('paroquia_id');
              console.log(token)
              const response = await http.get('/api/v1/pedido/list/'+paroquia,{
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
        
        if (!isLoading) {
          if(!logged){
            navigaToHome();
            return '';
          }
          
        }

      
 
  return (


    
    <div className='listagem'>
        <ToastContainer />
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
                <div className="style-tabela">
                <table border="0" cellPadding="0" cellSpacing="0" width="100%">
                {isLoading &&
                <thead>
                <tr>
                  <td colSpan={6}>
                    <p>Carregando...</p>
                  </td>
                </tr>
                </thead>
                }
                    <thead>
                    
                        <tr>
                        <td className="top center"><i className="icofont-users-alt-4"></i>Id</td>
                        <td className="top center"><strong>Nome Completo</strong></td>
                        <td className="top center"><strong>Nome da mãe</strong></td>
                        <td className="top center"><strong>E-mail</strong></td>
                        <td className="top center"><strong>Data de Nasc.</strong></td>
                        <td className="top center"><strong>Data de Batismo</strong></td>
                        <td className="top center"><strong>Finalidade</strong></td>
                        <td className="top center"><strong>Status</strong></td>
                        <td className="top center"><strong>Diocese</strong></td>
                        <td className="top center"><strong>Cidade</strong></td>
                        <td className="top center"><strong>Paróquia</strong></td>
                        <td className="top center" colSpan="3" width="1"><strong>Ações</strong></td>
                        </tr>
                    
                    </thead>

                    <tbody>
                    {  
                    
                    pedidos.map((pedido)=>(
                        <tr key={pedido.id}> 

                            <td align="center">{pedido.id}</td>
                            <td align="center">{pedido.nome_completo}</td>
                            <td align="center">{pedido.nome_mae}</td>
                            <td align="center">{pedido.nome_completo}</td>
                            <td align="center">{pedido.data_nascimento}</td>
                            <td align="center">{pedido.data_batismo}</td>
                            <td align="center">{pedido.finalidade}</td>
                            <td align="center">  
                              <select name="Status" 
                              id="appearance-select"
                              value={pedido.status||'Espera'}
                              onChange={(e)=>editStatus(pedido.id,e.target.value)}
                              >
                                <option value="espera" >Espera</option>
                                <option value="pagamento pendente">Pag. Pendente</option>
                                <option value="recusado">Recusado</option>
                                <option value="aprovado">Aprovado</option>
                              </select>
                            </td>
                            <td align="center">{pedido.diocese_id}</td>
                            <td align="center">{pedido.cidade_id}</td>
                            <td align="center">{pedido.paroquia_id}</td>

                            <td align="center"> <a href="#" className="editar fa fa-fa fa-check-circle" 
                                onClick={()=>enviar(pedido)}
                                title="Editar">Enviar</a>  </td>
                            {pedido.status==="aprovado" ?(
                              <td align="center"> 
                                <Link to="/Upload?id=2">Enviar certidão</Link>
                               </td>
                              ):(
                                <td></td>
                              )}
                            
                            <td align="center"> <a href="#" className="deletar fa fa-times-circle" title="Deletar">Recusar</a>  </td>
                    
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
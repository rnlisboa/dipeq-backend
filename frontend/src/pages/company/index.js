import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../service/api';
const ListaEmpresasContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const EmpresaItem = styled.li`
list-style: none;
  margin: 10px 0;
`;

const LinkEmpresa = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #007bff;
  }
`;

const ListaEmpresas = () => {
  const [empresas, setEmpresas] = useState([])

  useEffect(()=>{
    async function getData(){
      const data = await api.get('company/')
      setEmpresas(data.data.results);
    }

    getData()
  }, [])
  return (
    <ListaEmpresasContainer>
      <h1>Lista de Empresas Cadastradas</h1>
      <ul>
        {empresas.map((empresa) => (
          <EmpresaItem key={empresa.id}>
            <LinkEmpresa to={`/empresa/${empresa.id}`}>{empresa.nome_fantasia}</LinkEmpresa>
          </EmpresaItem>
        ))}
      </ul>
    </ListaEmpresasContainer>
  );
};

export default ListaEmpresas;

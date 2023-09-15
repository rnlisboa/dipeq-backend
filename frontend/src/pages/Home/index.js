import React, { useState } from 'react';
import { api } from '../../service/api';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CadastroForm = () => {
  const [cnpj, setCnpj] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [areaDeAtuacao, setAreaDeAtuacao] = useState('');
  const [tempoAtuacaoMercado, setTempoAtuacaoMercado] = useState('');
  const [capitalSocial, setCapitalSocial] = useState('');
  const [nFuncClt, setNFuncClt] = useState('');
  const [nFuncTerc, setNFuncTerc] = useState('');
  const [nEstagiario, setNEstagiario] = useState('');
  const [nSocios, setNSocios] = useState('');
  const [nomeSocios, setNomeSocios] = useState('');
  const [website, setWebsite] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    const formData = {
      cnpj,
      razao_social: razaoSocial,
      nome_fantasia: nomeFantasia,
      area_de_atuacao: areaDeAtuacao,
      tempo_atuacao_mercado: tempoAtuacaoMercado,
      capital_social: capitalSocial,
      n_func_clt: nFuncClt,
      n_func_terc: nFuncTerc,
      n_estagiario: nEstagiario,
      n_socios: nSocios,
      nome_socios: nomeSocios,
      website,
      instagram,
      facebook,
      twitter,
      linkedin,
      email,
    };
    try{
        await api.post('company/create_company/', formData)
        alert("Empresa cadastrada!")
    } catch(e){
        console.log(e)
    }
  };

  return (
    <FormContainer>
      <FormTitle>Cadastro</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>CNPJ:</Label>
          <Input
            type="text"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Razão Social:</Label>
          <Input
            type="text"
            value={razaoSocial}
            onChange={(e) => setRazaoSocial(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Nome Fantasia:</Label>
          <Input
            type="text"
            value={nomeFantasia}
            onChange={(e) => setNomeFantasia(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Área de Atuação:</Label>
          <Input
            type="text"
            value={areaDeAtuacao}
            onChange={(e) => setAreaDeAtuacao(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Tempo de Atuação no Mercado (anos):</Label>
          <Input
            type="number"
            value={tempoAtuacaoMercado}
            onChange={(e) => setTempoAtuacaoMercado(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Capital Social:</Label>
          <Input
            type="number"
            value={capitalSocial}
            onChange={(e) => setCapitalSocial(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Número de Funcionários CLT:</Label>
          <Input
            type="number"
            value={nFuncClt}
            onChange={(e) => setNFuncClt(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Número de Funcionários Terceirizados:</Label>
          <Input
            type="number"
            value={nFuncTerc}
            onChange={(e) => setNFuncTerc(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Número de Estagiários:</Label>
          <Input
            type="number"
            value={nEstagiario}
            onChange={(e) => setNEstagiario(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Número de Sócios:</Label>
          <Input
            type="number"
            value={nSocios}
            onChange={(e) => setNSocios(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Nomes dos Sócios:</Label>
          <Input
            type="text"
            value={nomeSocios}
            onChange={(e) => setNomeSocios(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Website:</Label>
          <Input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Instagram:</Label>
          <Input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Facebook:</Label>
          <Input
            type="text"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Twitter:</Label>
          <Input
            type="text"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>LinkedIn:</Label>
          <Input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Cadastrar</Button>
      </form>
    </FormContainer>
  );
};

export default CadastroForm;

import React, { useState } from 'react';
import { gravar } from '../services/candidatoservice.js';
import './style.css';
function CandidateForm() {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const candidateData = { cpf, nome, endereco, telefone };

    try {
      await gravar(candidateData);
      setMessage('Candidato cadastrado com sucesso!');
      // Limpa o formulário
      setCpf('');
      setNome('');
      setEndereco('');
      setTelefone('');
    } catch (error) {
      setMessage('Erro ao cadastrar candidato: ' + error.message);
    }
  };

  return (
    <div className="candidate-form">
      <h2>Cadastro de Candidato</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>CPF:</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Endereço:</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefone:</label>
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CandidateForm;

import React, { useState } from 'react';
import { gravar } from '../services/vagasservice.js';
import './job.css';
function JobForm() {
  const [cargo, setCargo] = useState('');
  const [salario, setSalario] = useState('');
  const [cidade, setCidade] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = { cargo, salario, cidade, quantidade };

    try {
      await gravar(jobData);
      setMessage('Vaga cadastrada com sucesso!');
      // Limpa o formulário
      setCargo('');
      setSalario('');
      setCidade('');
      setQuantidade('');
    } catch (error) {
      setMessage('Erro ao cadastrar vaga: ' + error.message);
    }
  };

  return (
    <div className="job-form">
      <h2>Cadastro de Vaga</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cargo:</label>
          <input
            type="text"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Salário:</label>
          <input
            type="number"
            value={salario}
            onChange={(e) => setSalario(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cidade:</label>
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Quantidade de Vagas:</label>
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar Vaga</button>
      </form>
    </div>
  );
}

export default JobForm;

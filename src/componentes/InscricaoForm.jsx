import React, { useState, useEffect } from 'react';
import { getCandidates, getJobs, gravar } from '../services/inscricaoservice.js';
import './inscricao.css';
function InscriptionForm() {
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [cpf, setCpf] = useState('');
  const [codigo, setCodigo] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Buscar candidatos e vagas ao carregar o componente
    const fetchData = async () => {
      const candidatesData = await getCandidates();
      const jobsData = await getJobs();
      setCandidates(candidatesData);
      setJobs(jobsData);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inscriptionData = { data, horario, cpf, codigo };

    try {
      await gravar(inscriptionData);
      setMessage('Inscrição cadastrada com sucesso!');
      // Limpa o formulário
      setData('');
      setHorario('');
      setCpf('');
      setCodigo('');
    } catch (error) {
      setMessage('Erro ao cadastrar inscrição: ' + error.message);
    }
  };

  return (
    <div className="inscription-form">
      <h2>Cadastro de Inscrição</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Data:</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Horário:</label>
          <input
            type="time"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            required
          />
        </div>
        <div>
          <label>CPF do Candidato:</label>
          <select value={cpf} onChange={(e) => setCpf(e.target.value)} required>
            <option value="">Selecione um Candidato</option>
            {candidates.map((candidato) => (
              <option key={candidato.cpf} value={candidato.cpf}>
                {candidato.nome} - {candidato.cpf}
              </option>
             
            ))}
            
          </select>
        </div>
        <div>
          <label>Código da Vaga:</label>
          <select value={codigo} onChange={(e) => setCodigo(e.target.value)} required>
            <option value="">Selecione uma Vaga</option>
            {jobs.map((job) => (
              <option key={job.codigo} value={job.codigo}>
                {job.cargo} - Código: {job.codigo}
              </option>
            ))}
          
          </select>
        </div>
        <button type="submit">Cadastrar Inscrição</button>
      </form>
    </div>
  );
}

export default InscriptionForm;

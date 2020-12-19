import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import pingLoc from '../../assets/pingLoc.png';

import { Title, Form, CepsRepository, Error } from './styles';

interface CepRepository {
  id: number;
  cepNumber: string;
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newCep, setNewCep] = useState('');
  const [cepsRepository, setCepsRepository] = useState<CepRepository[]>([]);

  async function handleAddCepRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newCep) {
      setInputError('Informe um cep antes de realizar a consulta');
      return;
    }

    try {
      const cep = {
        cepNumber: newCep,
      };
      const response = await api.post('cep/', cep);

      const cepResponse: CepRepository = response.data;

      setCepsRepository([...cepsRepository, cepResponse]);
      setNewCep('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse cep!');
    }
  }

  useEffect(() => {
    api.get<CepRepository[]>('cep/').then(response => {
      setCepsRepository(response.data);
    });
  }, []);

  return (
    <>
      <Title>Explore endereços utilizando o CEP</Title>

      <Form hasError={!!inputError} onSubmit={handleAddCepRepository}>
        <input
          value={newCep}
          onChange={e => setNewCep(e.target.value)}
          placeholder="Digite o Cep aqui. Ex.: 01001001"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <CepsRepository>
        {cepsRepository
          .map(cepRepository => (
            <Link
              key={cepRepository.id}
              to={`/repository/${cepRepository.cepNumber}`}
            >
              <img src={pingLoc} alt="pingLoc.png" />
              <div>
                <strong>{cepRepository.cepNumber}</strong>
                <p>CEP</p>
              </div>

              <FiChevronRight size={20} />
            </Link>
          ))
          .reverse()}
      </CepsRepository>
    </>
  );
};

export default Dashboard;

import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import pingMapLocation from '../../assets/location-ping.png';
import { viaCep } from '../../services/api';

import { DivBtnBack, CepAddressInfo } from './styles';

interface RepositoryParams {
  cep: string;
}

interface Address {
  cep: String;
  logradouro: String;
  complemento: String;
  bairro: String;
  localidade: String;
  uf: String;
  ibge: String;
  gia: String;
  ddd: String;
  siafi: String;
}

const Repository: React.FC = () => {
  const [address, setAddress] = useState<Address | null>(null);
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    viaCep.get<Address>(`${params.cep}/json`).then(response => {
      setAddress(response.data);
    });
  }, [params.cep]);

  return (
    <>
      <DivBtnBack>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </DivBtnBack>

      {address && (
        <CepAddressInfo>
          <header>
            <img src={pingMapLocation} alt="ping-map-location.png" />
            <div>
              <strong>{address.cep}</strong>
              <p>CEP</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>
                {address.logradouro === ''
                  ? 'Sem Logradouro'
                  : address.logradouro}
              </strong>
              <span>Logradouro</span>
            </li>
            <li>
              <strong>
                {address.complemento === ''
                  ? 'Sem Complemento'
                  : address.complemento}
              </strong>
              <span>Complemento</span>
            </li>
            <li>
              <strong>
                {address.bairro === '' ? 'Sem Bairro' : address.bairro}
              </strong>
              <span>Bairro</span>
            </li>
            <li>
              <strong>
                {address.localidade === ''
                  ? 'Sem Localidade'
                  : address.localidade}
              </strong>
              <span>Localidade</span>
            </li>
            <li>
              <strong>{address.uf === '' ? 'Sem UF' : address.uf}</strong>
              <span>UF</span>
            </li>
            <li>
              <strong>{address.ibge === '' ? 'Sem IBGE' : address.ibge}</strong>
              <span>IBGE</span>
            </li>
            <li>
              <strong>{address.ddd === '' ? 'Sem DDD' : address.ddd}</strong>
              <span>DDD</span>
            </li>
          </ul>
        </CepAddressInfo>
      )}
    </>
  );
};
export default Repository;

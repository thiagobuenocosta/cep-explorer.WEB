import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://localhost:8080/',
  baseURL: 'http://192.168.15.48:8080/',
});

export const viaCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

import styled from 'styled-components';
import { shade } from 'polished';

export const DivBtnBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #ffffff;
    margin-left: auto;
    background: #a8a8b3;
    border-radius: 5px;
    padding: 10px 25px 10px 20px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#a8a8b3')};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const CepAddressInfo = styled.div`
  margin-top: 80px;

  header {
    background: #ffff;
    display: flex;
    align-items: center;
    border-radius: 5px;
    padding: 25px;

    img {
      width: 140px;
      height: 120px;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: block;
    list-style: none;
    margin-top: 50px;

    li {
      border-radius: 5px;
      padding: 15px;
      background: #ffff;
      & + li {
        margin-top: 25px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

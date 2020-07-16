import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Oswald','sans-serif';
  padding: 10px 20px;
  border-radius: 10px;
  background: #63D2FF;
    color: white;
  &:hover {
    color: #63D2FF;
    background-color: white;
  }
  &:active {
    background-color: #63D2FF;
    color: white;
  }
  border: 2px solid #172A3A;
  font-size: 20px;
`;

export default Button;

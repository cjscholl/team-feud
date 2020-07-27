import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Oswald','sans-serif';
  padding: 10px 20px;
  border-radius: 5px;
  background: #8AEA92;
  color: white;
  border: 2px solid #8AEA92;
  outline: none;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
  }
`;

export default Button;

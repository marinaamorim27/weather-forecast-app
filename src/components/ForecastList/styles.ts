import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
`;

export const Item = styled.div`
  background: #f0f4f8;
  border-radius: 8px;
  padding: 0.5rem;
  text-align: center;
`;

export const DateText = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export const TempText = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 0.25rem;
`;

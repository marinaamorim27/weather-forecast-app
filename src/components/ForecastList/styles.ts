// src/components/ForecastList/styles.ts
import styled from 'styled-components';

export const List = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
`;

export const Item = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const DateText = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 0.5rem;
`;

export const TempText = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
`;

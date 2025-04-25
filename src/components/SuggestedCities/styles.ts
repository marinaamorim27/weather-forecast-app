import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
`;

export const CityButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: #f0f4ff;
  color: #0070f3;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  font-weight: 500;
  &:hover {
    background: #e0eaff;
    transform: translateY(-2px);
  }
`;

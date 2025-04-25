import styled from 'styled-components';

export const TopBar = styled.div`
  width: 100%;
  position: fixed; 
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;  /* Center the content */
  align-items: center;
  background-color: #1e90ff;
  padding: 10px 20px;
  color: white;
  font-size: 1.5rem;
  border-bottom: 2px solid #4682b4;
  z-index: 10;
  

  @media (max-width: 768px) {
    flex-direction: column; 
    text-align: center;
  }
`;

export const Container = styled.div`
position: relative ;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 80px; 
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
`;

export const CityName = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  color: #f0f8ff;
  padding: 5px 10px;
  background-color: #4682b4;
  border-radius: 5px;
  margin: 0;
  margin-left: 10px; 
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 4px 8px;
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  margin-top: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const CityButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: #f0f4ff;
  color: #0070f3;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #e0eaff;
  }
`;


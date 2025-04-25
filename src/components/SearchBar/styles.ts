
import styled from 'styled-components';

export const Container = styled.form`
  position: relative;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 200px;
  padding: 0.75rem 1rem;
  border: 2px solid #ddd;
  border-radius: 999px;
  font-size: 1rem;
  transition: border-color 0.2s;
  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  background: #0070f3;
  color: white;
  font-weight: 500;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #005ac1;
  }
`;

export const Toggle = styled.button`
  padding: 0.75rem 1rem;
  border: 2px solid #0070f3;
  background: white;
  color: #0070f3;
  font-weight: 500;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #0070f3;
    color: white;
  }
`;

export const SuggestionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-top: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 9999;
  border-radius: 0 0 8px 8px;
  display: block;
`;

export const SuggestionItem = styled.div<{ highlighted: boolean }>`
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: ${({ highlighted }) => (highlighted ? '#f0f4ff' : 'white')};
  &:hover {
    background: #e0eaff;
  }
`;
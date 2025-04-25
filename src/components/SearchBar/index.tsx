import React, { useState } from 'react';
import { Container, Input, Button, Toggle } from './styles';

interface SearchBarProps {
  onSearch: (cidade: string) => void;
  onToggleUnit: () => void;
  unidade: 'metric' | 'imperial';
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onToggleUnit,
  unidade
}) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(text.trim());
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Escreve uma cidade..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button type="submit">Pesquisar</Button>
      <Toggle onClick={onToggleUnit}>
        {unidade === 'metric' ? '°C' : '°F'}
      </Toggle>
    </Container>
  );
};

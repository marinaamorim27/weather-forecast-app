import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { citySuggestions } from '../../data/cities';
import { Container, Input, Button, Toggle, SuggestionsContainer, SuggestionItem } from './styles';

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
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const getSuggestions = (inputValue: string) => {
    const input = inputValue.trim().toLowerCase();
    return citySuggestions.filter(city =>
      city.toLowerCase().startsWith(input)
    );
  };

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = (suggestion: string) => suggestion;

  const renderSuggestion = (suggestion: string) => <div>{suggestion}</div>;

  const onChange = (_: any, { newValue }: any) => {
    setValue(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value.trim());
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={(suggestion, { isHighlighted }) => (
          <SuggestionItem highlighted={isHighlighted}>
            {suggestion}
          </SuggestionItem>
        )}
        renderSuggestionsContainer={({ containerProps, children }) => (
          <SuggestionsContainer {...containerProps}>
            {children}
          </SuggestionsContainer>
        )}

        theme={{
          container: 'autosuggest-container',
          suggestionsContainer: 'autosuggest-suggestions-container',
          suggestionsList: 'autosuggest-suggestions-list',
          suggestion: 'autosuggest-suggestion',
          suggestionHighlighted: 'autosuggest-suggestion--highlighted'
        }}
        renderInputComponent={(inputProps) => (
          <Input {...inputProps} />
        )}
        inputProps={{
          placeholder: 'Digite uma cidade...',
          value,
          onChange
        }}
      />
      <Button type="submit">Pesquisar</Button>
      <Toggle onClick={onToggleUnit}>
        {unidade === 'metric' ? '°C' : '°F'}
      </Toggle>
    </Container>
  );
};

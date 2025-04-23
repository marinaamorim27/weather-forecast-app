import React, { useState } from 'react';

function App() {
  const [cidade, setCidade] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Previsão de 5 Dias</h1>
      <input
        type="text"
        placeholder="Escreve uma cidade"
        value={cidade}
        onChange={e => setCidade(e.target.value)}
      />
      <button>Pesquisar</button>
    </div>
  );
}

export default App;

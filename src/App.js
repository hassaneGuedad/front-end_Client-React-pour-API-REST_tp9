import React, { useState } from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';

function App() {
  const [refreshList, setRefreshList] = useState(false);

  const handleCompteAdded = () => {
    setRefreshList(!refreshList); // Permet de recharger la liste
  };

  return (
    <div>
      <CompteForm onCompteAdded={handleCompteAdded} />
      <CompteList refresh={refreshList} />
    </div>
  );
}

export default App;

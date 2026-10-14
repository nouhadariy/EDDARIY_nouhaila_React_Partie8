
import React from 'react';
import ReactDOM from 'react-dom/client';
import Presentation from './components/Presentation';
import PresentationClasse from './components/PresentationClasse';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const personne = {
    nom: 'Rami',
    prenom: 'Ahmed'
  };

  const diplomes = ['Bac', 'Licence', 'Master'];

  return (
    <div>
      <Presentation personne={personne} diplomes={diplomes}>
        <p>Version fonction</p>
      </Presentation>

      <hr />

      <PresentationClasse personne={personne} diplomes={diplomes}>
        <p>Version classe</p>
      </PresentationClasse>
    </div>
  );
}

root.render(<App />);

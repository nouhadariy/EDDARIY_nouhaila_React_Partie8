import React from 'react';
import ReactDOM from 'react-dom/client';
import Message from './components/Message';
import CompteurVisites from './components/ComteurVisiteur';

const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  return (
    <div>
      <Message/>
      <CompteurVisites/>
    </div>
  );
}
root.render(<App />);

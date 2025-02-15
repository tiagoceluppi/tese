import React from 'react';

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
          ASPECTOS DA SOLIDÃO EM CLARICE LISPECTOR:
        </h1>
        <h2 className="text-2xl text-yellow-400">
          UMA ANÁLISE DE SUAS EPÍSTOLAS
        </h2>
      </div>

      <div className="text-center">
        <div className="mb-8">
          <h3 className="text-2xl text-blue-400">CLARICE LISPECTOR</h3>
          <p className="text-gray-200">23 obras publicadas</p>
          <p className="text-gray-200">Mais de 200 cartas</p>
          <p className="text-gray-200">Escritora Modernista</p>
        </div>

        <div>
          <h3 className="text-2xl text-green-400">PESQUISADORA</h3>
          <p className="text-gray-200">Doutorado em Teoria Literária</p>
          <p className="text-gray-200">Área: Literatura Brasileira</p>
          <p className="text-gray-200">Foco: Epistolografia</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-yellow-400 text-2xl animate-pulse">
          PRESS START TO BEGIN
        </p>
      </div>
    </div>
  );
}

export default App;

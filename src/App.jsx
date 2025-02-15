import React, { useState, useEffect } from 'react';
import { Star, Book, Heart, Brain, Mail, Target, List, Search, Flag } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const TitleSlide = () => (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      {/* Título Principal estilizado */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
          ASPECTOS DA SOLIDÃO EM CLARICE LISPECTOR:
        </h1>
        <h2 className="text-3xl text-blue-300">
          UMA ANÁLISE DE SUAS EPÍSTOLAS
        </h2>
      </div>

      {/* Cards dos Personagens */}
      <div className="flex justify-center gap-16 px-4">
        {/* Card da Clarice */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 border-blue-500 border-2 w-96 p-8 rounded-lg shadow-lg shadow-blue-500/20">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl text-blue-400 font-bold">CLARICE LISPECTOR</h3>
            <Star className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg border-4 border-blue-400 shadow-lg">
              </div>
            </div>
            <div className="space-y-4 text-lg">
              <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg">
                <Book className="w-6 h-6 text-yellow-400" />
                <span className="text-blue-200">23 obras publicadas</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-yellow-400" />
                <span className="text-blue-200">Mais de 200 cartas</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg">
                <Brain className="w-6 h-6 text-yellow-400" />
                <span className="text-blue-200">Escritora Modernista</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card da Pesquisadora */}
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 border-green-500 border-2 w-96 p-8 rounded-lg shadow-lg shadow-green-500/20">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl text-green-400 font-bold">PESQUISADORA</h3>
            <Star className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="space-y-6">
            <div className="flex justify-center mb-6">
              <div className="w-48 h-48 bg-gradient-to-br from-green-900 to-emerald-900 rounded-lg border-4 border-green-400 shadow-lg">
              </div>
            </div>
            <div className="space-y-4 text-lg">
              <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg">
                <Book className="w-6 h-6 text-yellow-400" />
                <span className="text-green-200">Doutorado em Teoria Literária</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg">
                <Heart className="w-6 h-6 text-yellow-400" />
                <span className="text-green-200">Área: Literatura Brasileira</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg">
                <Brain className="w-6 h-6 text-yellow-400" />
                <span className="text-green-200">Foco: Epistolografia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Texto "Press Start" animado */}
      <div className="text-center mt-16">
        <p className="text-3xl font-bold text-yellow-400 animate-pulse tracking-widest">
          PRESS START TO BEGIN
        </p>
      </div>
    </div>
  );

  // ... resto do código continua igual ...

  return (
    <div className="relative">
      {slides[currentSlide]}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Star, Book, Heart, Brain, Mail, Target, List, Search, Flag } from 'lucide-react';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const TitleSlide = () => (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 text-white min-h-screen p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
          ASPECTOS DA SOLIDÃO EM CLARICE LISPECTOR:
        </h1>
        <h2 className="text-3xl text-blue-300">
          UMA ANÁLISE DE SUAS EPÍSTOLAS
        </h2>
      </div>

      <div className="flex justify-center gap-16">
        {/* Card da Clarice */}
        <div className="bg-slate-800/50 backdrop-blur border-blue-500 border-2 w-96 p-6 rounded-lg shadow-lg shadow-blue-500/20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl text-blue-400">CLARICE LISPECTOR</h3>
            <Star className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg border-4 border-blue-400 shadow-lg">
              </div>
            </div>
            <div className="space-y-2 text-gray-200">
              <div className="flex items-center gap-2 bg-slate-700/50 p-3 rounded-lg transition hover:bg-slate-700/70">
                <Book className="w-5 h-5 text-yellow-400" />
                <span>23 obras publicadas</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-700/50 p-3 rounded-lg transition hover:bg-slate-700/70">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span>Mais de 200 cartas</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-700/50 p-3 rounded-lg transition hover:bg-slate-700/70">
                <Brain className="w-5 h-5 text-yellow-400" />
                <span>Escritora Modernista</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card da Pesquisadora */}
        <div className="bg-slate-800/50 backdrop-blur border-green-500 border-2 w-96 p-6 rounded-lg shadow-lg shadow-green-500/20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl text-green-400">PESQUISADORA</h3>
            <Star className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-48 h-48 bg-gradient-to-br from-green-900 to-green-800 rounded-lg border-4 border-green-400 shadow-lg">
              </div>
            </div>
            <div className="space-y-2 text-gray-200">
              <div className="flex items-center gap-2 bg-slate-700/50 p-3 rounded-lg transition hover:bg-slate-700/70">
                <Book className="w-5 h-5 text-yellow-400" />
                <span>Doutorado em Teoria Literária</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-700/50 p-3 rounded-lg transition hover:bg-slate-700/70">
                <Heart className="w-5 h-5 text-yellow-400" />
                <span>Área: Literatura Brasileira</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-700/50 p-3 rounded-lg transition hover:bg-slate-700/70">
                <Brain className="w-5 h-5 text-yellow-400" />
                <span>Foco: Epistolografia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-3xl font-bold text-yellow-400 animate-pulse tracking-widest">
          PRESS START TO BEGIN
        </p>
      </div>
    </div>
  );

  const ObjectivesSlide = () => (
    <div className="bg-gradient-to-b from-slate-800 to-slate-900 text-white min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-yellow-400">FASE 1: OBJETIVOS DA MISSÃO</h2>
        <div className="flex gap-4">
          <span className="text-blue-400 font-bold">HP: ████████</span>
          <span className="text-yellow-400 font-bold">XP: 1500</span>
        </div>
      </div>

      <div className="bg-slate-800/50 backdrop-blur border-purple-500 border-2 mb-8 p-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <Target className="w-8 h-8 text-purple-400" />
          <h3 className="text-2xl text-purple-400 font-bold">OBJETIVO PRINCIPAL</h3>
        </div>
        <p className="text-gray-200 text-lg">
          Compreender a solidão presente nas cartas de Clarice Lispector, explorando suas manifestações e representações em sua vida e escrita.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Missão 1 */}
        <div className="bg-slate-800/50 backdrop-blur border-blue-500 border-2 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
          <div className="flex items-center gap-2 mb-4">
            <Search className="w-6 h-6 text-blue-400" />
            <h4 className="text-xl text-blue-400 font-bold">MISSÃO 1</h4>
          </div>
          <p className="text-gray-200">Analisar o uso da linguagem relacionada à solidão nas cartas</p>
        </div>

        {/* Missão 2 */}
        <div className="bg-slate-800/50 backdrop-blur border-green-500 border-2 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-6 h-6 text-green-400" />
            <h4 className="text-xl text-green-400 font-bold">MISSÃO 2</h4>
          </div>
          <p className="text-gray-200">Identificar padrões e temas recorrentes relacionados à solidão</p>
        </div>

        {/* Missão 3 */}
        <div className="bg-slate-800/50 backdrop-blur border-red-500 border-2 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
          <div className="flex items-center gap-2 mb-4">
            <List className="w-6 h-6 text-red-400" />
            <h4 className="text-xl text-red-400 font-bold">MISSÃO 3</h4>
          </div>
          <p className="text-gray-200">Estabelecer relações entre a solidão nas cartas e obras</p>
        </div>

        {/* Missão 4 */}
        <div className="bg-slate-800/50 backdrop-blur border-yellow-500 border-2 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
          <div className="flex items-center gap-2 mb-4">
            <Flag className="w-6 h-6 text-yellow-400" />
            <h4 className="text-xl text-yellow-400 font-bold">MISSÃO 4</h4>
          </div>
          <p className="text-gray-200">Contextualizar a solidão no ambiente sociocultural da época</p>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <span className="text-gray-400 font-bold">PROGRESSO:</span>
        <div className="flex-1 h-4 bg-slate-700 rounded-full overflow-hidden">
          <div className="w-1/5 h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
        </div>
        <span className="text-green-400 font-bold">20%</span>
      </div>
    </div>
  );

  const slides = [
    <TitleSlide />,
    <ObjectivesSlide />
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') setCurrentSlide((prev) => (prev + 1) % slides.length);
      if (e.key === 'ArrowLeft') setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  return (
    <div className="relative">
      {slides[currentSlide]}
    </div>
  );
}

export default App;

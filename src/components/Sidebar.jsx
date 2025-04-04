import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';  // Ícones de hambúrguer e fechar

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade da sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alterna o estado da sidebar
  };

  return (
    <div className={`flex flex-col md:w-64 fixed top-0 left-0 bg-[#0d1117] text-[#c9d1d9] h-full ${isOpen ? 'block' : 'hidden'} md:block`}>
      {/* Ícone de Hambúrguer para dispositivos móveis */}
      <div className="md:hidden p-4 cursor-pointer" onClick={toggleSidebar}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Sidebar - Conteúdo */}
      <div className="flex flex-col p-6 space-y-6">
        <h1 className="text-2xl font-bold">Alexandre Bella Cruz</h1>
        <nav className="flex flex-col gap-4">
          <a href="#home" className="hover:text-blue-600 transition-all">🏠 Home</a>
          <a href="#certificationsandtech" className="hover:text-blue-600 transition-all">💻 Certifications & Tech Stack</a>
          <a href="#projects" className="hover:text-blue-600 transition-all">🧪 My Code Lab</a>
          <a href="#learning" className="hover:text-blue-600 transition-all">🚀 Evolving...</a>
          <a href="#contact" className="hover:text-blue-600 transition-all">📬 Let’s Connect</a>
        </nav>
      </div>
    </div>
  );
}
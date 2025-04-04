export function Sidebar() {
  return (
    <aside className="w-64 fixed h-screen bg-[#161b22] text-white border-r border-gray-700 p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold leading-tight mb-10">
          Alexandre Bella Cruz
          <span className="block text-sm font-normal text-gray-400">
            Software Engineer | Open to Work 🌎
          </span>
        </h1>
        <nav className="flex flex-col gap-4 text-sm font-medium">
          <a href="#home" className="hover:text-blue-400">🏠 Home</a>
          <a href="#skills" className="hover:text-blue-400">💻 Tech I Speak</a>
          <a href="#projects" className="hover:text-blue-400">🧪 My Code Lab</a>
          <a href="#learning" className="hover:text-blue-400">🚀 Evolving...</a>
          <a href="#contact" className="hover:text-blue-400">📬 Let’s Connect</a>
        </nav>
      </div>
    </aside>
  );
}
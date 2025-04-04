import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Learning } from './pages/Learning';
import { Contact } from './pages/Contact';
import { CertificationsAndTech } from './pages/CertificationsAndTech';

function App() {
  return (
    <div className="flex min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-0 md:ml-64 px-4 py-8 space-y-20 bg-[#0d1117] text-[#c9d1d9] min-h-screen transition-all duration-300">
        <section id="home"><Home /></section>
        <section id="certifications"><CertificationsAndTech /></section>
        <section id="projects"><Projects /></section>
        <section id="learning"><Learning /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
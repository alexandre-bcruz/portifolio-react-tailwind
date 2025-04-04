import { FaDownload, FaLinkedin } from 'react-icons/fa'

export function Home() {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 max-w-4xl">
      <img
        src="/profile.jpg"
        alt="Alexandre Bella Cruz"
        className="w-32 h-32 rounded-full border border-gray-600 shadow-md object-cover"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">Who am I?</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm a Software Engineer with over a decade of experience in backend development,
          cloud-native solutions, and system scalability using AWS. Skilled in Java, Go, and Python.
          Currently seeking global opportunities where I can apply my expertise and drive innovation.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="/resume.pdf" download className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 text-sm">
            <FaDownload /> Download CV
          </a>
          <a href="https://www.linkedin.com/in/alexandre-bella-cruz-bb9b0ba9/" target="_blank" className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded text-sm">
            <FaLinkedin /> View LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
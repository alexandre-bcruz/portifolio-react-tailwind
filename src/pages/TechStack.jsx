import { FaJava, FaAws, FaDocker, FaPython, FaNodeJs, FaCloud, FaDatabase, FaCog, FaReact } from 'react-icons/fa';
import { SiTerraform, SiMysql, SiPostgresql, SiMongodb, SiRedis } from 'react-icons/si';

export function TechStack() {
  return (
    <section className="mb-20">
      <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>

      <div className="space-y-6">
        <div>
          <h4 className="text-xl font-semibold mb-2">Programming Languages</h4>
          <div className="flex flex-wrap gap-6">
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3">
              <FaJava className="text-lg" /> Java
            </span>
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3">
              <FaPython className="text-lg" /> Python
            </span>
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3">
              <FaNodeJs className="text-lg" /> Node.js
            </span>
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3">
              <FaReact className="text-lg" /> JavaScript
            </span>
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3">
              <FaCloud className="text-lg" /> TypeScript
            </span>
          </div>
        </div>

        {/* Cloud Platforms */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Cloud Platforms</h4>
          <div className="flex flex-wrap gap-6">
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3">
              <FaAws className="text-lg" /> AWS
            </span>
          </div>
        </div>

        {/* DevOps Tools */}
        <div>
          <h4 className="text-xl font-semibold mb-2">DevOps & Tools</h4>
          <div className="flex flex-wrap gap-6">
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3">
              <FaDocker className="text-lg" /> Docker
            </span>
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3">
              <SiTerraform className="text-lg" /> Terraform
            </span>
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3">
              <FaCog className="text-lg" /> Kubernetes
            </span>
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3">
              <FaCog className="text-lg" /> CI/CD
            </span>
          </div>
        </div>

        {/* Databases */}
        <div>
          <h4 className="text-xl font-semibold mb-2">Databases</h4>
          <div className="flex flex-wrap gap-6">
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3">
              <SiMysql className="text-lg" /> MySQL
            </span>
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3">
              <SiPostgresql className="text-lg" /> PostgreSQL
            </span>
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3">
              <SiMongodb className="text-lg" /> MongoDB
            </span>
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3">
              <SiRedis className="text-lg" /> Redis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
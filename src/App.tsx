import React from 'react';
import { Github, Linkedin, Mail, Youtube, MenuIcon, X, Microscope, BookOpen, Code, TestTube, Radio, Terminal, Newspaper } from 'lucide-react';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';
import Footer from './components/Footer';
import Section from './components/Section';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const videos = [
    {
      id: 1,
      title: "Introduction to Membrane Protein Structure",
      description: "Understanding the fundamentals of membrane protein architecture",
      thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=640",
      duration: "15:30",
      date: "2024-03-10"
    },
    {
      id: 2,
      title: "Advanced Structural Biology Techniques",
      description: "Deep dive into modern methods for protein structure analysis",
      thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=640",
      duration: "20:45",
      date: "2024-03-08"
    },
    {
      id: 3,
      title: "Protein Crystallography Methods",
      description: "Essential techniques in protein crystallography",
      thumbnail: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=640",
      duration: "18:20",
      date: "2024-03-05"
    }
  ];

  const publications = [
    {
      title: "Novel Insights into Membrane Protein Structural Biology",
      journal: "Nature Structural & Molecular Biology",
      year: "2024",
      doi: "10.1038/s41594-024-0001-x"
    },
    {
      title: "Advanced Methods in Protein Crystallography",
      journal: "Journal of Molecular Biology",
      year: "2023",
      doi: "10.1016/j.jmb.2023.167771"
    }
  ];

  const techniques = [
    "X-ray Crystallography",
    "Cryo-EM",
    "NMR Spectroscopy",
    "Molecular Dynamics Simulation",
    "Protein Expression & Purification"
  ];

  const tools = [
    {
      name: "ProteinAnalyzer",
      description: "Open-source tool for protein structure analysis",
      link: "#"
    },
    {
      name: "MembraneViz",
      description: "Visualization software for membrane proteins",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://ctivitae.concytec.gob.pe/appDirectorioCTI/UploadFotoPath.do?tipo=visualizar_archivo&id_investigador=4929&ruta=/documents/docInvestigadores/4929/imagenes/picture.jpg&content_type=image/jpeg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover shadow-lg mb-8"
            />
            <div className="space-y-2">
              <h1 className="text-5xl font-bold text-gray-900">Edwin N. Quesnay</h1>
              <p className="text-2xl text-blue-600 font-medium">Ph.D. in Biosciences</p>
            </div>
            <div className="mt-6 mb-8 max-w-2xl">
              <p className="text-xl text-gray-600">
                Biologist and Structural Biology Expert specializing in membrane proteins.
                Dedicated to advancing our understanding of protein structures through
                cutting-edge research and educational content.
              </p>
            </div>
            <div className="flex space-x-4">
              <SocialLink icon={<Github />} href="https://github.com/josedwin19"/>
              <SocialLink icon={<Linkedin />} href="#" />
              <SocialLink icon={<Mail />} href="#" />
              <SocialLink icon={<Youtube />} href="#" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <Section
        id="research"
        title="Research"
        icon={<Microscope className="w-6 h-6" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Current Projects</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1 h-1 mt-3 rounded-full bg-blue-500"></div>
                <p className="ml-4">Structural analysis of novel membrane transport proteins</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1 h-1 mt-3 rounded-full bg-blue-500"></div>
                <p className="ml-4">Development of new crystallization methods for membrane proteins</p>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Research Interests</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1 h-1 mt-3 rounded-full bg-blue-500"></div>
                <p className="ml-4">Membrane protein structural biology</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1 h-1 mt-3 rounded-full bg-blue-500"></div>
                <p className="ml-4">Protein-lipid interactions</p>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Publications Section */}
      <Section
        id="publications"
        title="Publications"
        icon={<BookOpen className="w-6 h-6" />}
        className="bg-gray-50"
      >
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
              <p className="text-gray-600">{pub.journal} ({pub.year})</p>
              <p className="text-blue-600 mt-2">DOI: {pub.doi}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Techniques Section */}
      <Section
        id="techniques"
        title="Techniques"
        icon={<TestTube className="w-6 h-6" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techniques.map((technique, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">{technique}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Tutorials & Resources Section */}
      <Section
        id="tutorials"
        title="Tutorials & Resources"
        icon={<Code className="w-6 h-6" />}
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map(video => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </Section>

      {/* Media & Outreach Section */}
      <Section
        id="media"
        title="Media & Outreach"
        icon={<Radio className="w-6 h-6" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Recent Talks</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1 h-1 mt-3 rounded-full bg-blue-500"></div>
                <p className="ml-4">International Conference on Structural Biology 2024</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1 h-1 mt-3 rounded-full bg-blue-500"></div>
                <p className="ml-4">Membrane Protein Workshop 2024</p>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Press Coverage</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1 h-1 mt-3 rounded-full bg-blue-500"></div>
                <p className="ml-4">Featured in Nature Spotlight: Emerging Scientists</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-1 h-1 mt-3 rounded-full bg-blue-500"></div>
                <p className="ml-4">Interview with Science Magazine</p>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Software & Tools Section */}
      <Section
        id="tools"
        title="Software & Tools"
        icon={<Terminal className="w-6 h-6" />}
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <a href={tool.link} className="text-blue-600 hover:text-blue-700">Learn more →</a>
            </div>
          ))}
        </div>
      </Section>

      {/* Blog Section */}
      <Section
        id="blog"
        title="Blog"
        icon={<Newspaper className="w-6 h-6" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Latest in Membrane Protein Research</h3>
            <p className="text-gray-600 mb-4">Exploring recent breakthroughs in membrane protein structural biology...</p>
            <a href="#" className="text-blue-600 hover:text-blue-700">Read more →</a>
          </article>
          <article className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Methods in Protein Crystallography</h3>
            <p className="text-gray-600 mb-4">A deep dive into modern crystallography techniques...</p>
            <a href="#" className="text-blue-600 hover:text-blue-700">Read more →</a>
          </article>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-blue-600"
    >
      {icon}
    </a>
  );
}

export default App;
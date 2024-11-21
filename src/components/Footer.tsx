import React from 'react';
import { Github, Linkedin, Mail, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Edwin N. Quesnay, Ph.D.</h3>
            <p className="text-gray-400">
              Advancing the field of structural biology through research, education, and collaboration.
              Specializing in membrane protein structures and their biological implications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#tutorials" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Github /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail /></a>
              <a href="#" className="hover:text-white transition-colors"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Edwin N. Quesnay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
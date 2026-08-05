/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Typewriter } from './components/Typewriter';
import { ResumeSection } from './components/ResumeSection';
import { GitHubSection } from './components/GitHubSection';
import { ProjectsSection } from './components/ProjectsSection';

type Tab = 'resume' | 'github' | 'projects';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('resume');

  return (
    <div className="min-h-screen bg-neutral-900 p-4 sm:p-8 flex items-center justify-center font-mono selection:bg-green-500/30 selection:text-green-300">
      <div className="w-full max-w-6xl bg-black rounded-lg shadow-2xl overflow-hidden border border-neutral-700 flex flex-col h-[90vh]">
        
        {/* Title Bar (macOS/Linux style) */}
        <div className="bg-neutral-800 px-4 py-3 flex items-center shrink-0 border-b border-neutral-900">
          <div className="flex space-x-2 w-20">
            <div className="w-3.5 h-3.5 rounded-full bg-red-500 border border-red-600"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 border border-yellow-600"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-green-500 border border-green-600"></div>
          </div>
          <div className="flex-1 text-center text-neutral-400 text-sm font-medium tracking-wider">
            guest@portfolio:~
          </div>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        {/* Tab Navigation Menu */}
        <div className="bg-[#0c0c0c] px-6 py-2 border-b border-green-900/50 flex space-x-6 text-sm overflow-x-auto">
          <button 
            onClick={() => setActiveTab('resume')} 
            className={`whitespace-nowrap transition-colors hover:text-white ${activeTab === 'resume' ? 'text-green-400 font-bold border-b border-green-400 pb-1' : 'text-neutral-500 pb-1'}`}
          >
            ./resume.sh
          </button>
          <button 
            onClick={() => setActiveTab('github')} 
            className={`whitespace-nowrap transition-colors hover:text-white ${activeTab === 'github' ? 'text-green-400 font-bold border-b border-green-400 pb-1' : 'text-neutral-500 pb-1'}`}
          >
            ./github.sh
          </button>
          <button 
            onClick={() => setActiveTab('projects')} 
            className={`whitespace-nowrap transition-colors hover:text-white ${activeTab === 'projects' ? 'text-green-400 font-bold border-b border-green-400 pb-1' : 'text-neutral-500 pb-1'}`}
          >
            ./projects.sh
          </button>
        </div>

        {/* Console Content Area */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-black text-green-500 scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-black">
          <Typewriter />
          
          <div className="mt-8">
            {activeTab === 'resume' && <ResumeSection />}
            {activeTab === 'github' && <GitHubSection />}
            {activeTab === 'projects' && <ProjectsSection />}
          </div>
        </div>

      </div>
    </div>
  );
}

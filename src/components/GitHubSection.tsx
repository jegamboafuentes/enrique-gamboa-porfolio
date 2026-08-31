import { useEffect, useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import type { GitHubRepo } from '../types';

export function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/github')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
           setRepos(data);
        } else {
           setError('Failed to load data. Format unrecognized.');
        }
      })
      .catch(err => setError(err.toString()))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="animate-pulse flex gap-2 items-center text-green-500"><span className="w-4 h-4 rounded-full bg-green-500 animate-ping"></span> Fetching from GitHub API...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  const avatarUrl = repos.length > 0 ? repos[0].owner?.avatar_url : null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
       {avatarUrl && (
         <div className="flex flex-wrap items-center gap-6 mb-8 border-b border-green-900 pb-8">
           <img src={avatarUrl} alt="Profile" className="w-24 h-24 rounded-full border-2 border-green-500 p-1" />
           <div className="flex-1">
             <div className="flex items-center gap-3">
               <Github className="w-8 h-8 text-white" />
               <h2 className="text-3xl font-bold text-white">GitHub Profile</h2>
             </div>
             <p className="text-green-400 mt-2 font-mono">Data Engineer | AI Architect</p>
           </div>
           <a 
             href="https://github.com/jegamboafuentes" 
             target="_blank" 
             rel="noreferrer" 
             className="text-sm border border-green-500 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors font-bold text-green-400 shrink-0"
           >
             VIEW PROFILE
           </a>
         </div>
       )}

       <div className="mb-8 border border-green-900 p-4 bg-green-950/10">
         <h3 className="text-sm font-bold text-green-400 mb-4">Contribution Activity</h3>
         <div className="w-full overflow-x-auto pb-2 hide-scrollbar" dir="rtl">
           <img 
             src="https://ghchart.rshah.org/4ade80/jegamboafuentes" 
             alt="GitHub Contributions Graph" 
             className="w-full min-w-[550px] md:min-w-[700px] opacity-80 hover:opacity-100 transition-opacity" 
             dir="ltr"
           />
         </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {repos.map(repo => (
           <div key={repo.id} className="border border-green-800 p-6 hover:border-green-400 transition-colors bg-green-950/10 flex flex-col group font-mono">
             <div className="flex justify-between items-start mb-3">
               <h3 className="text-xl font-bold text-blue-400 break-all">{repo.name}</h3>
               <div className="flex gap-3 shrink-0 ml-4">
                 <a href={repo.html_url} target="_blank" rel="noreferrer" title="Source Code" className="flex items-center gap-2 text-green-600 hover:text-white transition-colors text-sm font-bold">
                   <Code className="w-4 h-4" />
                   SEE CODE
                 </a>
               </div>
             </div>
             {repo.topics && repo.topics.length > 0 && (
               <div className="flex flex-wrap gap-2 mb-4">
                 {repo.topics.map(topic => (
                   <span key={topic} className="px-2 py-1 bg-green-900/40 text-green-400 text-xs rounded border border-green-800/50">
                     {topic}
                   </span>
                 ))}
               </div>
             )}
             <p className="text-green-500/80 mb-6 flex-1 text-sm leading-relaxed">{repo.description || "No description provided."}</p>
             <div className="mt-auto pt-4 border-t border-green-900/50 flex flex-col gap-3">
               {repo.homepage && (
                 <a href={repo.homepage} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border border-green-500 bg-green-900/20 px-3 py-1.5 hover:bg-green-500 hover:text-black transition-colors font-bold text-sm w-fit">
                   <ExternalLink className="w-4 h-4" />
                   LIVE DEMO
                 </a>
               )}
               <p className="text-xs text-green-700">
                 Last updated: {new Date(repo.updated_at).toLocaleDateString()}
               </p>
             </div>
           </div>
         ))}
       </div>
    </div>
  );
}

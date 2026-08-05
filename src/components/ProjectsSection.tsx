import { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';
import type { MediumArticle } from '../types';

export function ProjectsSection() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/medium')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
           setArticles(data);
        } else {
           setError('Failed to load data. Format unrecognized.');
        }
      })
      .catch(err => setError(err.toString()))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="animate-pulse flex gap-2 items-center text-green-500"><span className="w-4 h-4 rounded-full bg-green-500 animate-ping"></span> Parsing Medium RSS feed...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-8 pb-8 border-b border-green-900 flex-wrap">
        <BookOpen className="w-8 h-8 text-white" />
        <h2 className="text-3xl font-bold text-white">Latest Medium Articles</h2>
        <a 
          href="https://jegamboafuentes.medium.com/" 
          target="_blank" 
          rel="noreferrer" 
          className="ml-auto text-sm border border-green-500 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors font-bold text-green-400"
        >
          VIEW PROFILE
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {articles.map((article, idx) => (
          <div key={idx} className="border border-green-800 flex flex-col hover:border-green-400 transition-colors bg-green-950/10 group font-mono">
            {article.mainImage ? (
              <div className="h-52 overflow-hidden border-b border-green-800 relative">
                <div className="absolute inset-0 bg-green-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img src={article.mainImage} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
              </div>
            ) : (
              <div className="h-52 flex items-center justify-center border-b border-green-800 bg-black text-green-700">
                [ No Image Found ]
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-blue-400 mb-4 leading-snug">{article.title}</h3>
              {article.categories && article.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.categories.map(category => (
                    <span key={category} className="px-2 py-1 bg-green-900/40 text-green-400 text-xs rounded border border-green-800/50">
                      {category}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-sm text-green-500/80 flex-1 leading-relaxed">{article.description}</p>
              <div className="mt-6 pt-4 border-t border-green-900/50">
                {article.link ? (
                  <a href={article.link} target="_blank" rel="noreferrer" className="text-xs text-green-500 hover:text-white transition-colors flex items-center gap-2 w-fit">
                    <span className="group-hover:translate-x-1 transition-transform inline-block">&gt;</span> Read Full Article
                  </a>
                ) : (
                  <span className="text-xs text-green-500 flex items-center gap-2">
                    <span className="group-hover:translate-x-1 transition-transform inline-block">&gt;</span> Read Full Article
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        {articles.length === 0 && (
          <div className="col-span-2 text-green-500 border border-green-800 p-8 text-center bg-green-950/10">
            No articles found or feed is empty.
          </div>
        )}
      </div>
    </div>
  );
}

import { Download, Mail, Github, Linkedin, BookOpen } from 'lucide-react';

export function ResumeSection() {
  return (
    <div className="space-y-8 max-w-4xl animate-in fade-in duration-500 text-green-500">
      <div>
        <h2 className="text-xl font-bold text-white mb-4">--- SUMMARY ---</h2>
        <p className="leading-relaxed text-green-400">
          Based in Boston, MA. Results-driven Data Engineer and AI Architect with over 11 years of experience designing and deploying secure, scalable data ecosystems for regulated industries including biotech, healthcare, and fintech. Holds a Master's in Data Science with a capstone applying advanced machine learning models (KNN, ANN, regression) to real-world predictive analytics. Proven ability to lead cloud transformation projects (Azure, AWS, GCP), integrate enterprise systems (MuleSoft, Dell Boomi), and deliver AI-powered insights in FDA-compliant environments. Founder of Lightning Bounties, an award-winning platform recognized at MIT Hackathon 2024.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
           <h2 className="text-xl font-bold text-white mb-4">--- CONTACT INFO ---</h2>
           <ul className="space-y-4">
             <li className="flex items-center gap-3">
               <Mail className="w-5 h-5 text-blue-400" />
               <a href="mailto:enrique@metaverseprofessional.tech" className="hover:underline hover:text-white transition-colors">enrique@metaverseprofessional.tech</a>
             </li>
             <li className="flex items-center gap-3">
               <Github className="w-5 h-5 text-blue-400" />
               <a href="https://github.com/jegamboafuentes" target="_blank" rel="noreferrer" className="hover:underline hover:text-white transition-colors">github.com/jegamboafuentes</a>
             </li>
             <li className="flex items-center gap-3">
               <Linkedin className="w-5 h-5 text-blue-400" />
               <a href="https://www.linkedin.com/in/jegamboafuentes/" target="_blank" rel="noreferrer" className="hover:underline hover:text-white transition-colors">linkedin.com/in/jegamboafuentes</a>
             </li>
             <li className="flex items-center gap-3">
               <BookOpen className="w-5 h-5 text-blue-400" />
               <a href="https://jegamboafuentes.medium.com/" target="_blank" rel="noreferrer" className="hover:underline hover:text-white transition-colors">jegamboafuentes.medium.com</a>
             </li>
           </ul>
        </div>
        
        <div className="shrink-0">
          <img 
            src="/IMG_6121.jpg" 
            alt="Jorge Enrique Gamboa Fuentes" 
            className="w-48 h-48 object-cover rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md border-2 border-green-500 p-1 shadow-[0_0_15px_rgba(34,197,94,0.3)] grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      <div className="pt-6">
        <a 
          href="https://drive.google.com/file/d/16Z9xeYd47gMWeZqNVuXQxfwpipuZgWqR/view?usp=sharing" 
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 border border-green-500 px-6 py-3 hover:bg-green-500 hover:text-black transition-colors font-bold group"
        >
          <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          DOWNLOAD RESUME.PDF
        </a>
      </div>
    </div>
  );
}

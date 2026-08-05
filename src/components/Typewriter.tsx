import { useState, useEffect } from 'react';

export function Typewriter() {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    const text1 = "Enrique Gamboa";
    const text2 = "Jorge Enrique Gamboa Fuentes";
    let currentText = "";
    let isDeleting = false;
    let loopNum = 0; // 0 for text1, 1 for text2
    let typingSpeed = 100;
    
    let timer: any;
    
    const type = () => {
      const fullText = loopNum === 0 ? text1 : text2;
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
        typingSpeed = 50;
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
        typingSpeed = 100; // a bit faster
      }
      
      setDisplayText(currentText);
      
      if (!isDeleting && currentText === fullText) {
        if (loopNum === 0) {
          typingSpeed = 2000; // Pause before delete
          isDeleting = true;
        } else {
          typingSpeed = 2000;
          isDeleting = true;
        }
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        loopNum = (loopNum + 1) % 2;
        typingSpeed = 500; // Pause before typing next
      }
      
      timer = setTimeout(type, typingSpeed);
    };
    
    timer = setTimeout(type, 1000); // initial delay
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mb-10 text-green-500">
      <p><span className="text-blue-400">guest@portfolio</span>:<span className="text-blue-400">~</span>$ whoami</p>
      <p className="mt-2 text-2xl font-bold flex items-center min-h-[32px]">
        {displayText}
        <span className="animate-pulse bg-green-500 inline-block w-3 h-6 ml-1"></span>
      </p>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cn } from '@/lib/utils';

const CodeSnippetViewer = ({ filePath, title, style, language, className } ) => {
  const [code, setCode] = useState('');
  const [loadedStyle, setLoadedStyle] = useState(null); 

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => setCode(data))
      .catch((error) => console.error('Error fetching code snippet:', error));
  }, [filePath]);

  useEffect(() => {
    if (style) {
      import(`react-syntax-highlighter/dist/cjs/styles/prism/${style}`)
        .then((styleModule) => {
          setLoadedStyle(styleModule.default);
        })
        .catch((error) => {
          console.error(`Error loading syntax highlighter style "${style}":`, error);
          setLoadedStyle(null);
        });
    } else {
      setLoadedStyle(null);
    }
  }, [style]);

  return (
    <div className={cn("flex flex-col", className)}>
      <h2>{title}</h2>
      {loadedStyle && (
        <SyntaxHighlighter language={language} style={loadedStyle} 
        className="flex-grow">
          {code}
        </SyntaxHighlighter>
      )}
      {!loadedStyle && <div>Loading code...</div>}
    </div>
  );
};

export default CodeSnippetViewer;

import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/tokyo-night-dark.css';

export function CodeBlock({ language, children }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <div className="overflow-hidden rounded-lg">
      <pre>
        <code className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  );
};


import React, { useState } from 'react';
import SimpleCodeEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';

const CodeEditor = ({ language }) => {
  const [code, setCode] = useState('');
  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };
  const languageMap = {
    python: languages.python,
    javascript: languages.javascript,
    ruby: languages.ruby,
    java: languages.java,
    c: languages.c,
  };
  const selectedLanguage = languageMap[language];
  return (
    <SimpleCodeEditor
      value={code}
      onValueChange={handleCodeChange}
      highlight={(code) => highlight(code, selectedLanguage)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
        border: '1px solid #ccc',
      }}
    />
  );
};

export default CodeEditor;

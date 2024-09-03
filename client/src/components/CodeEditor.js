import React, { useState } from 'react';
import { submitCode, getCodeResult } from '../services/api';
import { UnControlled as CodeMirror } from '@uiw/react-codemirror';

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('54'); // Example: 54 is the language ID for C++
  const [result, setResult] = useState('');

  const handleSubmit = async () => {
    try {
      const { token } = await submitCode({ sourceCode: code, language });
      setTimeout(async () => {
        const submissionResult = await getCodeResult(token);
        setResult(submissionResult);
      }, 5000); // Polling after 5 seconds to get the result
    } catch (error) {
      console.error('Error submitting code:', error);
    }
  };

  return (
    <div>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }}
        onChange={(editor, data, value) => {
          setCode(value);
        }}
      />
      <button onClick={handleSubmit}>Submit Code</button>
      {result && (
        <div>
          <h3>Result</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;

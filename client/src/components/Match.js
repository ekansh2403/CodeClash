import React, { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Match = () => {
  const [opponentCode, setOpponentCode] = useState('');

  useEffect(() => {
    socket.on('opponentCodeUpdate', (code) => {
      setOpponentCode(code);
    });
  }, []);

  const handleCodeChange = (code) => {
    socket.emit('codeChange', code);
  };

  return (
    <div>
      <h2>1v1 Coding Match</h2>
      <div>
        <h3>Your Code</h3>
        <CodeEditor onCodeChange={handleCodeChange} />
      </div>
      <div>
        <h3>Opponent's Code</h3>
        <pre>{opponentCode}</pre>
      </div>
    </div>
  );
};

export default Match;

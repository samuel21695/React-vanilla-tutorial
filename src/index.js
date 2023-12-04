import React from 'react';
import ReactDOM from 'react-dom/client';
import File1 from './components/file1';
import File2 from './components/file2';
import File3 from './components/file3';

function App() {
  return (
    <div>
      <h1>Hello, React SPA!</h1>
      <File1 />
      <File2 />
      <File3 />
    </div>
  );
}

ReactDOM.createRoot(rootNode).render(<App />, document.getElementById('root'));
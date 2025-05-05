import { useEffect, useState } from 'react';


function App() {

  const [msg, setMsg] = useState(''); // from controller
  const [html, setHtml] = useState(''); // from static/index.html

  useEffect(() => {
    fetch('http://localhost:8080')
      .then(res => res.text())
      .then(setMsg)
      .catch(err => console.error('API error:', err));
  }, []);

  useEffect(() => {
    fetch('http://localhost:8080/index.html')
      .then(res => res.text())
      .then(setHtml);
  }, []);

  return (
    <div>
      <h1>Backend says: {msg}</h1>
      
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default App;

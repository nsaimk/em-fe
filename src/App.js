import { useEffect, useState } from 'react';


function App() {

  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/ping')
      .then(res => res.text())
      .then(setMsg)
      .catch(err => console.error('API error:', err));
  }, []);

  return (
    <div>
      <h1>Backend says: {msg}</h1>
    </div>
  );
}

export default App;

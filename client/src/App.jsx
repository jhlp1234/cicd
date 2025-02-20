import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    async function getMessage() {
      const res = await fetch('http://localhost:5000');
      const data = await res.json();

      console.log(data);
      setData(data);
    }

    getMessage();
  })

  return (
    <div>
      Hello {data}
    </div>
  )
}

export default App

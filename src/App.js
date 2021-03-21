import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddCulture from './components/AddCulture';
import Cultures from './components/Cultures';

function App() {

  const [cultures, setCultures] = useState([])

  useEffect(() => {
    const getCultures = async () => {
      const culturesFromServer = await fetchCultures()
      setCultures(culturesFromServer)
    }

    getCultures()
  }, [])

  const fetchCultures = async () => {
    const res = await fetch('http://localhost:5000/cultures')
    const data = await res.json()

    console.log(data)
    return data
  }

  const addCulture = async (culture) => {
    const res = await fetch('http://localhost:5000/cultures', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(culture)
    })

    const data = await res.json()

    setCultures([...cultures, data])
  }

  const onDelete = async (id) => {
    await fetch(`http://localhost:5000/cultures/${id}`, {
      method: 'DELETE'
    })

    setCultures(cultures.filter((culture) => culture.id !== id))
  }
  return (
    <div className="App">
      <Header title="Cultures of Middle Earth" />
      <AddCulture addCulture={addCulture} />
      <Cultures cultures={cultures} onDelete={onDelete} />
    </div>
  );
}

export default App;

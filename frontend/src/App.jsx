import { useState, useEffect } from 'react';
import axios from 'axios';

const BaseUrl = import.meta.env.VITE_BASE_URL;

export default function App() {
  const [name, setName] = useState('');
  const [superPower, setSuperPower] = useState('');
  const [humilityScore, setHumilityScore] = useState('');
  const [superheroes, setSuperheroes] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  const fetchSuperheroes = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/superheroes`);
      setSuperheroes(response.data.superheroes);
    } catch (error) {
      console.error('Error fetching superheroes:', error);
    }
  };

  const addSuperhero = async (e) => {
    e.preventDefault();
    setError('');

    if (!name || !superPower) {
      setError('All fields are required.');
      return;
    }

    if (humilityScore < 1 || humilityScore > 10) {
      setError('Humility score must be between 1 and 10.');
      return;
    }
    try {
      await axios.post(`${BaseUrl}/superheroes`, {
        name,
        super_power: superPower,
        humility_score: Number(humilityScore),
      });
      setName('');
      setSuperPower('');
      setHumilityScore('');
      fetchSuperheroes();
    } catch (error) {
      setError('Failed to add superhero.');
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 p-4 flex flex-col items-center'>
      <h1 className='text-3xl font-bold mb-4'>Superhero Manager</h1>
      <form
        className='bg-white p-4 shadow-md rounded-lg w-full max-w-md'
        onSubmit={addSuperhero}
      >
        {error && <p className='text-red-500 text-sm'>{error}</p>}
        <input
          type='text'
          placeholder='Superhero Name'
          className='w-full p-2 border rounded mt-2'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Super Power'
          className='w-full p-2 border rounded mt-2'
          value={superPower}
          onChange={(e) => setSuperPower(e.target.value)}
        />
        <input
          type='number'
          placeholder='Humility Score (1-10)'
          className='w-full p-2 border rounded mt-2'
          value={humilityScore}
          onChange={(e) => setHumilityScore(e.target.value)}
        />
        <button className='bg-blue-500 text-white p-2 rounded mt-2 w-full'>
          Add Superhero
        </button>
      </form>
      <div className='mt-6 w-full max-w-md'>
        <h2 className='text-2xl font-semibold'>Superheroes List</h2>
        <ul className='mt-2'>
          {superheroes.map((hero, index) => (
            <li key={index} className='bg-white p-2 rounded shadow mt-2'>
              <p className='font-bold'>{hero.name}</p>
              <p className='text-sm'>Power: {hero.super_power}</p>
              <p className='text-sm'>Humility Score: {hero.humility_score}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

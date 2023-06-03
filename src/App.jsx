import { Reset } from './css/Reset';
import HomePage from './pages/HomePage/HomePage'
import SignInPage from './pages/SignInPage/SignInPage';
import HabitsPage from './pages/HabitsPage/HabitsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


export default function App() {

  const [addHabit, setAddHabit] = useState(false);

  return (
    <BrowserRouter>
      <Reset/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cadastro' element={<SignInPage />} />
        <Route path='/habitos' element={<HabitsPage addHabit={addHabit} setAddHabit={setAddHabit} />} />
      </Routes>
    </BrowserRouter>
  )
}


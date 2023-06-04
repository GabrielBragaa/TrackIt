import HomePage from './pages/HomePage/HomePage'
import SignInPage from './pages/SignInPage/SignInPage';
import HabitsPage from './pages/HabitsPage/HabitsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { InfoContext } from './contexts/InfoContext';

export default function App() {

  const [addHabit, setAddHabit] = useState(false);
  const [token, setToken] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [habits, setHabits] = useState([]);

  return (
    <BrowserRouter>
      <InfoContext.Provider value={{profileImage, setProfileImage, token, setToken, habits, setHabits}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cadastro' element={<SignInPage />} />
          <Route path='/habitos' element={<HabitsPage addHabit={addHabit} setAddHabit={setAddHabit} />} />
        </Routes>
      </InfoContext.Provider>
    </BrowserRouter>
  )
}


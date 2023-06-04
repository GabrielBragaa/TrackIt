import HomePage from './pages/HomePage/HomePage'
import SignInPage from './pages/SignInPage/SignInPage';
import HabitsPage from './pages/HabitsPage/HabitsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { InfoContext } from './contexts/InfoContext';
import TodayPage from './pages/TodayPage/TodayPage';
import Historypage from './pages/HistoryPage/HistoryPage';

export default function App() {

  const [addHabit, setAddHabit] = useState(false);
  const [token, setToken] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [habits, setHabits] = useState([]);
  const [percentage, setPercentage] = useState(0);

  return (
    <BrowserRouter>
      <InfoContext.Provider value={{profileImage, setProfileImage, token, setToken, habits, setHabits, percentage, setPercentage}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cadastro' element={<SignInPage />} />
          <Route path='/habitos' element={<HabitsPage addHabit={addHabit} setAddHabit={setAddHabit} />} />
          <Route path='/hoje' element={<TodayPage />} />
          <Route path='/historico' element={<Historypage />} />
        </Routes>
      </InfoContext.Provider>
    </BrowserRouter>
  )
}


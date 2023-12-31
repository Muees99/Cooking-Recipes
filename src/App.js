import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Page Components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipes';

import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

// styles
import './App.css';


function App() {
  const {mode}= useTheme()
  return (
    <div className={`App ${mode}`}>

      <BrowserRouter>
        <Navbar/>
        <ThemeSelector/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='search' element={<Search />} />
          <Route path='recipes/:id' element={<Recipe />} />
          <Route path='*' element={<Navigate to='/' />} /> {/* Redirects to Home if no matching route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

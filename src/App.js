// import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Films from './Component/Films/Films';
import Footer from './Component/Footer/Footer';
import News from './Component/News/News';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Detail from './Component/Detail/Detail';
import More from './Component/More/More';
import FilmList from './Component/FilmList/FilmList';
import EditFilm from './Component/EditFilm/EditFilm';
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from './Component/Navigation/ThemeContext';
import { useContext } from 'react';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div className='background' style={{ backgroundImage: `url("${theme.backgroundImage}")`, color: theme.color, transition: theme.transition }}>
        <Navigation />

        <Routes>
          <Route path='/' element={<Films />}>
          </Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/more' element={<More />}></Route>
          <Route path='/filmList' element={<FilmList />}></Route>
          <Route path='/editFilm/:id' element={<EditFilm />}></Route>
          <Route path='/detail/:id' element={<Detail />}></Route>
        </Routes>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;

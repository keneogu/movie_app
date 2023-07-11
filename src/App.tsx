import {FC} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Header } from './Header';
import { PageNotFound } from './pages/PageNotFound';
import { MoviesContext } from './reducer/MovieContext';
import './App.css';

const App: FC = () => {

  return (
      <div className="App">
        <MoviesContext>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
        </Router>
        </MoviesContext>
      </div>
  );
}

export default App;

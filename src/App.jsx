import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetail from './components/movie/MovieDetail';
import TvDetail from "./components/tv/TvDetail";
import Home from './components/home/Home';
import AppProviders from "./components/context/AppProviders";
import CreditPage from "./components/credits/CreditPage";
import PersonDetail from "./components/person/PersonDetail";


const App = () => {
  return (
    <AppProviders>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tv/:id" element={<TvDetail />} />
          <Route path="/credits/:id" element={<CreditPage />} />
          <Route path="/actor/:id" element={<PersonDetail />} />
        </Routes>

      </Router>
    </AppProviders>

  )
}

export default App
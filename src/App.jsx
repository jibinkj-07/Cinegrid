import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetail from './components/movie/MovieDetail';
import TvDetail from "./components/tv/TvDetail";
import Home from './components/home/Home';
import AppProviders from "./components/context/AppProviders";
import CreditPage from "./components/credits/CreditPage";
import PersonDetail from "./components/person/PersonDetail";
import ReviewDetail from "./components/review/ReviewDetail";
import ActorCredits from "./components/credits/ActorCredits";


const App = () => {
  return (
    <AppProviders>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tv/:id" element={<TvDetail />} />
          <Route path="/credits/:id" element={<CreditPage />} />
          <Route path="/reviews/:id" element={<ReviewDetail />} />
          <Route path="/actor/:id" element={<PersonDetail />} />
          <Route path="/actor/:id/credits" element={<ActorCredits />} />
        </Routes>

      </Router>
    </AppProviders>

  )
}

export default App
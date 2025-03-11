import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetail from './components/movie/MovieDetail';
import Home from './components/home/Home';
import AppProviders from "./components/context/AppProviders";
import ActorDetail from "./components/actor/ActorDetail";
import CastPage from "./components/credits/CreditPage";


const App = () => {
  return (
    <AppProviders>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/movie/:id/credits" element={<CastPage />} />
          <Route path="/actor/:id" element={<ActorDetail />} />
        </Routes>

      </Router>
    </AppProviders>

  )
}

export default App
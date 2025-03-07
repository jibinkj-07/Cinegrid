import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetail from './components/movie/MovieDetail';
import Home from './components/home/Home';
import AppProviders from "./components/context/AppProviders";
import ActorDetail from "./components/actor/ActorDetail";


const App = () => {
  return (
    <AppProviders>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/actor/:id" element={<ActorDetail />} />
        </Routes>
      </Router>
    </AppProviders>

  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetail from './components/movie/MovieDetail';
import Home from './components/home/Home';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </Router>

  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetail from './components/movie/MovieDetail';
import Home from './components/home/Home';
import { CategoryProvider } from "./components/context/CategoryProvider";


const App = () => {
  return (
    <CategoryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </Router>
    </CategoryProvider>

  )
}

export default App
import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import SignUpPage from './pages/SignUpPage';
import LandingPage from './pages/LandingPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="signup" element={<SignUpPage />}></Route>
        <Route exact path="/" element={<LandingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import {BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import SearchPage from "./pages/SearchPage/SearchPage"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<SearchPage/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>


      </BrowserRouter>
  );
}

export default App;

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Reviews from './components/Reviews'
import Categories from './components/Categories';
import Authors from './components/Authors';
import { UserContext } from './contexts/UserContext'
import { useState } from 'react';
import RequireLogin from './utils/RequireLogin';


function App() {
  const [currentUser, setCurrentUser] = useState([])
  return (
    <BrowserRouter>
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <div className="App">
          <Header />
          <RequireLogin />
          <Nav />
          <Routes>
            <Route path="/reviews" element ={<Reviews />} />
            <Route path="/categories" element ={<Categories />} />
            <Route path="/authors" element ={<Authors />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

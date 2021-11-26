import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Reviews from './components/Reviews'
import IndividualReview from './components/IndividualReview'
import Categories from './components/Categories';
import Authors from './components/Authors';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext'
import RequireLogin from './utils/RequireLogin';


function App() {
  const {user} = useContext(UserContext);
  return (

    <BrowserRouter>
          <div className="App">
            <Header />
            <RequireLogin user={user}>
              <Nav />
              <Routes>
                <Route path="/reviews" element ={<Reviews />} />
                <Route path="/reviews/:review_id" element ={<IndividualReview />} />
                <Route path="/categories" element ={<Categories />} />
                <Route path="/authors" element ={<Authors />} />
              </Routes>
            </RequireLogin>
          </div>
    </BrowserRouter>
    
  );
}

export default App;

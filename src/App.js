import './App.css';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import Header from './components/Header';
import Reviews from './components/Reviews'
import IndividualReview from './components/IndividualReview'
import Categories from './components/Categories';
import Authors from './components/Authors';
import { useContext, useState } from 'react';
import RequireLogin from './utils/RequireLogin';
import PersistentDrawerLeft from './components/NavDrawer';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (   
    <BrowserRouter>
        <div className="App">
          {/* <Header /> */}
          <PersistentDrawerLeft className="DrawerLeft"/>
          <RequireLogin user={currentUser}>
            
            <Routes>
              <Route path="/" element ={<Reviews />} />
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

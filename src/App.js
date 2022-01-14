import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Reviews from './components/Reviews'
import IndividualReview from './components/IndividualReview'
import Categories from './components/Categories';
import Authors from './components/Authors';
import RequireLogin from './utils/RequireLogin';
import PersistentDrawerLeft from './components/NavDrawer';
import UserProfile from './components/UserProfile';

function App() {
  return (   
    <BrowserRouter>
        <div className="App">
          <PersistentDrawerLeft className="DrawerLeft"/>
          <RequireLogin>
            <Routes>
              <Route path="/" element ={<Reviews />} />
              <Route path="/reviews" element ={<Reviews />} />
              <Route path="/reviews/:review_id" element ={<IndividualReview />} />
              <Route path="/categories" element ={<Categories />} />
              <Route path="/authors" element ={<Authors />} />
              <Route path="/user-profile" element ={<UserProfile />} />
            </Routes>
          </RequireLogin>
        </div>
    </BrowserRouter>
  );
}

export default App;

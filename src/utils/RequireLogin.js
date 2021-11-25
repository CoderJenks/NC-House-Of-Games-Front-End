import { UserContext } from '../contexts/UserContext'
import { useContext} from 'react';
import WelcomePage from '../components/WelcomePage';

const RequireLogin = ({children}) => {
  const {isLoggedIn} = useContext(UserContext);
  return isLoggedIn ? children : <WelcomePage />;

};

export default RequireLogin
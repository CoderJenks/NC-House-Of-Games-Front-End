import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const UserProfile = () => {
    const {user, isLoggedIn} = useContext(UserContext);
    if (isLoggedIn){ 
        return (
            <main className="Section">
                <h2>User Profile</h2>
                <p> You are currently logged in as {user.username}</p>

            </main>
        );
    }
    // else{
    //     return (
    //         <main className="Section">
    //             <h2>User Profile</h2>

    //         </main>
    //     );
    // }
};

export default UserProfile;
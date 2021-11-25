import { useContext, useState} from "react";
import { UserContext } from "../contexts/UserContext";

const WelcomePage = () => {
    const [username, setUsername] = useState('jessjelly');
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        setUser({username});
    };

    return (
        <div className = "WelcomePage">
            <h2>Welcome Page</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        ></input>
                    </label>
                    <button>Login</button>
                </form>
        </div>
    );
};

export default WelcomePage;
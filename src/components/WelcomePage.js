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
        <div className = "Section">
            <h2>Welcome to NC House of Games!</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Please enter your username: <br/><br/>
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
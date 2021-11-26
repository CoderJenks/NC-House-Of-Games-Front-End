import { useContext, useState} from "react";
import { UserContext } from "../contexts/UserContext";
import {updateReviewVotesById} from "../utils/api"

const Vote = ({votes, review_id, review_owner}) => {
    const [voteModifier, setVoteModifier] = useState(0);
    const {user} = useContext(UserContext)
    const isDisabled = user.username === review_owner

    return (
        <div>
            <p>Votes: {votes + voteModifier}</p>
            <button onClick = {() => {
                updateReviewVotesById(review_id);
                setVoteModifier((voteModifier) => {
                    return voteModifier + 1;
                });
            }}
            disabled={isDisabled}
            >
                Add Vote
            </button>
        </div>
    )
}

export default Vote;
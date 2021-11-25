import { useState } from "react";
import {updateReviewVotesById} from "../utils/api"

const Vote = ({votes, review_id}) => {
    const [voteModifier, setVoteModifier] = useState(0);
    return (
        <div>
            <p>Votes: {votes + voteModifier}</p>
            <button onClick = {() => {
                updateReviewVotesById(review_id);
                setVoteModifier((voteModifier) => {
                    return voteModifier + 1;
                });
            }}
            >
                Add Vote
            </button>
        </div>
    )
}

export default Vote;
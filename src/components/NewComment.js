import { useContext, useState} from "react";
import { UserContext } from "../contexts/UserContext";
import {postReviewCommentById} from "../utils/api"

const NewComment = ({review_id}) => {
    

    const [commentText, setCommentText] = useState('');
    const [comment, setComment] = useState('');
    const {user} = useContext(UserContext)

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        setComment(commentText)
        console.log(commentText, comment)
        postReviewCommentById(review_id,user.username,comment);
    };
    //currently only works if we submit same comment twice
    //need to re-render as well

    return (
        <div>
            <form onSubmit={handleCommentSubmit}>
                <label>
                    Submit new comment:
                    <input
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    ></input>
                </label>
                <button>Submit</button>
            </form>
        </div>        
    )
};

export default NewComment;
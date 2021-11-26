import { useContext, useState} from "react";
import { UserContext } from "../contexts/UserContext";
import {postReviewCommentById} from "../utils/api"

const NewComment = ({review_id, setComments, setCommentsLoading}) => {
    

    const [commentText, setCommentText] = useState('');
    const {user} = useContext(UserContext)

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        postReviewCommentById(review_id,user.username,commentText)
        .then((newComment) => {
            console.log(`comment ${newComment.comment_id} created`)
            return setComments((prevCommentsList) => {
                const newCommentsList = [newComment, ...prevCommentsList];
                return newCommentsList;
            });
        });
        
    };

    return (
        <>
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
        </>        
    )
};

export default NewComment;
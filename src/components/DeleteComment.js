import { useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteCommentById}  from "../utils/api"

const DeleteComment = ({comment_id, comment_author, setComments}) => {
    const {user} = useContext(UserContext)
    const isEnabled = user.username === comment_author

    return (
        <div>
            <button onClick = {() => {
                setComments((prevCommentsList) => {
                    const newCommentsList = prevCommentsList.filter((comment) => 
                    (comment.comment_id !== comment_id)
                    );
                    return newCommentsList;
                });

                deleteCommentById(comment_id)
                .then((confirmation) => {
                    console.log(confirmation.msg)
                });
            }}
            disabled={!isEnabled}
            >
                Delete Comment
            </button>
        </div>
    )
}

export default DeleteComment;
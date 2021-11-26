import { useContext, useState} from "react";
import { UserContext } from "../contexts/UserContext";
import { deleteCommentById}  from "../utils/api"

const DeleteComment = ({comment_id, comment_author}) => {
    // const [voteModifier, setVoteModifier] = useState(0);
    const {user} = useContext(UserContext)
    const isEnabled = user.username === comment_author

    return (
        <div>
            <button onClick = {() => {
                deleteCommentById(comment_id);
                console.log("comment deleted")
            }}
            disabled={!isEnabled}
            >
                Delete Comment
            </button>
        </div>
    )
}

export default DeleteComment;
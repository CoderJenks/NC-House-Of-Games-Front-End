import { useParams } from "react-router-dom";
import useReviewById from '../hooks/useReviewById';
import useComments from '../hooks/useComments';
import Vote from "./Vote";
import NewComment from "./NewComment";
import DeleteComment from "./DeleteComment";
import '../IndividualReview.css';

const SingleReview = () => {
    const {review_id} = useParams();
    const {review, isLoading, err} = useReviewById(review_id);
    const {comments, setComments, isCommentsLoading, setCommentsLoading, commentsErr} = useComments(review_id);

    if(isLoading) return <p>review loading...</p>;
    if(isCommentsLoading) return <p>comments loading...</p>;
    if(err) return <p className="error">Error Status {err[0]}: {err[1]}</p>
    if(commentsErr) return <p className="error">Error Status {err[0]}: {err[1]}</p>

    return (
        <main className="Section">
            <h2 className="individual-review-title">{review.title}</h2>
            <h3 className="review-designer">  Game designed by: {review.designer}</h3>
            <p className="review-category">  Game category: <span>{review.category}</span> </p>
            <img className="review-img" src={review.review_img_url} alt={review.title} />
            
            <p className="review-owner">  Reviewed by: {review.owner}</p>
            {/* <p className="review-created_at">  created_at: {review.created_at}</p> */}
            <p className="review-body">  {review.review_body}</p>
            <div>
                Like this review? If so, then please vote for it!
            <Vote className="Review-card-votes" votes={review.votes} review_id={review.review_id} review_owner={review.owner}/>
            </div>
            <div className="Comments-Section">
                <h3 className="comments-title">Comments</h3>
                <NewComment className="Review-card-newComment" review_id={review.review_id} setComments={setComments} setCommentsLoading={setCommentsLoading}/>
                <ul className="Comments-display">
                {comments.map((comment) => {
                    return (
                        <li className="comment-container" key={comment.comment_id}>
                            <p className="comment-card-body" >{comment.body}</p>
                            <p className="comment-card-author" >Comment from: {comment.author}</p>
                            {/* <p className="comment-card-votes" >Comment votes: {comment.votes}</p> */}
                            <DeleteComment className="DeleteComment" comment_id={comment.comment_id} comment_author={comment.author} setComments={setComments}/>
                            </li>
                    );
                })}
            </ul>
            </div>
        </main>
    );
};

export default SingleReview;
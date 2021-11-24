import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";

const SingleReview = () => {
    const {review_id} = useParams();
    const [review, setreview] = useState([]);
    

    useEffect(() => {
        getReviewById(review_id).then((reviewObject) => {
            setreview(reviewObject)
        });
    }, [review_id]);

    return (
        <main className="Single-Review">
            <h2 className="individual-review-title">{review.title}</h2>
            <img className="review-img" src={review.review_img_url} alt={review.title} />
            <p className="review-category">  Category: {review.category}</p>
            <p className="review-designer">  designer: {review.designer}</p>
            <p className="review-owner">  owner: {review.owner}</p>
            <p className="review-created_at">  created_at: {review.created_at}</p>
            <p className="review-body">  review_body: {review.review_body}</p>
        </main>
    );
};

export default SingleReview;
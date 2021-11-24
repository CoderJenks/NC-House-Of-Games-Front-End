import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import useReviewById from '../hooks/useReviewById';


const SingleReview = () => {
    const {review_id} = useParams();
    const {review, isLoading, err} = useReviewById(review_id);

    if(isLoading) return <p>loading...</p>;
    if (err) return <p>Error Status {err[0]}: {err[1]}</p>

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
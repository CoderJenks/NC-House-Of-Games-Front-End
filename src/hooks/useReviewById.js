import { useEffect, useState } from 'react';
import { getReviewById } from "../utils/api";


const useReviewById = (review_id) => {
    const [review, setReview] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [err, setErr] = useState(null);
    
    useEffect(() => {
        setLoading(true);

        getReviewById(review_id)
        .then((reviewObject) => {
            setLoading(false);
            setReview(reviewObject)
        })
        .catch((err) => {
            setLoading(false);
            setErr([err.response.status, err.response.data.msg])
        });
    }, [review_id]);

    return {review, isLoading, err};
};

export default useReviewById;
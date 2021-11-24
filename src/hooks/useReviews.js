import { useEffect, useState } from 'react';
import { getReviews } from '../utils/api';


const useReviews = (query) => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setLoading(true);

        getReviews(query)
        .then((reviewsFromServer) => {
            setLoading(false);
            setReviews(reviewsFromServer);
        })
        .catch((err) => {
            setLoading(false);
            setErr([err.response.status, err.response.data.msg])
        });
    }, [query]);

    return {reviews, isLoading, err};
};

export default useReviews;
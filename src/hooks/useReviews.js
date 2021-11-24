import { useEffect, useState } from 'react';
import { getReviews } from '../utils/api';


const useReviews = (query) => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getReviews(query)
        .then((reviewsFromServer) => {
            setLoading(false);
            setReviews(reviewsFromServer);
        })
    }, [query]);

    return {reviews, isLoading};
};

export default useReviews;
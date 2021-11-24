import { useEffect, useState } from 'react';
import { getReviews } from '../utils/api';


const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviews().then((reviewsFromServer) => {
            setReviews(reviewsFromServer);
        });
    }, []);

    return reviews;
};

export default useReviews;
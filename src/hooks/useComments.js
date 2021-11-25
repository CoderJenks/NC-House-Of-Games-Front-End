import { useEffect, useState } from 'react';
import { getCommentsById } from '../utils/api';


const useComments = (review_id) => {
    const [comments, setComments] = useState([]);
    const [isCommentsLoading, setCommentsLoading] = useState(true);
    const [commentsErr, setCommentsErr] = useState(null);
    

    useEffect(() => {
        setCommentsLoading(true);
        setCommentsErr(null);

        getCommentsById(review_id)
        .then((commentsFromServer) => {
            setCommentsLoading(false);
            setComments(commentsFromServer);
        })
        .catch((commentsErr) => {
            setCommentsLoading(false);
            setCommentsErr([commentsErr.response.status, commentsErr.response.data.msg])
        });
    }, [review_id]);

    return {comments, isCommentsLoading, commentsErr};
};

export default useComments;
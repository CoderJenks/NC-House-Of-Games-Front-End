import axios from 'axios';

const ncGamesApi = axios.create({
    baseURL: 'https://nc-games-2021-sj.herokuapp.com/api',
});

export const getReviews = (query) => {
        return ncGamesApi.get(`/reviews${query}`).then((res) => {
            return res.data.reviews;
        });
    // }
};

export const getCategories = () => {
    return ncGamesApi.get('/categories').then((res) => {
        return res.data.categories;
    });
};

export const getReviewById = (id) => {
    return ncGamesApi.get(`/reviews/${id}`).then((res) => {
        return res.data.review;
    });
};

export const getCommentsById = (id) => {
    return ncGamesApi.get(`/reviews/${id}/comments`).then((res) => {
        return res.data.comments;
    });
};

export const updateReviewVotesById = (id) => {
    return ncGamesApi.patch(`/reviews/${id}`,{inc_votes:1}).then((res) => {
        return res.data.review;
    });
};

export const postReviewCommentById = (id, username, comment_body) => {
    return ncGamesApi.post(`/reviews/${id}/comments`,{body:comment_body, author:username}).then((res) => {
        return res.data.comment;
    });
};

export const deleteCommentById = (id) => {
    return ncGamesApi.delete(`/comments/${id}`).then(() => {
        return {msg:`comment ${id} deleted`};
    });
};
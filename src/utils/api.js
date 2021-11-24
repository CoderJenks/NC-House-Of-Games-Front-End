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
import useReviews from "../hooks/useReviews";
import { Link , useLocation} from 'react-router-dom';
import Vote from "./Vote";

const Reviews = () => {
    const query = useLocation().search;
    const {reviews, isLoading, err, category} = useReviews(query);

    if(isLoading) return <p>loading...</p>
    if(err) return <p className="error">Error Status {err[0]}: {err[1]}</p>


    return (
        <main className="Section">
            <h2>Reviews</h2>
            <h3>{category}</h3>
            <ul className="Reviews">
                {reviews.map((review) => {
                    return (
                        <li className = "Review-card" key={review.review_id}>
                            <Link className="Review-card-title" to={`/reviews/${review.review_id}`}>
                                <h2 >{review.title}</h2>
                            </Link>
                                <p className="Review-card-designer" >Designer: {review.designer}</p>
                                <img className="Review-card-img" src={review.review_img_url} alt={review.title} />
                                <p className="Review-card-author" >Review Author: {review.owner}</p>
                                <Vote className="Review-card-votes" votes={review.votes} review_id={review.review_id} review_owner={review.owner} />
                            </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Reviews;
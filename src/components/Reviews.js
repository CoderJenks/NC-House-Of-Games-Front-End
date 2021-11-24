import useReviews from "../hooks/useReviews";
import { Link } from 'react-router-dom';

const Reviews = () => {
    const reviews = useReviews();

    return (
        <main className="Section">
            <h2>Reviews</h2>
            <ul className="Reviews">
                {reviews.map((review) => {
                    return (
                        <li className = "Review-card" key={review.review_id}>
                            <Link to={`/reviews/${review.review_id}`}>
                                <h2 className="Review-card-title" >{review.title}</h2>
                                <p className="Review-card-designer" >Designer: {review.designer}</p>
                                <img className="Review-card-img" src={review.review_img_url} alt={review.title} />
                                {/* <p className="Review-card-author" >Review Author: {review.owner}</p>
                                <p className="Review-card-votes" >Votes: {review.votes}</p> */}
                            </Link>
                            </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Reviews;
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
                        <li className = "Review-container" key={review.review_id}>
                            <div className = "Review-card">
                             <Link className="image-container" to={`/reviews/${review.review_id}`}>
                                <img className="Review-card-img" src={review.review_img_url} alt={review.title} />
                            </Link>
                            <div className="Review-details">
                                <Link className="Review-card-title" to={`/reviews/${review.review_id}`}>
                                    <h3 >{review.title}</h3>
                                </Link>
                                <p className="Review-card-designer" >Designer: {review.designer}</p>
                                <p className="Review-card-author" >Review Author: {review.owner}</p>
                            
                            </div>
                            
                            <div className="Review-card-votes" >
                            <Vote votes={review.votes} review_id={review.review_id} review_owner={review.owner} />
                            </div>
                            
                            </div>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Reviews;
import useCategories from "../hooks/useCategories";
import { Link } from 'react-router-dom';

const Categories = () => {
    const {categories, isLoading} = useCategories();

    if(isLoading) return <p>loading...</p>

    return (
        <main className="Section">
            <h2>Categories</h2>
            <ul className="Categories">
                {categories.map((category) => {
                    return (
                        <li className = "Category-card" key={category.slug}>
                            <Link to={`/reviews?category=${category.slug}`}>
                                <h2 className="category-card-title" >Category: {category.slug}</h2>
                                <p className="category-card-description" >Description: {category.description}</p>
                            </Link>
                            </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Categories;
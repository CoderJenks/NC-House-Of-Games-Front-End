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
                        <li className = "Category-container" key={category.slug}>
                            <Link className = "Category-card" to={`/reviews?category=${category.slug}`}>
                                <h3 className="category-card-title" >{category.slug}</h3>
                                <p className="category-card-description" >{category.description}</p>
                            </Link>
                            </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default Categories;
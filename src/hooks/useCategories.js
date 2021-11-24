import { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';


const useCategories = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getCategories()
        .then((categoriesFromServer) => {
            setLoading(false);
            setCategories(categoriesFromServer);
        });
    }, []);

    return {categories, isLoading};
};

export default useCategories;
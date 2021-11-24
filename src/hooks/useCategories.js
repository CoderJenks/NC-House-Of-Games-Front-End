import { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';


const useCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((categoriesFromServer) => {
            setCategories(categoriesFromServer);
        });
    }, []);

    return categories;
};

export default useCategories;
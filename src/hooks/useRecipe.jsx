import { useState, useEffect } from 'react';
import axios from '../api/axios';

const useRecipe = (id) => {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            setLoading(true);
            try {
                const response = await axios(`/recipes/${id}`);
                setRecipe(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    return { recipe, loading, error };
};

export {useRecipe};

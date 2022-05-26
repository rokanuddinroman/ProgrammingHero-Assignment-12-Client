import React, { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReviews] = useState([])
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        fetch('http://localhost:4000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setSpinner(false)
            })
    }, [reviews])
    return { reviews, setReviews, spinner };
};

export default useReview;
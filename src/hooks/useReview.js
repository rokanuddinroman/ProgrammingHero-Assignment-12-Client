import React, { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [reviews])
    return { reviews, setReviews };
};

export default useReview;
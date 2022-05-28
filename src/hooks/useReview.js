import React, { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReviews] = useState([])
    const [spinner, setSpinner] = useState(true)
    useEffect(() => {
        fetch('https://salty-shelf-96840.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setSpinner(false)
            })
    }, [reviews])
    return { reviews, setReviews, spinner };
};

export default useReview;
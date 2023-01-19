import React, { useEffect, useState } from "react";

const useReview = () => {
  const [reviews, setReviews] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch("https://qwerty-gi38.onrender.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setSpinner(false);
      });
  }, [reviews]);
  return { reviews, setReviews, spinner };
};

export default useReview;

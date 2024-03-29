import React, { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([])
    const [spinner, setSpinner] = useState(false)
    useEffect(() => {
        setSpinner(true)
        fetch('https://qwerty-gi38.onrender.com/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSpinner(false)
            })
    }, [])
    return { products, setProducts, spinner };
};

export default useProduct;
import React from 'react';

const productDataLoad =async () => {
    const productsData = await fetch('products.json')
    const products = await productsData.json();
    

    return { products};
};

export { productDataLoad };
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';
import { addToDB } from '../Utility/commonJs';

const Shop = () => {
	const products = useLoaderData();
	 const handelAddToCart = product => {
			addToDB(product.id)
		};

    return (
		<div className='page-container grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
			{products.map(pd => (
				<Product
					key={pd.id}
					product={pd}
					handelAddToCart={handelAddToCart} />
			))}
		</div>
	);
};

export default Shop;
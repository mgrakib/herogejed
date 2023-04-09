import React from 'react';

const Product = ({ product, handelAddToCart }) => {
	const { category, name, picture, price } = product;
	return (
		<div>
			<div className='w-full h-64 '>
				<img
					src={picture}
					alt=''
					className='rounded-lg object-cover w-full h-full '
				/>
			</div>
			<div className='py-5'>
				<h1 className='text-2xl font-bold'>{name}</h1>
				<p>Category: {category}</p>
				<p className='text-gray-800 font-bold'>Price: {price}</p>
			</div>
			<button
				onClick={() => handelAddToCart(product)}
				className='py-3 w-[75%] mx-auto bg-[#82cdd9] hover:bg-[#22D3EE] hover:rounded-3xl duration-700'
			>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
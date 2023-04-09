import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.jpg'

const Home = () => {
    return (
		<>
			<div className='page-container text-center bg-[#E5E7EB]'>
				<h1 className='text-6xl font-bold'>Welcome To HeroGadget</h1>
				<p className='my-10 text-xl'>
					Best E-commerce platform for buying high quality Smart Home{" "}
					<br />
					Appliances at extremely affordable Price.
				</p>
				<div className='flex gap-5 items-center justify-center'>
					<Link to={'/shop'}>
						<button className='btn-bg'>Shop Now</button>
					</Link>
					<Link>
						<button className='btn-outline'>Learn More</button>
					</Link>
				</div>
			</div>
			<div className='page-container'>
				<img
					src={heroImg}
					alt=''
				/>
			</div>
		</>
	);
};

export default Home;
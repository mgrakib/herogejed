import React from 'react';
import LOGO from '../../public/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
const Header = () => {
    return (
		<div className='page-container flex items-center justify-between'>
			<NavLink
				className='flex items-center gap-4'
				to={"/"}
			>
				<div className='w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#A5F3FC]'>
					<img
						src={LOGO}
						alt=''
						className='w-[20px]'
					/>
				</div>
				<h1 className='text-3xl font-bold '>HeroGadget</h1>
			</NavLink>
			<ul className='flex gap-10'>
				<NavLink
					to={"/"}
					className={({ isActive, isPending }) =>
						isActive ? "active" : "default"
					}
				>
					Home
				</NavLink>
				<NavLink
					to={"/shop"}
					className={({ isActive }) =>
						isActive ? "active" : "default"
					}
				>
					Shop
				</NavLink>
				<NavLink
					to={"/cart"}
					className={({ isActive }) =>
						isActive ? "active" : "default"
					}
				>
					<ShoppingCartIcon className='h-6 w-6 text-blue-500' />
				</NavLink>
				<NavLink
					to={"/about"}
					className={({ isActive }) =>
						isActive ? "active" : "default"
					}
				>
					About
				</NavLink>
			</ul>
		</div>
	);
};

export default Header;
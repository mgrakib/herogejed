import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import Error from './components/Error';
import { productDataLoad } from "./Utility/productDataLoad";
import Cart from './components/Cart';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		// errorElement: <Error />,
		loader: productDataLoad,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "shop",
				element: <Shop />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

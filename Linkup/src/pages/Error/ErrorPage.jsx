import { useRouteError } from "react-router-dom";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const [loading, setLoading] = useState(false);

	let navigate = useNavigate();
	const homePage = () => {
		navigate('/');
	}

	useEffect(() => {
	  	setLoading(true);
		setTimeout(() => {
			setLoading(false)
		}, 3000);
	}, [])
	


	return (
		<div>
			{/* Settings
			<Link to={'/'}>Home</Link>
			<Link to={'/signup'}>Sign Up</Link>
			<Link to={'/login'}>Log In</Link> */}
			{loading ? ( 
				<div className='loader-container'>
					<img className='img-loader' src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmRjNTVlY2YzYTA2YjUzYzUyOWJiN2JkMGU0ZjA0NjNkZjhiNjliYiZjdD1n/3oEjI6SIIHBdRxXI40/giphy.gif" alt="giff" />
				</div>) 
			: (
				<div className='errorPage'>
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAaVBMVEX///8AAAAvLy/Pz8+Xl5dnZ2f19fVRUVFra2sPDw9ubm4mJibz8/Pi4uIFBQVCQkKurq45OTkVFRVPT0+6urrBwcHt7e0dHR2goKAqKiqqqqpWVlbk5ORHR0eJiYmzs7OFhYV5eXnZ2dmoE50cAAADXUlEQVR4nO3cWXuiMACFYTNo2BTQWqcubW3//48cQ11AwrAkkoM97xVDncd8skQvwmRCRERkiRdtQzESSTzzajJk4HpwXQVS25G6Hld3qa5kdMdDCTTXh9ofZ/P+V9iw5lmsRly9TiLVsXEwot42sfaQbE97MwfDMZCpz76yV913R3Ne/ZifhpxU9qoTzsFgjGjH/KQhchaGP9ONbgtFi5DZ9Sat20LRIiT/yhXWbaH4TSH595WobgtFm4s9CMNI1m2h+E2333FgCJrakDFiCJrnDul5zTnDEDQMQcMQNAxBwxA0DEHDEDQMQcMQNAxBwxA0DEHDEDQMQcMQNAxBwxA0DEHDEDQMQcMQNAxBwxA0DEHDEDQMQcMQNAxBw5A762i5SpLV8uvVzrg6sxMy/Suu4jdbY+vERoi3FSXLb3vja81CyC4Rd0IH55d5yO4+4yS5L5G7qaFdw2JB4xCvcjyU1aH8qhfdi7rxHxyy1b/tS/lV2tpuqsvurYZM6953XXrZ0jwkfWzI+b579C/v5x9173v4mhk6NjxMwzBkfRm+PJfs5eVyODT/b5sMQyJRLrl1iIHnRcOQ27mflxQ6xMzySBsYhqxEsaTYId4tj7SBYUjxtrqX0i/8c2l5pA0MQ0S7kHn6p5f39o+ZsXdq7aXvF0uKp9a36CdZDBVyu9jz66NYUrrYF14v7TtMQ4JSR6lkXLffz/Oo/cv96rohOnyaNhiGXC6Sj+t9V/8V5fFMQz7qrtNPu+NsZBoiY33H0AfE/PfIq/anRlj+2a6bR25zRP0sM9w8MtGfXMndiaWbR25zRP0sM9w8oi9JKg+w08wji//+deh5JPe5KnfEdc/jfCQbIZNNVLhQwqOThyNZCTmlfKR5y8p/c/Q4QUshysH7dviQSoshbjEEDUPQMAQNQ9AwBA1D0DAEDUPQMAQNQ9AwBA1D0DAEDUPQMAQNQ9AwBA1D0DAEDUPQMAQNQ9AwBA1D0DAEDUPQMAQNQ9AwBA1D0DAEDUPQaMesVhk5WmHU11zonpyiVntWVuBhy05D3lb2zk57Y4frpbrbqM8+qOz21AkXZ6M5u+ZZvmJYs/zxut5+TKoHZDKRqetRdZdq13HK0R2ToG49qhfEFp4lNYxkG7hYHkxERE/qH5X+JyNt7JgRAAAAAElFTkSuQmCC" alt="" />
				<h1 className='page-title'>404 Error</h1>
				<h2 className='page-header'>Sorry page not found</h2>
				<p className='page-text'>Click the button below to be redirected to the home page.</p>
				<button className='home-btn' onClick={homePage}>Home</button>
			</div>
			)}
		</div>
	);
}
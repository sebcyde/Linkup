import React from 'react';
import RightSide from '../../components/Home/RightSide';
import Center from '../../components/Home/Center';
import LeftSide from '../../components/Home/LeftSide';

export default function HomeMain() {
	return (
		<div className="section-wrapper">
			<LeftSide />
			<Center />
			<RightSide />
		</div>
	);
}

import React from 'react';
import TopNavbar from '../../components/Global/TopNavbar';
import Menu from '../../Components/Settings/Menu';
import SettingsWindow from '../../components/Settings/SettingsWindow';

type Props = {};

const Settings = (props: Props) => {
	return (
		<div className="SettingsPage">
			<TopNavbar />
			<div className="SettingsContainer">
				<Menu />
				<SettingsWindow />
			</div>
		</div>
	);
};

export default Settings;

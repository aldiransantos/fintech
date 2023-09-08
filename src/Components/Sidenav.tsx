import React from 'react';
import { useData } from '../Context/DataContext';

const Sidenav = () => {
	const { data } = useData();
	console.log(data);

	return <div>Sidenav</div>;
};

export default Sidenav;

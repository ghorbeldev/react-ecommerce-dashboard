import React from 'react';
import data from '../../constants/data';
import './overall-list.scss';
const icons = [
	<i className='bx bx-receipt'></i>,
	<i className='bx bx-user'></i>,
	<i className='bx bx-cube'></i>,
	<i className='bx bx-dollar'></i>,
];
const OverallList = () => {
	return (
		<ul className='overall-list'>
			{data.overall.map((item, index) => (
				<li key={`overall-list__item-${index}`} className='overall-list__item'>
					<div className='overall-list__item__icon'>{icons[index]}</div>
					<div className='overall-list__item__info'>
						<div className='title'>{item.value}</div>
						<span>{item.title}</span>
					</div>
				</li>
			))}
		</ul>
	);
};

export default OverallList;
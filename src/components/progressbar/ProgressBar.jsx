import React, { useEffect, useRef } from 'react';
import './progress-bar.scss';
const ProgressBar = ({ value }) => {
	const barInnerRef = useRef();
	useEffect(() => {
		barInnerRef.current.style.width = `${value}%`;
	}, [value]);
	return (
		<div className='progress-bar'>
			<div className='progress-bar__inner' ref={barInnerRef}></div>
		</div>
	);
};

export default ProgressBar;

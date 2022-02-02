import React from 'react';
import './dashboard-wrapper.scss';
const DashboardWrapper = ({ children }) => {
	return <div className='dashboard-wrapper'>{children}</div>;
};

export default DashboardWrapper;
export const DashboardWrapperMain = ({ children }) => {
	return <div className='dashboard-wrapper__main'>{children}</div>;
};
export const DashboardWrapperRight = ({ children }) => {
	return <div className='dashboard-wrapper__right'>{children}</div>;
};

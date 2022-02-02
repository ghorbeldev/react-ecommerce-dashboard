import React from 'react';
import DashboardWrapper, {
	DashboardWrapperMain,
	DashboardWrapperRight,
} from '../components/dashboard-wrapper/DashboardWrapper';
import Box from '../components/box/Box';
import SummaryBox, {
	SummaryBoxSpecial,
} from '../components/summary-box/SummaryBox';
import data from '../constants/data';
import colors from '../constants/colors';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import OverallList from '../components/overall-list/OverallList';
import RevenueList from '../components/revenue-list/RevenueList';
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	BarElement,
	Title,
	Legend,
	Tooltip
);
const Dashboard = () => {
	return (
		<DashboardWrapper>
			<DashboardWrapperMain>
				<div className='row'>
					<div className='col-8 col-md-12'>
						<div className='row'>
							{data.summary.map((item, index) => (
								<div
									className='col-6 col-md-6 col-sm-12 mb'
									key={`summary-${index}`}
								>
									<SummaryBox item={item} />
								</div>
							))}
						</div>
					</div>
					<div className='col-4 hide-md'>
						<SummaryBoxSpecial item={data.revenueSummary} />
					</div>
				</div>
				<div className='row'>
					<div className='col-12'>
						<Box>
							<RevenueByMonth />
						</Box>
					</div>
				</div>
			</DashboardWrapperMain>
			<DashboardWrapperRight>
				<div className='title mb-1'>Overall</div>
				<div className='mb-1'>
					<OverallList />
				</div>
				<div className='title mb-1'>Revenue by channel</div>
				<div className='mb-1'>
					<RevenueList />
				</div>
			</DashboardWrapperRight>
		</DashboardWrapper>
	);
};

export default Dashboard;
export const RevenueByMonth = props => {
	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			xAxes: {
				grid: {
					display: false,
					drawBorder: false,
				},
			},
			yAxes: {
				grid: {
					display: false,
					drawBorder: false,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
			},
		},
		elements: {
			bar: {
				backgroundColor: colors.orange,
				borderRadius: 20,
				borderSkipped: 'bottom',
			},
		},
	};
	const chartData = {
		labels: data.revenueByMonths.labels,
		datasets: [
			{
				label: 'Revenue',
				data: data.revenueByMonths.data,
			},
		],
	};
	return (
		<>
			<div className='title'>Revenue by months</div>
			<div>
				<Bar options={chartOptions} data={chartData} height={'300px'} />
			</div>
		</>
	);
};

import React from 'react';
import {
	buildStyles,
	CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import Box from '../box/Box';
import colors from '../../constants/colors';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import './summary-box.scss';
const SummaryBox = ({ item }) => {
	return (
		<Box>
			<div className='summary-box'>
				<div className='summary-box__info'>
					<div className='summary-box__info__title'>
						<div>{item.title}</div>
						<span>{item.subtitle}</span>
					</div>
					<div className='summary-box__info__value'>{item.value}</div>
				</div>
				<div className='summary-box__chart'>
					<CircularProgressbarWithChildren
						value={item.percent}
						strokeWidth={10}
						styles={buildStyles({
							pathColor: item.percent < 50 ? colors.red : colors.purple,
							trailColor: 'transparent',
							strokeLinecap: 'round',
						})}
					>
						<div className='summary-box__chart__value'>{item.percent}%</div>
					</CircularProgressbarWithChildren>
				</div>
			</div>
		</Box>
	);
};
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);
export default SummaryBox;
export const SummaryBoxSpecial = ({ item }) => {
	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			xAxis: {
				display: false,
			},
			yAxis: {
				display: false,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
		elements: {
			point: {
				radius: 0,
			},
		},
	};
	const chartData = {
		labels: item.chartData.labels,
		datasets: [
			{
				label: 'Revenue',
				data: item.chartData.data,
				borderColor: '#fff',
				tension: 0.5,
			},
		],
	};
	return (
		<Box purple fullheight>
			<div className='summary-box-special'>
				<div className='summary-box-special__title'>{item.title}</div>
				<div className='summary-box-special__value'>{item.value}</div>
				<div className='summary-box-special__chart'>
					<Line data={chartData} options={chartOptions} width='100%' />
				</div>
			</div>
		</Box>
	);
};

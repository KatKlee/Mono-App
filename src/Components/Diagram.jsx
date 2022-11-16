import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
import SwitchDiagramButton from './Buttons/SwitchDiagramButton';

const DemoLine = () => {
	const [data1, setData1] = useState([]);
	const [diagramState, setDiagramState] = useState('Month');

	const diagramData = [
		{ Date: 'Januar', scales: 1000 },
		{ Date: 'Februar', scales: 1200 },
		{ Date: 'March', scales: 1500 },
		{ Date: 'April', scales: 1100 },
		{ Date: 'May', scales: 1400 },
		{ Date: 'Juny', scales: 1000 },
		{ Date: 'July', scales: 1800 },
		{ Date: 'August', scales: 1500 },
		{ Date: 'September', scales: 1450 },
		{ Date: 'November', scales: 1120 },
		{ Date: 'Dezember', scales: 1090 },
	];

	const data = [
		{
<<<<<<< HEAD
			"Date": "Jan",
			"scales": 1998
		},
		{
			"Date": "Feb",
			"scales": 1850
		},
		{
			"Date": "Mar",
			"scales": 1720
		},
		{
			"Date": "Apr",
			"scales": 1818
		},
		{
			"Date": "May",
			"scales": 1920
		},
		{
			"Date": "Jun",
			"scales": 1802
		},
		{
			"Date": "Jul",
			"scales": 1945
		},
		{
			"Date": "Aug",
			"scales": 1856
		},
		{
			"Date": "Sep",
			"scales": 2107
		},
		{
			"Date": "Oct",
			"scales": 2140
		},
		{
			"Date": "Nov",
			"scales": 2311
		},
		{
			"Date": "Dez",
			"scales": 1972
		},
	]
=======
			Date: 'Jan',
			scales: 1998,
		},
		{
			Date: 'Feb',
			scales: 1850,
		},
		{
			Date: 'Mar',
			scales: 1720,
		},
		{
			Date: 'Apr',
			scales: 1818,
		},
		{
			Date: 'May',
			scales: 1920,
		},
		{
			Date: 'Jun',
			scales: 1802,
		},
		{
			Date: 'Jul',
			scales: 1945,
		},
		{
			Date: 'Aug',
			scales: 1856,
		},
		{
			Date: 'Sep',
			scales: 2107,
		},
		{
			Date: 'Oct',
			scales: 2140,
		},
		{
			Date: 'Nov',
			scales: 2311,
		},
		{
			Date: 'Dez',
			scales: 1972,
		},
	];
>>>>>>> Alexandra

	useEffect(() => {
		asyncFetch();
	}, []);

	const asyncFetch = async () => {
		const response = await fetch('http://localhost:7777/transactions');
		const data = await response.json();
		console.log('data from server', data);
		setData1(data);
		switch (diagramState) {
<<<<<<< HEAD
			case "Month":
=======
			case 'Month':
>>>>>>> Alexandra
				const date = new Date();
				const month = date.getMonth() + 1;
				console.log('actual month', month);
		}
	};
	const config = {
		data,
		padding: 'auto',
		xField: 'Date',
		yField: 'scales',
		xAxis: {
			// type: 'timeCat',
			tickCount: 5,
		},
		smooth: true,
	};

	return (
		<div>
			<SwitchDiagramButton diagramState={diagramState} setDiagramState={setDiagramState} />
			<Line {...config} />
		</div>
	);
};

export default DemoLine;

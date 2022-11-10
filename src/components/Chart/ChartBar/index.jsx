import "./style.css";

const ChartBar = ({ value, maxValue, month }) => {
	let barFillHeight = "0%";

	if (maxValue > 0) {
		barFillHeight = Math.round((value / maxValue) * 100) + "%";
	}

	return (
		<div className='chart-bar'>
			<span className='chart-bar__outer'>
				<div
					className='chart-bar__inner'
					style={{ height: barFillHeight }}
				></div>
			</span>
			<div className='chart-bar__month'>
				<span>{month}</span>
			</div>
		</div>
	);
};

export default ChartBar;

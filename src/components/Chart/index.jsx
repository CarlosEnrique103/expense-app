import ChartBar from "./ChartBar";
import "./style.css";

const Chart = ({ dataPoints }) => {
	const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
	const maxValue = Math.max(...dataPointValues);
	return (
		<div className='chart'>
			{dataPoints.map((chart) => (
				<ChartBar
					key={chart.month}
					value={chart.value}
					maxValue={maxValue}
					month={chart.month}
				/>
			))}
		</div>
	);
};

export default Chart;

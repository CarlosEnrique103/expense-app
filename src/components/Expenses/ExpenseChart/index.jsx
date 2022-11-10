import Card from "../../UI/Card";
import Chart from "./../../Chart";
import "./style.css";

const ExpenseChart = ({ expenses }) => {
	const chartDataPoints = [
		{ value: 0, month: "Ene" },
		{ value: 0, month: "Feb" },
		{ value: 0, month: "Mar" },
		{ value: 0, month: "Abr" },
		{ value: 0, month: "May" },
		{ value: 0, month: "Jun" },
		{ value: 0, month: "Jul" },
		{ value: 0, month: "Ago" },
		{ value: 0, month: "Set" },
		{ value: 0, month: "Oct" },
		{ value: 0, month: "Nov" },
		{ value: 0, month: "Dic" },
	];

	for (const expense of expenses) {
		const expenseMonth = expense.date.getMonth();
		chartDataPoints[expenseMonth].value += expense.expense;
	}

	return (
		<Card className='expense-chart'>
			<Chart dataPoints={chartDataPoints} />
		</Card>
	);
};

export default ExpenseChart;

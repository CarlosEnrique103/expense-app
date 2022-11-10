import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const currentYear = new Date().getFullYear().toString();

const Expenses = ({ expenses }) => {
	const [selectedYear, setSelectedYear] = useState(currentYear);

	const getFilterYearHandler = (year) => {
		setSelectedYear(year);
	};

	const filterExpenses = expenses.filter(
		(expense) => expense.date.getFullYear().toString() === selectedYear
	);

	return (
		<div>
			<ExpenseFilter
				onGetFilterYear={getFilterYearHandler}
				selectedYear={selectedYear}
			/>
			<ExpenseList expenses={filterExpenses} />
		</div>
	);
};

export default Expenses;

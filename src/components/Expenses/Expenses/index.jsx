import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter";
import ExpenseItem from "../ExpenseItem";
import ExpenseList from "../ExpenseList";
import "./styles.css";

const Expenses = ({ expenses }) => {
	const [selectedYear, setSelectedYear] = useState("2021");

	const getFilterYearHandler = (year) => {
		setSelectedYear(year);
	};
	console.log({ expenses });

	const filterExpenses = expenses.filter(
		(expense) => expense.date.getFullYear().toString() === selectedYear
	);
	console.log(filterExpenses);

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

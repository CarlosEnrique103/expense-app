import ExpenseItem from "../ExpenseItem";
import "./styles.css";

const Expenses = ({ expenses }) => {
	return (
		<div>
			{expenses.map((expense) => (
				<ExpenseItem {...expense} key={expense.text} />
			))}
		</div>
	);
};

export default Expenses;

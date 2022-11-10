import ExpenseItem from "../ExpenseItem";
import "./style.css";

function ExpenseList({ expenses }) {
	if (expenses.length === 0) {
		return (
			<p className='expense-list__fallback'>No se encontraron resultados.</p>
		);
	}
	return (
		<ul className='expense-list'>
			{expenses.map((expense) => (
				<ExpenseItem {...expense} key={expense.id} />
			))}
		</ul>
	);
}

export default ExpenseList;

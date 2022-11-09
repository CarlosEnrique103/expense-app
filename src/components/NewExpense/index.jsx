import ExpenseForm from "./ExpenseForm";
import Card from "./../UI/Card";
import "./style.css";

const NewExpense = ({ onSaveExpense }) => {
	const getExpenseDataHandler = (expenseData) => {
		onSaveExpense(expenseData);
	};

	return (
		<Card className='expense-new'>
			<h2>Nuevo gasto</h2>
			<ExpenseForm onGetExpenseData={getExpenseDataHandler} />
		</Card>
	);
};

export default NewExpense;

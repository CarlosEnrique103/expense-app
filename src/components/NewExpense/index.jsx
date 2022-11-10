import ExpenseForm from "./ExpenseForm";
import Card from "./../UI/Card";
import "./style.css";
import { useState } from "react";

const NewExpense = ({ onSaveExpense }) => {
	const [isEditing, setIsEditing] = useState(false);
	const getExpenseDataHandler = (expenseData) => {
		onSaveExpense(expenseData);
	};

	const toggleEditingHandler = () => {
		setIsEditing(!isEditing);
	};

	return (
		<Card className='expense-new'>
			{isEditing && <h2>Nuevo gasto</h2>}
			{!isEditing && (
				<div className='expense-new__button'>
					<button onClick={toggleEditingHandler}>Añadir</button>
				</div>
			)}
			{isEditing && (
				<ExpenseForm
					onGetExpenseData={getExpenseDataHandler}
					onCancelEditing={toggleEditingHandler}
				/>
			)}
		</Card>
	);
};

export default NewExpense;

import { useState } from "react";
import "./style.css";
const ExpenseForm = ({ onGetExpenseData }) => {
	const [expenseData, setExpenseData] = useState({
		description: "",
		expense: "",
		date: "",
	});

	const inputChangeHandler = (e) => {
		setExpenseData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		onGetExpenseData({
			...expenseData,
			id: Math.random().toString(),
			date: new Date(expenseData.date),
		});
		setExpenseData({
			description: "",
			expense: "",
			date: "",
		});
	};

	return (
		<form className='expense-form' onSubmit={submitHandler}>
			<div className='expense-form__controls'>
				<div className='expense-form__control'>
					<label htmlFor='description'>Description</label>
					<input
						type='text'
						id='description'
						name='description'
						onChange={inputChangeHandler}
						value={expenseData.description}
						required
					/>
				</div>
				<div className='expense-form__control'>
					<label htmlFor='expense'>Cantidad</label>
					<input
						type='number'
						id='expense'
						name='expense'
						step='0.01'
						onChange={inputChangeHandler}
						value={expenseData.expense}
						required
					/>
				</div>
				<div className='expense-form__control'>
					<label htmlFor='date'>Fecha</label>
					<input
						type='date'
						id='date'
						name='date'
						min='2020-01-01'
						max='2022-12-31'
						onChange={inputChangeHandler}
						value={expenseData.date}
						required
					/>
				</div>
			</div>
			<div className='expense-form__button__container'>
				<button type='submit'>Añadir</button>
			</div>
		</form>
	);
};

export default ExpenseForm;

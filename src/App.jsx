import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";

import NewExpense from "./components/NewExpense";
import Card from "./components/UI/Card";

const INITIAL_STATE = [
	{
		id: Math.random().toString(),
		description: "Compra de libros.",
		expense: 100.0,
		date: new Date("2020-10-01"),
	},
	{
		id: Math.random().toString(),
		description: "Pago de mensualidad de estudios.",
		expense: 80.0,
		date: new Date("2020-09-01"),
	},
	{
		id: Math.random().toString(),
		description: "Compras de ropa",
		expense: 100.0,
		date: new Date("2021-11-01"),
	},
	{
		id: Math.random().toString(),
		description: "Pagos de servicicios.",
		expense: 80.0,
		date: new Date("2021-10-01"),
	},
	{
		id: Math.random().toString(),
		description: "Pago de curso de javaScript.",
		expense: 56.0,
		date: new Date("2022-11-01"),
	},
	{
		id: Math.random().toString(),
		description: "Pago de curso de inglés.",
		expense: 56.0,
		date: new Date("2022-11-01"),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(INITIAL_STATE);

	const saveExpenseHandler = (data) => {
		setExpenses((prev) => [data, ...prev]);
	};

	return (
		<Card className='App'>
			<NewExpense onSaveExpense={saveExpenseHandler} />
			<Expenses expenses={expenses} />
		</Card>
	);
};

export default App;

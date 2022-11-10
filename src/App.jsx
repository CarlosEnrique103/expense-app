import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense";
import Card from "./components/UI/Card";

const INITIAL_STATE = [
	{
		id: Math.random().toString(),
		description: "Pagar la luz",
		expense: 100.0,
		date: new Date("2021-11-01"),
	},

	{
		id: Math.random().toString(),
		description: "Pagar el internet",
		expense: 80.0,
		date: new Date("2021-11-01"),
	},
	{
		id: Math.random().toString(),
		description: "Pagar el agua",
		expense: 56.0,
		date: new Date("2021-11-01"),
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

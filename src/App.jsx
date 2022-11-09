import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";

const App = () => {
	const expenses = [
		{
			description: "Pagar la luz",
			expense: 100.0,
			date: new Date(),
		},
		{
			description: "Pagar el internet",
			expense: 80.0,
			date: new Date(),
		},
		{
			description: "Pagar el agua",
			expense: 56.0,
			date: new Date(),
		},
	];

	return (
		<Card className='App'>
			<Expenses expenses={expenses} />
		</Card>
	);
};

export default App;

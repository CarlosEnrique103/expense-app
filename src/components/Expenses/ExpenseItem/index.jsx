import ExpenseDate from "../ExpenseDate";
import Card from "../../UI/Card";
import "./style.css";

const ExpenseItem = ({ description, expense, date }) => {
	return (
		<Card className='expense-item'>
			<ExpenseDate date={date} />
			<div className='expense-item__description'>
				<h2>{description}</h2>
				<span className='expense-item__expense'>
					S/. {parseFloat(expense).toFixed(2)}
				</span>
			</div>
		</Card>
	);
};

export default ExpenseItem;

import "./style.css";

const ExpenseDate = ({ date }) => {
	const month = date.toLocaleString("es-ES", { month: "long" });
	const day = date.toLocaleString("es-ES", { day: "2-digit" });
	const year = date.getFullYear();
	return (
		<div className='expense-date'>
			<span className='expense-date__month'>{month}</span>
			<span className='expense-date__year'>{year}</span>
			<span className='expense-date__day'>{day}</span>
		</div>
	);
};

export default ExpenseDate;

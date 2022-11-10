import "./style.css";
const ExpenseFilter = ({ onGetFilterYear, selectedYear }) => {
	const changeSelectHandler = (e) => onGetFilterYear(e.target.value);

	return (
		<div className='expense-filter'>
			<h2>Filtro por año</h2>
			<div className='expense-filter__options'>
				<select
					id='years'
					name='years'
					value={selectedYear}
					onChange={changeSelectHandler}
				>
					<option value='2020'>2020</option>
					<option value='2021'>2021</option>
					<option value='2022'>2022</option>
				</select>
			</div>
		</div>
	);
};

export default ExpenseFilter;

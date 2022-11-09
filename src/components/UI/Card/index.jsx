import "./style.css";

const Card = ({ children, className }) => {
	const newClass = `card ${className}`;
	return <div className={newClass}>{children}</div>;
};

export default Card;

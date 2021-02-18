import * as React from "react";

// Styles
import styles from "../assets/css/Select.module.css";
import appStyles from "../assets/css/App.module.css";

export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
	value: string;
	label: string;
}

const Select: React.FC<SelectProps> = ({
	onChange,
	value,
	label,
	children,
}) => {
	return (
		<div className={styles.selectContainer}>
			<label className={appStyles.label}>{label}</label>
			<select onChange={onChange} className={styles.select} value={value}>
				{children}
			</select>
		</div>
	);
};

export default Select;

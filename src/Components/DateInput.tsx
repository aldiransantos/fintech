import React from 'react';

type InterfaceDateInput = React.ComponentProps<'input'> & {
	label: string;
};

const DateInput = ({ label, ...props }: InterfaceDateInput) => {
	return (
		<div>
			<label htmlFor={label}>{label}</label>
			<input id={label} name={label} type="date" {...props} />
		</div>
	);
};

export default DateInput;

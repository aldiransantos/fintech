import DateInput from './DateInput';
import { useData } from '../Context/DataContext';

const DateRange = () => {
	const { start, setStart, end, setEnd } = useData();

	return (
		<form className="box flex" onSubmit={(e) => e.preventDefault()}>
			<DateInput
				label="Início"
				value={start}
				onChange={({ target }) => setStart(target.value)}
			/>
			<DateInput
				label="Final"
				value={end}
				onChange={({ target }) => setEnd(target.value)}
			/>
		</form>
	);
};

export default DateRange;

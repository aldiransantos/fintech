import {
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { InterfaceSales } from '../Context/DataContext';

type InterfaceSaleDay = {
	data: string;
	pago: number;
	processando: number;
	falha: number;
};

function transformData(data: InterfaceSales[]): InterfaceSaleDay[] {
	const days = data.reduce((acc: { [key: string]: InterfaceSaleDay }, item) => {
		const day = item.data.split(' ')[0];
		if (!acc[day]) {
			acc[day] = {
				data: day,
				pago: 0,
				falha: 0,
				processando: 0,
			};
		}
		acc[day][item.status] += item.preco;
		return acc;
	}, {});

	return Object.values(days).map((day) => ({
		...day,
		data: day.data.substring(5),
	}));
}

const SalesChart = ({ data }: { data: InterfaceSales[] }) => {
	const transformedData = transformData(data);

	return (
		<ResponsiveContainer width="99%" height={400}>
			<LineChart data={transformedData}>
				<XAxis dataKey="data" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="pago" stroke="#4c994c" strokeWidth={3} />
				<Line
					type="monotone"
					dataKey="processando"
					stroke="#e79634"
					strokeWidth={3}
				/>
				<Line
					type="monotone"
					dataKey="falha"
					stroke="#cf2e2e"
					strokeWidth={3}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default SalesChart;

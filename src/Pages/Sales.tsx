import { useData } from '../Context/DataContext';
import SaleItem from '../Components/SaleItem';
import Loading from '../Components/Loading';

const Sales = () => {
	const { data, loading } = useData();

	if (loading === true) return <Loading />;
	if (data === null) return null;
	return (
		<ul>
			{data.map((sale) => (
				<li key={sale.id}>
					<SaleItem sale={sale} />
				</li>
			))}
		</ul>
	);
};

export default Sales;

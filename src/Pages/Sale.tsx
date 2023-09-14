import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { InterfaceSales } from '../Context/DataContext';
import Loading from '../Components/Loading';

type InterfaceSalesWithoutDate = Omit<InterfaceSales, 'data'>;

const Sale = () => {
	const { id } = useParams();

	const { data, loading } = useFetch<InterfaceSalesWithoutDate>(
		`https://data.origamid.dev/vendas/${id}`,
	);

	if (loading === true) return <Loading />;
	if (data === null) return null;

	return (
		<div className="buyer">
			<div className="box mb">
				<span>ID:</span> {data.id}
			</div>
			<div className="box mb">
				<span>Nome:</span> {data.nome}
			</div>
			<div className="box mb">
				<span>Preço: </span>
				{data.preco.toLocaleString('pt-br', {
					style: 'currency',
					currency: 'BRL',
				})}
			</div>
			<div className="box mb">
				<span>Status:</span> {data.status}
			</div>
			<div className="box mb">
				<span>Pagamento:</span> {data.pagamento}
			</div>
		</div>
	);
};

export default Sale;

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
		<div>
			<div className="box mb">ID: {data.id}</div>
			<div className="box mb">Nome: {data.nome}</div>
			<div className="box mb">
				Preço:{' '}
				{data.preco.toLocaleString('pt-br', {
					style: 'currency',
					currency: 'BRL',
				})}
			</div>
			<div className="box mb">Status: {data.status}</div>
			<div className="box mb">Pagamento: {data.pagamento}</div>
		</div>
	);
};

export default Sale;

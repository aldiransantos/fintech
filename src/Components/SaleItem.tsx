import { NavLink } from 'react-router-dom';
import { InterfaceSales } from '../Context/DataContext';

const SaleItem = ({ sale }: { sale: InterfaceSales }) => {
	return (
		<div className="sale box">
			<NavLink to={`/vendas/${sale.id}`} style={{ fontFamily: 'monospace' }}>
				{sale.id}
			</NavLink>
			<div>{sale.nome}</div>
			<div>
				{sale.preco.toLocaleString('pt-br', {
					style: 'currency',
					currency: 'BRL',
				})}
			</div>
		</div>
	);
};

export default SaleItem;

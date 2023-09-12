import { InterfaceSales } from '../Context/DataContext';

const SaleItem = ({ sale }: { sale: InterfaceSales }) => {
	return (
		<div className="sale box">
			<a href="" style={{ fontFamily: 'monospace' }}>
				{sale.id}
			</a>
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

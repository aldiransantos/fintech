import { useData } from '../Context/DataContext';

const Summary = () => {
	const { data } = useData();

	if (data === null) return null;
	return (
		<section>
			<div className="summary flex mb">
				<div className="box">
					<h1>Vendas</h1>
					<p>
						{data
							.filter((e) => e.status !== 'falha')
							.reduce((acc, item) => acc + item.preco, 0)
							.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
					</p>
				</div>
				<div className="box">
					<h1>Recebido</h1>
					<p>
						{data
							.filter((e) => e.status === 'pago')
							.reduce((acc, item) => acc + item.preco, 0)
							.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
					</p>
				</div>
				<div className="box">
					<h1>Processando</h1>
					<p>
						{data
							.filter((e) => e.status === 'processando')
							.reduce((acc, item) => acc + item.preco, 0)
							.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
					</p>
				</div>
			</div>
			<div className="box">Gráficos</div>
		</section>
	);
};

export default Summary;

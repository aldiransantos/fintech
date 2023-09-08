import React from 'react';
import useFetch from '../Hooks/useFetch';

type InterfaceDataContext = {
	data: InterfaceVendas[] | null;
	loading: boolean;
	error: string | null;
};

type InterfaceVendas = {
	id: string;
	nome: string;
	preco: number;
	status: 'pago' | 'processando' | 'falha';
	pagamento: 'boleto' | 'cartao' | 'pix';
	parcelas: number | null;
	data: string;
};

const DataContext = React.createContext<InterfaceDataContext | null>(null);

export const useData = () => {
	const context = React.useContext(DataContext);
	if (!context) throw new Error('useData precisa estar em DataContextProvider');
	return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
	const { data, loading, error } = useFetch<InterfaceVendas[]>(
		'https://data.origamid.dev/vendas',
	);

	return (
		<DataContext.Provider value={{ data, loading, error }}>
			{children}
		</DataContext.Provider>
	);
};

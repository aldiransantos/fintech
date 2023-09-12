import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataContextProvider } from './Context/DataContext';
import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import Summary from './Pages/Summary';
import Sales from './Pages/Sales';
import Sale from './Pages/Sale';
import './Style.css';

function App() {
	return (
		<BrowserRouter>
			<DataContextProvider>
				<div className="container">
					<Sidenav />
					<main>
						<Header />
						<Routes>
							<Route path="/" element={<Summary />} />
							<Route path="/vendas" element={<Sales />} />
							<Route path="/vendas/:id" element={<Sale />} />
						</Routes>
					</main>
				</div>
			</DataContextProvider>
		</BrowserRouter>
	);
}

export default App;

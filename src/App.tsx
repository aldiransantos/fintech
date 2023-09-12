import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import { DataContextProvider } from './Context/DataContext';
import Sales from './Pages/Sales';
import Summary from './Pages/Summary';
import './Style.css';

function App() {
	return (
		<DataContextProvider>
			<div className="container">
				<Sidenav />
				<main>
					<Header />
					<Summary />
					<Sales />
				</main>
			</div>
		</DataContextProvider>
	);
}

export default App;

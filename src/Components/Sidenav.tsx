import { NavLink } from 'react-router-dom';
import resumo from '../assets/icons/resumo.svg';
import vendas from '../assets/icons/vendas.svg';
import webhooks from '../assets/icons/webhooks.svg';
import configuracoes from '../assets/icons/configuracoes.svg';
import contato from '../assets/icons/contato.svg';
import sair from '../assets/icons/sair.svg';
import FintechSVG from '../assets/FintechSvg';

const Sidenav = () => {
	return (
		<nav className="sidenav box bg-3">
			<FintechSVG title="Fintech Logo" />

			<ul>
				<li>
					<NavLink to="/">
						<span>
							<img src={resumo} alt="Resumo" />
						</span>
						Resumo
					</NavLink>
				</li>
				<li>
					<NavLink to="/vendas">
						<span>
							<img src={vendas} alt="Vendas" />
						</span>
						Vendas
					</NavLink>
				</li>
				<li>
					<p>
						<span>
							<img src={webhooks} alt="Webhooks" />
						</span>
						Webhooks
					</p>
				</li>
				<li>
					<p>
						<span>
							<img src={configuracoes} alt="Configuracões" />
						</span>
						Configurações
					</p>
				</li>
				<li>
					<p>
						<span>
							<img src={contato} alt="Contato" />
						</span>
						Contato
					</p>
				</li>
				<li>
					<p>
						<span>
							<img src={sair} alt="Sair" />
						</span>
						Sair
					</p>
				</li>
			</ul>
		</nav>
	);
};

export default Sidenav;

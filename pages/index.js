import MasterPage from '../components/Master';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import Eventos from '../components/Eventos';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
	<MasterPage>
		<div className="row">
			<div className="col-12 my-5">
				<h2>Precio del bitcoin</h2>
				<Precio 
					precio ={props.precioBitcoin}
				/>
			</div>

			<div className="col-md-8 my-5">
				<h2>Noticias sobre bitcoin</h2>
				<Noticias 
					noticias = {props.noticias}
				/>
			</div>

			<div className="col-md-4 my-5">
				<h2>Próximos eventos bitcoin</h2>
				<Eventos
					eventos={props.eventos}
				/>
			</div>
		</div>
	</MasterPage>
);

Index.getInitialProps = async () => {
	
	const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
	const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-22&sortBy=publishedAt&apiKey=f351d0269b0e4d6c89beec3bf201de5c&language=es');
	const eventos = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=bitcoin&location.address=spain&token=4ZRCD37WX2HGEKW6XXDU');
	
	const resPrecio = await precio.json();
	const resNoticias = await noticias.json();
	const resEventos = await eventos.json();
  
	return {
	  precioBitcoin: resPrecio.data.quotes.USD,
	  noticias: resNoticias.articles,
	  eventos: resEventos.events
	};
  };

export default Index;

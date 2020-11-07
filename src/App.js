import { StylesProvider } from '@material-ui/core';
import Destination from './Components/Destinations/Destination';
import Landing from './Components/Landing/Landing';
import NavBarPro from './Components/Navbar/NavBarPro';

function App() {
	return (
		<StylesProvider injectFirst>
			<div className='App' style={{ fontFamily: 'Lato' }}>
				<NavBarPro />
				<Landing />
				<Destination />
			</div>
		</StylesProvider>
	);
}

export default App;

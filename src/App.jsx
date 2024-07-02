
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/pages/Homepage";
import FavouritePage from "./components/pages/FavouritePage";




function App() {
	return (
		<div className='flex'>
			<Sidebar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/favourites' element={<FavouritePage />} />
			</Routes>
		</div>
	);
}

export default App;
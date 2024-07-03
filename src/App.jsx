
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/pages/Homepage";
import HelpPage from "./components/pages/HelpPage";




function App() {
	return (
		<div className='flex'>
			<Sidebar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/help' element={<HelpPage />} />
			</Routes>
		</div>
	);
}

export default App;
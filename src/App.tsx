// Importing necessary dependecies from React and other:
import { Routes, Route } from "react-router-dom";

// Importing necessary components to render:
import HomePage from './pages/HomePage';
import AboutUs from "./pages/AboutUs";
import ContactUs from './pages/ContactUs';
import Events from './pages/Events';
import JoinUs from './pages/JoinUs';
import Teams from './pages/Team';
import PageNotFound from './pages/PageNotFound';
import Layout from './pages/Layout';

const App = () => {

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="aboutus" element={<AboutUs />} />
				<Route path="events" element={<Events />} />
				<Route path="teams" element={<Teams />} />
				<Route path="joinus" element={<JoinUs />} />
				<Route path="contactus" element={<ContactUs />} />
				<Route path="*" element={<PageNotFound />} />
			</Route>
		</Routes>
	)
}

export default App;


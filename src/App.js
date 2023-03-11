import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SearchUser from "./components/search_user/Search_user";
import UploadFiles from "./components/upload/Upload_files";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Dashboard />}></Route>
				<Route exact path="/upload_files" element={<UploadFiles />}></Route>
				<Route exact path="/search" element={<SearchUser />}></Route>
			</Routes>
		</>
	);
}

export default App;

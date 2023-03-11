import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
	const routeMap = [
		{ route: "/upload_files", value: "Upload Files" },
		{ route: "/search", value: "Search Details" },
	];
	return (
		<div className="dashboard">
			<div className="dashboard__container">
				{routeMap.map((obj, idx) => {
					return (
						<NavLink to={obj.route} key={idx}>
							<button key={idx} className="dashboard__redirect">
								{obj?.value}
							</button>
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};

export default Dashboard;

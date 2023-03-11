import React, { useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import fire_db from "../utils/firebase";

const SearchUser = () => {
	// a local state to store the currently selected file.
	const [user, setSelectedUser] = React.useState(null);
	const [userDetails, setUserDetails] = useState([]);
	const [error, setError] = useState(null);
	const db = getFirestore();

	const handleSubmit = async (event) => {
		event.preventDefault();
		setError(false);
		if (event) {
			const docRef = doc(db, "test-db", user);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists() && docSnap.data()) {
				const user_details = [docSnap.data()];
				console.log(user_details);
				setUserDetails(user_details);
			} else {
				setError(true);
				console.log("doesn't exist");
			}
		} else {
			setError(true);
		}
	};

	return (
		<div className="upload">
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={(e) => setSelectedUser(e.target.value)} />
				<input type="submit" value="Search User" />
			</form>
			<div className="search__output">
				{!error ? (
					userDetails?.map((obj, idx) => {
						return (
							<div className="user" key={idx}>
								<div className="user__name">Name : {obj?.name}</div>
								<div className="user__age">Age : {obj?.age}</div>
							</div>
						);
					})
				) : (
					<h2>User Details not found!</h2>
				)}
			</div>
		</div>
	);
};

export default SearchUser;

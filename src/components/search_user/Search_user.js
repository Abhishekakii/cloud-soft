import React, { useEffect, useState } from "react";
import {
	doc,
	getDoc,
	getFirestore,
	getDocs,
	collection,
} from "firebase/firestore";
import app from "../utils/firebase";
// import fire_db from "../utils/firebase";

const SearchUser = () => {
	// a local state to store the currently selected file.
	const [user, setSelectedUser] = React.useState(null);
	const [userDetails, setUserDetails] = useState([]);
	const [error, setError] = useState(null);

	const db = getFirestore(app);
	const docs = [];

	const getMarker = async () => {
		const snapshot = await getDocs(collection(db, "Abhishek"));
		snapshot.forEach((doc) => {
			docs.push(doc.id);
		});
	};

	

	const handleSubmit = async (event) => {
		getMarker();
		const filtered_user = docs.filter((val) =>
			val?.toLowerCase()?.includes(user?.toLowerCase())
		)[0];
		event.preventDefault();
		setError(false);
		if (filtered_user) {
			const docRef = doc(db, "Abhishek", filtered_user);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists() && docSnap.data()) {
				const user_details = [docSnap.data()];
				console.log(user_details);
				setUserDetails(user_details);
			} else {
				setError(true);
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
								<div className="user__name">Name : {obj?.Name}</div>
								<div className="user__age">Country : {obj?.Country}</div>
								<div className="user__age">Website : {obj?.Website}</div>
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

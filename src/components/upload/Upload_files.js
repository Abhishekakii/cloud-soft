import React, { useState, useEffect } from "react";
// import fire_db from "../utils/firebase";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import Papa from "papaparse";

const UploadFiles = () => {
	// a local state to store the currently selected file.
	const [selectedFile, setSelectedFile] = useState(null);
	const [finalData, setFinalData] = useState([]);
	const db = getFirestore();

	// const readFile = () => {};
	useEffect(() => {
		insertDataIntoDB();
	}, [finalData]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		Papa.parse(selectedFile, {
			header: true,
			skipEmptyLines: true,
			complete: (results) => {
				setFinalData(results?.data);
			},
		});

		//* inserting data into db
	};

	const insertDataIntoDB = async () => {
		for (const obj of finalData) {
			await setDoc(doc(db, "Abhishek", obj.Auth), obj);
		}
	};

	return (
		<div className="upload">
			<form onSubmit={handleSubmit}>
				<input
					type="file"
					onChange={(e) => setSelectedFile(e.target.files[0])}
				/>
				<input type="submit" value="Upload File" />
			</form>
		</div>
	);
};

export default UploadFiles;

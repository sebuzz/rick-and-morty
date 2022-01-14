import { useMemo, useState } from "react";

const useData = url => {
	/* State machines*/
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	/* Fetch process*/
	useMemo(() => {
		fetch(url)
			.then(response => response.json())
			.then(json => {
				console.log(json);
				setData(json);
			})
			.catch(error_ => {
				setError(error_);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [url]);

	return {
		data,
		loading,
		error,
	};
};

export default useData;

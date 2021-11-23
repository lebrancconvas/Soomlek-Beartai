import React, {useState, useEffect} from 'react'; 

const APITest = () => {
	const [response, setResponse] = useState("");   
	const [error, setError] = useState(false); 

useEffect(() => {
	const fetchdata = async() => {
		const res = await fetch("http://localhost:8000/api");  
		res 
			.json()
			.then(res => setResponse(res))
			.catch(err => setError(err)) 
	}
	fetchdata(); 
});

	return (
		<div>
			<span>{JSON.stringify(response)}</span> 
		</div>
	)
}

export default APITest; 
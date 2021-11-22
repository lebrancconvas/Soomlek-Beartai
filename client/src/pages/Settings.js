import React from 'react'; 
import {Typography, Button} from '@mui/material'; 
import {Box} from '@mui/system';  
import SelectField from '../components/SelectField'; 
import TextFieldComp from '../components/TextFieldComp'; 
import useAxios from '../hooks/useAxios'; 

const Settings = () => {
	const {response, error, loading} = useAxios({url: '/api_category'}); 
	console.log(response); 
	const handleSubmit = e => {
		e.preventDefault(); 
	}; 
	return (
	<div>
		<Typography variant="h2" fontWeight="bold">
			Beartai ITQ 
		</Typography>
		<Typography variant="h5">
			Setting App. 
		</Typography>
		<form onSubmit={handleSubmit}>
			<SelectField label="Category" />  
			<SelectField label="Difficulty" />
			<SelectField label="Type" />
			<TextFieldComp />  
			<Box mt={3} width="100%"> 
				<Button fullWidth variant="contained" type="submit"> 
					Get Started. 
				</Button>
			</Box>
		</form>
	</div>
)}

export default Settings; 
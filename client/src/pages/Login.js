import React from 'react';
import {Typography, TextField, FormControl, InputLabel, Button} from '@mui/material';  
import {Box} from '@mui/system'; 
import {useNavigate} from 'react-router-dom'; 

const Login = () => {
	const navigate = useNavigate(); 
	const handleSubmit = (e) => {
		 e.preventDefault(); 
		 navigate('/settings');  
	}; 
    return (
			<div>
				<Typography variant="h2"> 
					Login 
				</Typography> 
				<form mt={3} onSubmit={handleSubmit}> 
					<TextField id="username" variant="outlined" label="Enter Your Username" fullWidth/>  
					<Box mt={2}>
						<Button variant="contained" type="submit">Submit</Button>  
					</Box>
				</form>
				
			</div>
    )
}

export default Login; 
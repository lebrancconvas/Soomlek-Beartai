import React from 'react'; 
import {Typography, Button} from '@mui/material'; 
import {Box} from '@mui/system'; 
import {useNavigate} from 'react-router-dom'; 

const Credit = () => {
	const navigate = useNavigate(); 
	const changeBack = () => {
		navigate('/'); 
	}
  return (
		<div>
			<Box>
				<Typography variant="h2">
					Credit. 
				</Typography>
			</Box>
			<Box>
				<Typography variant="h4" mt={3}>
					Soomlek 
				</Typography>
			</Box>
			<Box>
				<Typography variant="h4">
					Software Engineering Project 
				</Typography>
			</Box> 
			<Box>
				<Typography variant="h6" mt={5}> 
					By 
				</Typography>
			</Box>
			<Box>
				<Typography variant="h6">
					Sikhret Jampasri 61050306 (Software Tester) 
				</Typography>
			</Box>
			<Box>
				<Typography variant="h6">
					Poom Yimyuean 62050210 (Full-Stack Developer)  
				</Typography>
			</Box>
			<Box>
				<Typography variant="h6">
					Nophawit Mahanil 63050120 (Project Manager)  
				</Typography>
			</Box>
			<Box>
				<Typography variant="h6" mt={5}>  
					Department of Computer Science, Faculty of Science, <br />King Mongkut's Institute of Technology Ladkrabang (KMITL)  
				</Typography>
			</Box> 
			<Box>
				<Typography variant="h6">  
					Semester 1/2021  
				</Typography>
			</Box>
			<Box mt={3}> 
				<Button variant="contained" onClick={changeBack}>Back</Button> 
			</Box>
		</div>
	)
};

export default Credit; 

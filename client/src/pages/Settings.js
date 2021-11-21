import React from 'react'; 
import {Typography, Button} from '@mui/material'; 
import {Box} from '@mui/system';  
import SelectField from '../components/SelectField'; 

const Settings = () => (
	<div>
		<Typography variant="h2" fontWeight="bold">
			Beartai ITQ 
		</Typography>
		<Typography variant="h5">
			Setting App. 
		</Typography>
		<SelectField label="Category" />  
		<SelectField label="Difficulty" />
		<SelectField label="Type" /> 
		<Box mt={3} width="100%"> 
			<Button fullWidth variant="contained" type="submit"> 
				Get Started. 
			</Button>
		</Box>
	</div>
)

export default Settings; 
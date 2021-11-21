import React from 'react'; 
import {Typography} from '@mui/material'; 
import SelectField from '../components/SelectField'; 

const Settings = () => (
	<div>
		<Typography variant="h2" fontWeight="bold">
			Beartai ITQ 
		</Typography>
		<Typography variant="h5">
			Setting App. 
		</Typography>
		<SelectField label="category" /> 
	</div>
)

export default Settings; 
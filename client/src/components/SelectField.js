import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import {Box} from '@mui/system'; 

const SelectField = props  => {
		const {label} = props; 
		const [value, setValue] = useState(""); 
		const handleChange = () => {}; 
		return (
		<div>
			<Box mt={3} width="100%">
				<FormControl size="small" fullWidth>  
					<InputLabel>
						{label} 	
					</InputLabel> 
					<Select value={value} label={label} onChange={handleChange}>
						<MenuItem>Option 1</MenuItem>
						<MenuItem>Option 2</MenuItem>
						<MenuItem>Option 3</MenuItem> 
					</Select>
				</FormControl>
			</Box>
		</div>
)
}

export default SelectField; 

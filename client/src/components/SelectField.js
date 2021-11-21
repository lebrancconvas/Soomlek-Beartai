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
				<FormControl>
					<InputLabel>
						{label} 	
					</InputLabel> 
					<Select value={value} label={label} onChange={handleChange}>
						<MenuItem></MenuItem>
						<MenuItem></MenuItem>
						<MenuItem></MenuItem>
					</Select>
				</FormControl>
			</Box>
		</div>
)
}

export default SelectField; 

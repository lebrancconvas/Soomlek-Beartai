import React from "react";
import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import {handleAmountChange} from '../redux/actions'; 

const TextFieldComp = () => {
	const dispatch = useDispatch(); 
  const handleChange = e => {
		dispatch(handleAmountChange(e.target.value)); 
    if(e.target.value <= 0 && e.target.value !== null) {  
      alert("Cannot assign this number.");  
      e.target.value = 1; 
    }
	};
  return (
    <div>
      <Box mt={3} width="100%">
        <FormControl fullWidth size="small">
          <TextField
            onChange={handleChange}
            variant="outlined"
            label="Amount of Question."
            type="number"
            size="small"
          />
        </FormControl>
      </Box>
    </div>
  );
};

export default TextFieldComp;

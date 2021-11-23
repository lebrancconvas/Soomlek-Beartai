import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {useNavigate} from "react-router-dom"; 

const FirstPage = () => {
	const navigate = useNavigate(); 
	const changeLogin = () => navigate('/login');  
	const changeCredit = () => navigate('/credit'); 
  return (
    <div>
      <Typography variant="h2">Soomlek Beartai </Typography> 
      <Box mt={2}> 
        <Button variant="contained" fullWidth onClick={changeLogin}> 
          Login 
        </Button> 
      </Box> 
      <Box mt={2}>
        <Button variant="contained" fullWidth onClick={changeCredit}>   
					Credit  
				</Button> 
      </Box> 
    </div>
  );
};

export default FirstPage;

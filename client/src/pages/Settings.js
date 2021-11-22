import React from "react";
import { Typography, Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import {useNavigate} from "react-router-dom";  

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" }); 
	const navigate = useNavigate(); 

	if(loading) {
		return (
			<Box mt={20}> 
				<CircularProgress /> 
			</Box>
		)
	}

	if(error) {
		return (
			<Typography variant="h6" mt={20} color="red"> 
				Some Went Wrong. 	
			</Typography>
		)
	}

	const categoryOptions = [
		{id: "gadget", name: "Gadget"},
		{id: "social", name: "Social Media"},
		{id: "programming", name: "Programming"},
		{id: "game", name: "Video Game"},
		{id: "app", name: "Application"}  
	] 
	
	const difficultyOptions = [
		{id: "easy", name: "Easy"}, 
		{id: "medium", name: "Medium"}, 
		{id: "hard", name: "Hard"} 
	]
	const typeOptions = [
		{id: "multiple", name: "Multiple Choice."}, 
		{id: "boolean", name: "True / False"} 
	] 

  const handleSubmit = (e) => {
    e.preventDefault();
		navigate("/questions"); 
  };
  return (
    <div>
			<img src="./assets/beartai_logo.png" alt="beartai" /> 
      <Typography variant="h2" fontWeight="bold">
        Beartai ITQ
      </Typography>
      <Typography variant="h5">Setting App. </Typography>
      <form onSubmit={handleSubmit}>
        <SelectField options={categoryOptions} label="Category" /> 
        <SelectField options={difficultyOptions} label="Difficulty" />
        <SelectField options={typeOptions} label="Type" /> 
        <TextFieldComp />
        <Box mt={3} width="100%">
          <Button fullWidth variant="contained" type="submit">
            Get Started.
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Settings;

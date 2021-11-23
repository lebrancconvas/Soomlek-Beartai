import React from "react";
import { Typography, Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import SelectField from "../components/SelectField";
import TextFieldComp from "../components/TextFieldComp";
import useAxios from "../hooks/useAxios";
import {useNavigate} from "react-router-dom";  

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "http://127.0.0.1:8000/api" });   
	console.log(response); 
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
		{id: "trigonometry", name: "Trigonometry"},
		{id: "calculas", name: "Calculas"},
		{id: "linear", name: "Linear Algebra"},
		{id: "matrixvector", name: "Matrix & Vector"},
		{id: "combiprob", name: "Combinatoric & Probability"}   
	] 
	
	// const difficultyOptions = [
	// 	{id: "easy", name: "Easy"}, 
	// 	{id: "medium", name: "Medium"}, 
	// 	{id: "hard", name: "Hard"} 
	// ]
	// const typeOptions = [
	// 	{id: "multiple", name: "Multiple Choice."}, 
	// 	{id: "boolean", name: "True / False"} 
	// ] 

  const handleSubmit = (e) => {
    e.preventDefault();
		navigate("/questions"); 
  };
  return (
    <div>
      <Typography variant="h2" fontWeight="bold">
        Select Mode 
      </Typography>
      <form onSubmit={handleSubmit}>
        <SelectField options={categoryOptions} label="Category" /> 
        {/* <SelectField options={difficultyOptions} label="Difficulty" /> */}
        {/* <SelectField options={typeOptions} label="Type" />  */}
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

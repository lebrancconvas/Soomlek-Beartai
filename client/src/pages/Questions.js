import React from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {useSelector} from "react-redux"; 
import QuestionsData from "../data/QuestionsData";  

const Questions = () => {
	const {question_category, question_difficulty, question_type, amount_of_question} = useSelector(State => State); 
	console.log(amount_of_question); 
	return (
  <div>
		<Box> 
			<Typography variant="h3">Question 1</Typography> 
			<Typography variant="h5" mt={3}>{QuestionsData[0].question}</Typography>  
			<Box mt={2}>
				<Button variant="contained">{QuestionsData[0].answers[0]}</Button> 
			</Box>
			<Box mt={2}>
				<Button variant="contained">{QuestionsData[0].answers[1]}</Button>  
			</Box>
			<Box mt={2}>
				<Button variant="contained">{QuestionsData[0].answers[2]}</Button>  
			</Box>
			<Box mt={2}>
				<Button variant="contained">{QuestionsData[0].answers[3]}</Button> 
			</Box>
			<Box mt={5}>
				Score: 1 / 6 
			</Box> 
		</Box>
  </div>
)};

export default Questions;

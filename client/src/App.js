import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Credit from "./pages/Credit";
import Settings from "./pages/Settings";
import Questions from "./pages/Questions";
import FinalScreen from "./pages/FinalScreen";
import Login from "./pages/Login";
import APITest from "./pages/APITest"; 
import { Container } from "@mui/material";
import { Box } from "@mui/system";

const App = () => (
  <div>
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route exact path="/" element={<FirstPage />} />
            <Route exact path="/credit" element={<Credit />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/questions" element={<Questions />} />
            <Route exact path="/finalscreen" element={<FinalScreen />} />
            <Route exact path="/apitest" element={<APITest />} /> 
          </Routes>{" "}
        </Box>{" "}
      </Container>{" "}
    </Router>{" "}
  </div>
);

export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Settings from './pages/Settings'; 
import Questions from './pages/Questions'; 
import FinalScreen from './pages/FinalScreen'; 

const App = () => (
  <div> 
    <Router>
      <Routes>
        <Route exact path="/" element={<Settings />}/> 
        <Route exact path="/questions" element={<Questions />} />  
        <Route exact path="/finalscreen" element={<FinalScreen />} />    
      </Routes> 
    </Router> 
  </div>
);


export default App;


import Formmissing from './components/missing form/Formmissing';
import Navbar from './components/navbar/Navbar';
import MissingPersons from './components/missing_list/Missing_persons';
import MissingList from './components/find_loc/MissingList';
import Hero from './components/Hero/Hero';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div>
     
      {/* <Navbar/> */}
       {/* <Formmissing/> */}
      {/* <Home/> */}
      {/* <Missingcard/> */}
      {/* <MissingList/> */}
      {/* <SearchButton/> */}
      {/* <PersonCard/> */}
      
      {/* <Navbar/> */}
      {/* <Missing_persons/> */}
      {/* <Hero/> */}
      <Router>
        <Navbar/>
      
      
       <Routes>   
          <Route path="/" element={<Hero/>} ></Route>
          <Route path="/Formmissing" element={<Formmissing/>}></Route>
          <Route path="/Missingpeople" element={<MissingPersons/>}></Route>
          <Route path="/locations" element={<MissingList/>}></Route>
    
          

        </Routes>
      
   
      </Router>
    </div>
  );
}

export default App;

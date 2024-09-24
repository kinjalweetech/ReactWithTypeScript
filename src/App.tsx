// // import React from 'react';
// // import logo from './logo.svg';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import ApiCall from './Component/ApiCall';
// import CountTask from './Component/CountTask';
// import Hello from './Component/Hello';
// import SingleUserApi from './Component/SingleUserApi';


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<ApiCall />} />
//         {/* <Route path='/profile/:id' element={<SingleUserApi/>} />  */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApiCall from "./Component/ApiCall";
import BasicTask from "./Component/BasicTask";
import ToDo from "./Component/ToDo";
// import UserDetail from "./Component/SingleUserApi";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<ApiCall/>} /> */}
          {/* <Route path="/" element= {<BasicTask/>}/> */}
          <Route path="/" element={<ToDo/>}/>
      </Routes>
    </Router>
  );
};

export default App;

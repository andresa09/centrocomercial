import React, { Fragment } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AllPersonal from "./components/AllPersonal";
import CreatePersonal from './components/CreatePersonal';
import UpdatePersonal from "./components/UpdatePersonal";
import DeletePersonal from "./components/DeletePersonal";
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
            <Navbar/>
        <Routes>
              <Route path="/" exact element={<AllPersonal/>}/>
              <Route path="/ccviva/create" exact element={< CreatePersonal/>}/>
              <Route path="/ccviva/update" exact element={<UpdatePersonal/>}/>
              <Route path="/ccviva/delete" exact element={<DeletePersonal/>}/>
              <Route path="*" exact element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

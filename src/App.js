import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {Regular} from './components/Regular';
import {Hot} from './components/Hot';


function App () {

 
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/Regular">Regular</Link>
              </li>
              <li>
                <Link to="/Hot">Hot Mems</Link>
              </li>
            </ul>
           <Routes>
                 <Route path='/Regular' element={< Regular />}></Route>
                 <Route path='/Hot' element={< Hot />}></Route>
          </Routes>
          </div>
       </Router>
    );
  
}


export default App;